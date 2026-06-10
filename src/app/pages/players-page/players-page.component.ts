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
  expandedCharacters: Set<string> = new Set();

  constructor(private campService: CampaignManagerService) {
    this.characters = this.campService.getCharacters();
  }

  toggleCharacter(name: string) {
    if (this.expandedCharacters.has(name)) {
      this.expandedCharacters.delete(name);
    } else {
      this.expandedCharacters.add(name);
    }
  }

  isExpanded(name: string): boolean {
    return this.expandedCharacters.has(name);
  }

}
