import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScenarioCreatorService } from 'src/app/services/scenario-creator.service';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';
import { EnemyTracker } from 'src/app/model/monsterAbilityCard';

@Component({
  selector: 'app-intiative-tracker',
  templateUrl: './intiative-tracker.component.html',
  styleUrls: ['./intiative-tracker.component.css']
})
export class IntiativeTrackerComponent implements OnInit {

  scenarioId: number;
  playersTrackers = [];
  summonsTrackers = [];
  enemiesTrackers: EnemyTracker[] = [];
  allTrackersOrderedByInitiative;

  constructor(
    private route: ActivatedRoute,
    private scenarioCreator: ScenarioCreatorService,
    private campaignManager: CampaignManagerService
  ) {
    this.route.params.subscribe( p => {
      this.scenarioId = p.id;
      const scenario = this.scenarioCreator.getScenarioData(this.scenarioId);
      this.playersTrackers =  this.campaignManager.getPlayersTokens().filter( t => t.type === 'player');
      const enemies = scenario.tokens.filter( t => ['enemy', 'boss'].includes(t.type));
      this.enemiesTrackers = this.scenarioCreator.getEnemiesTrackers(enemies);
      console.log(this.enemiesTrackers);
    });
  }

  ngOnInit(): void {
  }

}
