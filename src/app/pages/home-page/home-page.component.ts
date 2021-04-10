import { Component, OnInit } from '@angular/core';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  prosperityPoints: number;
  prosperityLevel: number;
  amountGoldDonated: number;
  reputation: number;
  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.subscribe(
      status => {
        this.prosperityPoints = status.city.prosperityPoints;
        this.prosperityLevel = status.city.prosperityLevel;
        this.amountGoldDonated = status.amountGoldDonated;
        this.reputation = status.party.reputation;
      }
    );
  }

  ngOnInit(): void {
  }

}
