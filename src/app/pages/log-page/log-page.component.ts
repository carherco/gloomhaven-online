import { Component, OnInit } from '@angular/core';
import { CampaignStatus, CampaignStatusService } from 'src/app/services/campaign-status.service';
import { tap } from 'rxjs/operators';
import { SCENARIOS, ScenarioStatus, ScenarioWithStatus } from 'src/app/data/scenarios';
import { SCENARIO_TREAURES, TREASURES, TREASURE_SCENARIOS } from 'src/app/data/treasures';

function sortScenarios(a: ScenarioWithStatus, b: ScenarioWithStatus): number {
  return a.id - b.id;
}

@Component({
  selector: 'app-log-page',
  templateUrl: './log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class LogPageComponent {

  public status!: CampaignStatus;
  private allScenarioIds: number[] = [...Array(95).keys()];
  public scenarios: ScenarioWithStatus[] = [];
  private availableScenarios!: ScenarioWithStatus[];
  private blockedScenarios!: ScenarioWithStatus[];
  private completedScenarios!: ScenarioWithStatus[];

  public treasures: {id: number, title: string}[] = [];
  public treasuresLooted: {id: number, title: string}[] = [];

  public partyAchievements: string[] = [];
  public globalAchievements: string[] = [];

  public decipheredMessages: string[] = [];

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.pipe(
      tap(status => this.status = status),
      tap(
        status => {
          const partyAchievements = status.party.achievements;
          const globalAchievements = status.city.achievements;

          const unlockedScenariosIds = status.unlockedScenarios;
          const completedScenariosIds = status.completedScenarios;

          const allScenariosWithStatus: ScenarioWithStatus[] = this.allScenarioIds.map(
            id => {
              const scenario = SCENARIOS[id];

              if(!unlockedScenariosIds.includes(id)) {
                return {id, ...SCENARIOS[id], status: 'Unavailable'}
              }

              if(completedScenariosIds.includes(id)) {
                return {id, ...scenario, status: 'Completed'};
              }

              if(scenario.onlyOneAchievementRequired) {
                if( scenario.globalAchievementsRequired.some(achievement => globalAchievements.includes(achievement))
                    || scenario.partyAchievementsRequired.some(achievement => partyAchievements.includes(achievement))
                ) {
                  return {id, ...scenario, status: 'Available'};
                }
                return {id, ...scenario, status: 'Blocked'};
              }

              if( scenario.globalAchievementsRequired.every(achievement => globalAchievements.includes(achievement))
                  && scenario.partyAchievementsRequired.every(achievement => partyAchievements.includes(achievement))
                  && !scenario.globalAchievementsRequiredIncomplete.some(achievement => globalAchievements.includes(achievement))
              ) {
                return {id, ...scenario, status: 'Available'};
              }
              return {id, ...scenario, status: 'Blocked'};
            }
          );

          this.availableScenarios = allScenariosWithStatus.sort(sortScenarios).filter( scenario => scenario.status === 'Available');
          this.blockedScenarios = allScenariosWithStatus.sort(sortScenarios).filter( scenario => scenario.status === 'Blocked');
          this.completedScenarios = allScenariosWithStatus.sort(sortScenarios).filter( scenario => scenario.status === 'Completed');
          this.partyAchievements = status.party.achievements;
          this.globalAchievements = status.city.achievements;
          this.decipheredMessages = status.decipheredMessages;
        }
      ),
      tap( _ => this.scenarios = this.completedScenarios.concat(this.blockedScenarios).concat(this.availableScenarios)),
      tap( status => status.completedScenarios.forEach(
        scenarioId => {
          const scenarioTreasures = SCENARIO_TREAURES[scenarioId];
          const treasuresWithTitle = scenarioTreasures.map( id => ({id, title: TREASURES[id].title}) );
          this.treasures = this.treasures.concat(treasuresWithTitle);
          this.treasuresLooted = status.treasuresLooted.map( id => ({id, title: TREASURES[id].title}) );
        }
      ))
    ).subscribe();
   }

}
