import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent {

  characters: Character[];
  selectedCharacter: Character;

  constructor(private campService: CampaignManagerService, private modalService: NgbModal) {
    this.characters = this.campService.getCharacters();
  }

  openPQModal(modalContent, character: Character) {
    this.selectedCharacter = character;
    this.modalService.open(modalContent, { centered: true });
  }

}
