import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScenarioCreatorService } from 'src/app/services/scenario-creator.service';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';
import { EnemyTracker } from 'src/app/model/monsterAbilityCard';
import { TokenDef } from 'src/app/data/mapsDef';

@Component({
  selector: 'app-intiative-tracker',
  templateUrl: './intiative-tracker.component.html',
  styleUrls: ['./intiative-tracker.component.css']
})
export class IntiativeTrackerComponent implements OnInit {

  scenarioId: number;
  playersTrackers: {id: string, type: 'player'|'enemy', currentInitiative: number}[] = [];
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
      const playersTokens =  this.campaignManager.getPlayersTokens().filter( t => t.type === 'player');
      const enemies: TokenDef[] = scenario.tokens.filter( t => ['enemy', 'boss'].includes(t.type));
      this.playersTrackers = playersTokens.map( pt => ({...pt, type: 'player', currentInitiative: null}) );
      this.enemiesTrackers = this.scenarioCreator.getEnemiesTrackers(enemies);
      this.roundStatus = 'pre-round';
    });
  }

  ngOnInit(): void {
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

  shuffleRequiredMosntersDecks() {

  }

  onDrawCards(): void {
    // Sacar cartas de monstruos

    // Ordenar por iniciativas
    const allTrackers: {id: string, type: string, currentInitiative: number}[] = this.playersTrackers.concat(this.enemiesTrackers);
    this.allTrackersOrderedByInitiative = allTrackers.sort(
      (a, b) => {
        if (a.currentInitiative < b.currentInitiative) {
          return -1;
        }
        if (a.currentInitiative > b.currentInitiative) {
          return 1;
        }
        return a.type === 'player' ? -1 : 1;
      });

    this.roundStatus = 'round';
  }

}
