import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { Characters } from 'src/app/data/characters';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrls: ['./players-page.component.css']
})
export class PlayersPageComponent implements OnInit {

  characters: Character[];
  selectedCharacter: Character;

  constructor(private campService: CampaignManagerService, private modalService: NgbModal) {
    this.characters = this.campService.getCharacters();
  }

  ngOnInit(): void {
  }

  openPQModal(modalContent, character: Character) {
    this.selectedCharacter = character;
    this.modalService.open(modalContent, { centered: true });
  }

}
