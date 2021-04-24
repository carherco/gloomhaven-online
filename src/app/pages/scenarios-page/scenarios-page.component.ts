import { Component, OnInit } from '@angular/core';
import { SCENARIOS } from 'src/app/data/scenarios';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';

@Component({
  selector: 'app-scenarios-page',
  templateUrl: './scenarios-page.component.html',
  styleUrls: ['./scenarios-page.component.css']
})
export class ScenariosPageComponent implements OnInit {

  scenarios = SCENARIOS.slice(1);
  completedScenariosIds: number[] = [];

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.subscribe(
      status => {
        this.completedScenariosIds = status.completedScenarios;
      }
    );
  }

  ngOnInit(): void {
  }

}
