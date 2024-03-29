import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { Characters } from 'src/app/data/characters';
import { Router } from '@angular/router';
import { GameManagerService } from 'src/app/services/game-manager.service';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';

@Component({
  selector: 'app-select-player-page',
  templateUrl: './select-player-page.component.html',
  styleUrls: ['./select-player-page.component.css']
})
export class SelectPlayerPageComponent implements OnInit {

  playerSelected!: Character;
  characters: Character[] = [];
  constructor(private router: Router, private game: GameManagerService, private campService: CampaignManagerService) {
    this.characters = this.campService.getCharacters();
  }

  ngOnInit(): void { }

  select(player: Character) {
    this.playerSelected = player;
  }

  confirmPlayer() {
    this.game.setPlayer(this.playerSelected);
    this.router.navigate(['/select-perks']);
  }

}
