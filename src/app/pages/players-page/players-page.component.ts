import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { Players } from 'src/app/data/players';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent implements OnInit {

  players: Player[];
  selectedPlayer: Player;

  constructor(private campService: CampaignManagerService, private modalService: NgbModal) {
    this.players = this.campService.getPlayers();
  }

  ngOnInit(): void {
  }

  openPQModal(modalContent, player: Player) {
    this.selectedPlayer = player;
    this.modalService.open(modalContent, { centered: true });
  }

}
