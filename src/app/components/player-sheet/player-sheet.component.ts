import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'app-player-sheet',
  templateUrl: './player-sheet.component.html',
  styleUrls: ['./player-sheet.component.css']
})
export class PlayerSheetComponent {

  @Input() character!: Character;

  constructor(private modalService: NgbModal) { }

  openPQModal(modalContent: any) {
    this.modalService.open(modalContent, { centered: true });
  }

}
