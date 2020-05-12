import { Component, OnInit } from '@angular/core';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  scenarios;
  constructor(private campaing: CampaignManagerService) {
    this.scenarios = this.campaing.getScenarios();
  }

  ngOnInit(): void {
  }

  open() {}

}
