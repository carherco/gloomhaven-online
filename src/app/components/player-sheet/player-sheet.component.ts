import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/model/character';
import { ITEMS } from 'src/app/data/items';
import { ItemDef } from 'src/app/model/item';

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

  private getOwnedItemObjects(): ItemDef[] {
    // ownedItems contains 1-based indices into the ITEMS array
    return this.character.ownedItems
      .map(id => ITEMS[id - 1])
      .filter(item => item !== undefined);
  }

  getItemForSlot(slot: 'head' | 'body' | 'legs' | 'one-hand'): ItemDef | null {
    return this.getOwnedItemObjects().find(item => item.type === slot) || null;
  }

  getTwoHandedItem(): ItemDef | null {
    return this.getOwnedItemObjects().find(item => item.type === 'two-hands') || null;
  }

  getSmallItems(): ItemDef[] {
    return this.getOwnedItemObjects().filter(item => item.type === 'small-item');
  }

  getOneHandItems(): ItemDef[] {
    return this.getOwnedItemObjects().filter(item => item.type === 'one-hand');
  }

}
