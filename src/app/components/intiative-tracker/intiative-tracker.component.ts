import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScenarioCreatorService } from 'src/app/services/scenario-creator.service';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';
import { EnemyTracker } from 'src/app/model/monsterAbilityCard';
import { TokenDef } from 'src/app/data/mapsDef';
import { Stats } from 'src/app/data/enemiesDefs';

export interface Tracker {
  id: string;
  type: 'player'|'enemy';
  src: string;
  currentInitiative?: number;
}

export interface PlayerTracker {
  id: string;
  type: 'player'|'enemy';
  src: string;
  maxHealth?: number;
  stats?: Object;
  status?: Object;
  currentInitiative?: number;
}


@Component({
  selector: 'app-intiative-tracker',
  templateUrl: './intiative-tracker.component.html',
  styleUrls: ['./intiative-tracker.component.css']
})
export class IntiativeTrackerComponent implements OnInit {

  scenarioId: number;
  playersTrackers: PlayerTracker[] = [];
  summonsTrackers = [];
  enemiesTrackers: EnemyTracker[] = [];
  allTrackersOrderedByInitiative;
  roundStatus: 'pre-round' | 'round';

  constructor(
    private route: ActivatedRoute,
    private scenarioCreator: ScenarioCreatorService,
    private campaignManager: CampaignManagerService
  ) {
    this.route.params.subscribe( p => {
      this.scenarioId = p.id;
      const scenario = this.scenarioCreator.getScenarioData(this.scenarioId);
      const playersTokens =  this.campaignManager.getCharactersTokens().filter( t => t.type === 'player');
      const enemies: TokenDef[] = scenario.tokens.filter( t => ['enemy', 'boss'].includes(t.type));
      this.playersTrackers = playersTokens.map( pt => ({...pt, type: 'player', currentInitiative: null}) );
      console.log(this.playersTrackers);
      this.enemiesTrackers = this.scenarioCreator.getEnemiesTrackers(enemies);
      this.roundStatus = 'pre-round';
    });
  }

  ngOnInit(): void {
    this.shuffleAllMosntersDecks();
  }

  onNextRound() {
    this.clearPlayersInitiatives();
    this.roundStatus = 'pre-round';
    this.clearPlayersInitiatives();
    this.shuffleRequiredMosntersDecks();
  }

  clearPlayersInitiatives() {
    this.playersTrackers = this.playersTrackers.map( pt => ({...pt, currentInitiative: null}) );
  }

  private shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  shuffleAllMosntersDecks() {
    this.enemiesTrackers.forEach(tracker => {
        tracker.deckCards = tracker.deckCards.concat(tracker.drawnCards);
        tracker.drawnCards = [];
        tracker.currentCard = null;
        this.shuffle(tracker.deckCards);
      }
    );
  }

  shuffleRequiredMosntersDecks() {
    this.enemiesTrackers.forEach(tracker => {
        if (tracker.currentCard?.mustShuffle) {
          tracker.deckCards = tracker.deckCards.concat(tracker.drawnCards);
          tracker.drawnCards = [];
          tracker.currentCard = null;
          this.shuffle(tracker.deckCards);
        }
      }
    );
  }

  onDrawCards(): void {
    this.drawMonstersCards();
    this.orderTrackersByInitiatives();
    this.roundStatus = 'round';
  }

  drawMonstersCards() {
    this.enemiesTrackers = this.enemiesTrackers.map(
      tracker => {
        tracker.currentCard = tracker.deckCards.pop();
        tracker.drawnCards.push(tracker.currentCard);
        tracker.currentInitiative = tracker.currentCard.initiative;
        return {...tracker};
      }
    );
  }

  orderTrackersByInitiatives() {
    const allTrackers: Tracker[] = this.playersTrackers.concat(this.enemiesTrackers);
    this.allTrackersOrderedByInitiative = [...allTrackers].sort(
      (a, b) => {
        if (a.currentInitiative < b.currentInitiative) {
          return -1;
        }
        if (a.currentInitiative > b.currentInitiative) {
          return 1;
        }
        return a.type === 'player' ? -1 : 1; // En caso de empate, preferencia para el jugador frente a los monstruos
      });
  }

}
