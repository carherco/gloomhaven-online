import { Component, OnInit } from '@angular/core';
import { ScenarioText, SCENARIO_TEXTS } from 'src/app/data/scenario_texts';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent {

  introductionParagraphs: string[] = SCENARIO_TEXTS[0].introduction;
  completedScenarios: ScenarioText[] = [];

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.subscribe(
      status => {
        this.completedScenarios = status.completedScenarios.map( id => SCENARIO_TEXTS[id]);
      }
    );
  }
}
