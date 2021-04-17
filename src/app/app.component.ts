import { Component } from '@angular/core';
import { loadCampaing } from './data/actions';
import { Stats } from './data/enemiesDefs';
import { MONSTERS } from './data/mosters';
import { CampaignStatusService } from './services/campaign-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gloomhaven-card-manager';

  constructor(campaign: CampaignStatusService) {
    const status = loadCampaing();
    console.log(status);
    campaign.setStatus(status);

    // const mappingAttributes = {
    //   '%shield%': 's',
    //   '%target%': 'ta',
    //   '%retaliate%': 're',
    //   '%pierce%': 'pi',
    //   '%poison%': 'po',
    //   '%muddle%': 'mu',
    //   '%wound%': 'wo',
    //   '%immobilize%': 'im',
    //   '%disarm%': 'da',
    //   '%curse%': 'cu',
    //   'Advantage': 'ad',
    //   'Attackers gain Disadvantage': 'di'
    // };

    // const mappingImmunities = {
    //   '%poison%': 'po',
    //   '%muddle%': 'mu',
    //   '%wound%': 'wo',
    //   '%immobilize%': 'im',
    //   '%stun%': 'st',
    //   '%curse%': 'cu',
    // };

    // let stats = {};
    // MONSTERS.monsters['Wind Demon'].level.forEach(
    //   levelItem => {
    //     const level = levelItem.level;
    //     const normal = {
    //       h: levelItem.normal.health,
    //       m: levelItem.normal.move,
    //       a: levelItem.normal.attack,
    //       r: levelItem.normal.range,
    //     };
    //     levelItem.normal.attributes.forEach(
    //       a => {
    //         if (a.includes('%target%') || a.includes('%shield%') || a.includes('%retaliate%')  || a.includes('%pierce%')){
    //           const [keyalias, value] = a.split(' ');
    //           const key = mappingAttributes[keyalias];
    //           normal[key] = +value;
    //         } else {
    //           const key = mappingAttributes[a];
    //           normal[key] = true;
    //         }
    //       }
    //     );

    //     const elite = {
    //       h: levelItem.elite.health,
    //       m: levelItem.elite.move,
    //       a: levelItem.elite.attack,
    //       r: levelItem.elite.range,
    //     };
    //     levelItem.elite.attributes.forEach(
    //       a => {
    //         if (a.includes('%target%') || a.includes('%shield%') || a.includes('%retaliate%')  || a.includes('%pierce%')){
    //           const [keyalias, value] = a.split(' ');
    //           console.log({keyalias, value});
    //           const key = mappingAttributes[keyalias];
    //           elite[key] = +value;
    //         } else {
    //           const key = mappingAttributes[a];
    //           elite[key] = true;
    //         }
    //       }
    //     );

    //     stats[level] = {normal, elite};
    //   }
    // );

    // console.log(stats);
  }
}
