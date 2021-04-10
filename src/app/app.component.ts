import { Component } from '@angular/core';
import { loadCampaing } from './data/actions';
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
  }
}
