import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/model/player';
import { Players } from 'src/app/data/players';
import { GameManagerService } from 'src/app/services/game-manager.service';

@Component({
  selector: 'app-select-perks-page',
  templateUrl: './select-perks-page.component.html',
  styleUrls: ['./select-perks-page.component.css']
})
export class SelectPerksPageComponent implements OnInit {

  player: Player;
  availablePerks = [];
  selectedPerks: string[] = [];

  constructor(private game: GameManagerService) {
    this.player = this.game.getPlayer();
    this.availablePerks = this.player.character.perks;
    this.selectedPerks = this.player.perks;
  }

  ngOnInit(): void { }

}
