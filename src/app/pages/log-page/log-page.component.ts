import { Component, OnInit } from '@angular/core';
import { CampaignStatus, CampaignStatusService } from 'src/app/services/campaign-status.service';
import { tap } from 'rxjs/operators';
import { SCENARIOS, ScenarioWithStatus } from 'src/app/data/scenarios';
import { SCENARIO_TREAURES, TREASURES, TREASURE_SCENARIOS } from 'src/app/data/treasures';

function sortScenarios(a: number, b: number): number {
  return a - b;
}

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent {

  public status: CampaignStatus;
  public scenarios: ScenarioWithStatus[] = [];
  private unlockedButNotPlayedScenarios: ScenarioWithStatus[];
  private completedScenarios: ScenarioWithStatus[];

  public treasures: {id: number, title: string}[] = [];

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.pipe(
      tap(status => this.status = status),
      tap(
        status => {
          const unlockedScenariosIds = status.unlockedScenarios;
          const completedScenariosIds = status.completedScenarios;
          const unlockedButNotPlayedScenariosIds = unlockedScenariosIds.filter(x => !completedScenariosIds.includes(x));

          this.unlockedButNotPlayedScenarios = unlockedButNotPlayedScenariosIds.sort(sortScenarios).map( id => ({id, ...SCENARIOS[id], status: 'Available'}));
          this.completedScenarios = completedScenariosIds.sort(sortScenarios).map( id => ({id, ...SCENARIOS[id], status: 'Completed'}));
        }
      ),
      tap( _ => this.scenarios = this.completedScenarios.concat(this.unlockedButNotPlayedScenarios)),
      tap( status => status.completedScenarios.forEach(
        scenarioId => {
          const scenarioTreasures = SCENARIO_TREAURES[scenarioId];
          const treasuresWithTitle = scenarioTreasures.map( id => ({id, title: TREASURES[id].title}) );
          this.treasures = this.treasures.concat(treasuresWithTitle);
        }
      ))
    ).subscribe();
   }

}
