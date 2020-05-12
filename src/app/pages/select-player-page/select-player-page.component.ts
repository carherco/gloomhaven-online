import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { Players } from 'src/app/data/players';
import { Router } from '@angular/router';
import { GameManagerService } from 'src/app/services/game-manager.service';

@Component({
  selector: 'app-select-player-page',
  templateUrl: './select-player-page.component.html',
  styleUrls: ['./select-player-page.component.css']
})
export class SelectPlayerPageComponent implements OnInit {

  playerSelected: Player = null;
  players: Player[] = Players;
  constructor(private router: Router, private game: GameManagerService) { }

  ngOnInit(): void { }

  select(player: Player) {
    this.playerSelected = player;
  }

  confirmPlayer() {
    this.game.setPlayer(this.playerSelected);
    this.router.navigate(['/select-perks']);
  }

}
