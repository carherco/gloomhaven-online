import { Component, OnInit } from '@angular/core';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';
import { SCENARIOS, ScenarioWithStatus } from 'src/app/data/scenarios';
import { SCENARIO_COORDINATES } from 'src/app/data/scenario-coordinates';
import { tap } from 'rxjs/operators';

function sortScenarios(a: ScenarioWithStatus, b: ScenarioWithStatus): number {
  return a.id - b.id;
}

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.css']
})
export class MapPageComponent implements OnInit {

  prosperityPoints!: number;
  prosperityLevel!: number;
  
  checks: string[] = [];
  milestones = [4, 9, 15, 22, 30, 39, 50, 64];

  private allScenarioIds: number[] = [...Array(95).keys()];
  public scenarios: (ScenarioWithStatus & {top?: number, left?: number, missingRequirements?: string})[] = [];
  public selectedScenario: (ScenarioWithStatus & {top?: number, left?: number, missingRequirements?: string}) | null = null;

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.pipe(
      tap(status => {
        // Prosperity Logic
        this.prosperityPoints = status.city.prosperityPoints;
        this.prosperityLevel = status.city.prosperityLevel;

        this.checks = [];
        for (let i = 1; i <= 64; i++) {
          if (i <= this.prosperityPoints) {
            this.checks.push('check_box'); // Using Material Icon name
          } else {
            this.checks.push(''); // Empty for unchecked to keep spacing or use 'check_box_outline_blank'
          }
        }

        // Scenarios Logic
        const partyAchievements = status.party.achievements;
        const globalAchievements = status.city.achievements;
        const unlockedScenariosIds = status.unlockedScenarios;
        const completedScenariosIds = status.completedScenarios;

        const allScenariosWithStatus = this.allScenarioIds.map(
          id => {
            const scenario = SCENARIOS[id];
            let status: 'Unavailable'|'Available'|'Completed'|'Blocked' = 'Unavailable';
            let missingRequirements: string | undefined;

            if(!unlockedScenariosIds.includes(id)) {
               status = 'Unavailable';
            } else if(completedScenariosIds.includes(id)) {
               status = 'Completed';
            } else if(scenario.onlyOneAchievementRequired) {
              if( scenario.globalAchievementsRequired.some(achievement => globalAchievements.includes(achievement))
                  || scenario.partyAchievementsRequired.some(achievement => partyAchievements.includes(achievement))
              ) {
                status = 'Available';
              } else {
                status = 'Blocked';
                // Calculate missing requirements (One of these is needed)
                const reqs = [
                    ...scenario.globalAchievementsRequired, 
                    ...scenario.partyAchievementsRequired
                ];
                missingRequirements = `Requires ONE of: ${reqs.join(', ')}`;
              }
            } else {
              if( scenario.globalAchievementsRequired.every(achievement => globalAchievements.includes(achievement))
                  && scenario.partyAchievementsRequired.every(achievement => partyAchievements.includes(achievement))
                  && !scenario.globalAchievementsRequiredIncomplete.some(achievement => globalAchievements.includes(achievement))
              ) {
                status = 'Available';
              } else {
                status = 'Blocked';
                // Calculate missing requirements (ALL required)
                const missing: string[] = [];
                scenario.globalAchievementsRequired.forEach(req => {
                    if (!globalAchievements.includes(req)) missing.push(req);
                });
                scenario.partyAchievementsRequired.forEach(req => {
                    if (!partyAchievements.includes(req)) missing.push(req);
                });
                scenario.globalAchievementsRequiredIncomplete.forEach(req => {
                    if (globalAchievements.includes(req)) missing.push(`CANNOT HAVE ${req}`);
                });
                
                if (missing.length > 0) {
                     missingRequirements = `Requires: ${missing.join(', ')}`;
                }
              }
            }
            
            // Merge coordinates if available
            const coords = SCENARIO_COORDINATES[id];
            return {
              id, 
              ...scenario, 
              status,
              missingRequirements,
              top: coords ? coords.top : undefined,
              left: coords ? coords.left : undefined
            };
          }
        );

        const availableScenarios = allScenariosWithStatus.sort(sortScenarios).filter( scenario => scenario.status === 'Available');
        const blockedScenarios = allScenariosWithStatus.sort(sortScenarios).filter( scenario => scenario.status === 'Blocked');
        const completedScenarios = allScenariosWithStatus.sort(sortScenarios).filter( scenario => scenario.status === 'Completed');
        
        this.scenarios = completedScenarios.concat(blockedScenarios).concat(availableScenarios);
      })
    ).subscribe();
  }

  ngOnInit(): void {
  }

  selectScenario(scenario: any) {
    // Toggle if clicking the same one
    if (this.selectedScenario && this.selectedScenario.id === scenario.id) {
      this.selectedScenario = null;
    } else {
      this.selectedScenario = scenario;
    }
  }

  clearSelection() {
    this.selectedScenario = null;
  }


}
