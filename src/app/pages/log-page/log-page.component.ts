import { Component, OnInit } from '@angular/core';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';
import { tap } from 'rxjs/operators';
import { SCENARIOS, ScenarioWithStatus } from 'src/app/data/scenarios';

function sortScenarios(a: number, b: number): number {
  return a - b;
}

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent {

  public scenarios: ScenarioWithStatus[];
  private unlockedButNotPlayedScenarios: ScenarioWithStatus[];
  private completedScenarios: ScenarioWithStatus[];

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.pipe(
      tap(
        status => {
          const unlockedScenariosIds = status.unlockedScenarios;
          const completedScenariosIds = status.completedScenarios;
          const unlockedButNotPlayedScenariosIds = unlockedScenariosIds.filter(x => !completedScenariosIds.includes(x));

          this.unlockedButNotPlayedScenarios = unlockedButNotPlayedScenariosIds.sort(sortScenarios).map( id => ({id, ...SCENARIOS[id], status: 'Available'}));
          this.completedScenarios = completedScenariosIds.sort(sortScenarios).map( id => ({id, ...SCENARIOS[id], status: 'Completed'}));
        }
      ),
      tap( _ => this.scenarios = this.completedScenarios.concat(this.unlockedButNotPlayedScenarios))
    ).subscribe();
   }

}
