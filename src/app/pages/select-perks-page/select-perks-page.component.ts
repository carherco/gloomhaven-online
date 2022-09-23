import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { Characters } from 'src/app/data/characters';
import { GameManagerService } from 'src/app/services/game-manager.service';

@Component({
  selector: 'app-select-perks-page',
  templateUrl: './select-perks-page.component.html',
  styleUrls: ['./select-perks-page.component.css']
})
export class SelectPerksPageComponent implements OnInit {

  player: Character;
  availablePerks: any[] = [];
  selectedPerks: string[] = [];

  constructor(private game: GameManagerService) {
    this.player = this.game.getCharacter();
    this.availablePerks = this.player.characterClass.perks;
    this.selectedPerks = this.player.perks;
  }

  ngOnInit(): void { }

}
