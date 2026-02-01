import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';

@Component({
  selector: 'app-town-records',
  templateUrl: './town-records.component.html',
  styleUrls: ['./town-records.component.css']
})
export class TownRecordsComponent {

  characters: Character[];
  selectedCharacter!: Character;
  expandedCharacters: Set<string> = new Set();

  constructor(private campService: CampaignManagerService) {
    this.characters = this.campService.getRetiredCharacters();
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
