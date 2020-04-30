import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { Players } from 'src/app/data/players';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent implements OnInit {

  players: Player[];

  constructor(private campService: CampaignManagerService) {
    this.players = this.campService.getPlayers();
  }

  ngOnInit(): void {
  }

}
