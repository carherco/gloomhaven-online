import { Component } from '@angular/core';
import { Character } from 'src/app/model/character';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent {

  characters: Character[];
  selectedCharacter!: Character;

  constructor(private campService: CampaignManagerService) {
    this.characters = this.campService.getCharacters();
  }

}
