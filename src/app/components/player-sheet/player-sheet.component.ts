import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Character } from 'src/app/model/character';
import { ITEMS } from 'src/app/data/items';
import { ItemDef, ItemType } from 'src/app/model/item';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';

interface ShopItemWithAvailability extends ItemDef {
  timesOwned: number;
  isOutOfStock: boolean;
  canAfford: boolean;
  adjustedPrice: number;
}

@Component({
  selector: 'app-player-sheet',
  templateUrl: './player-sheet.component.html',
  styleUrls: ['./player-sheet.component.css']
})
export class PlayerSheetComponent {

  @Input() character!: Character;

  shopItems: ShopItemWithAvailability[] = [];
  selectedSlotType: ItemType = 'all';
  priceModifier = 0;

  constructor(
    private modalService: NgbModal,
    private campaign: CampaignStatusService
  ) { }

  openPQModal(modalContent: any) {
    this.modalService.open(modalContent, { centered: true });
  }

  openShopModal(slotType: ItemType, modalContent: any) {
    this.selectedSlotType = slotType;
    
    // Get campaign status for shop data
    this.campaign.getStatus$().subscribe(status => {
      this.priceModifier = status.shop.priceModifier;
      
      // Count items owned by all players
      const itemIndexesOwnedByPlayers: number[] = status.characters.flatMap((char: Character) => char.ownedItems);
      const countOfItemsOwned: Record<number, number> = itemIndexesOwnedByPlayers.reduce((acc, itemId) => {
        acc[itemId] = (acc[itemId] || 0) + 1;
        return acc;
      }, {} as Record<number, number>);

      // Get available shop items
      const availableItemIndices = [...status.shop.items, ...status.shop.oneCopyItems];
      
      this.shopItems = ITEMS
        .map((item, index) => {
          const itemId = index + 1;
          const timesOwned = countOfItemsOwned[itemId] || 0;
          const maxAmount = status.shop.oneCopyItems.includes(itemId) ? 1 : item.amount;
          const adjustedPrice = item.price + this.priceModifier;
          
          return {
            ...item,
            timesOwned,
            isOutOfStock: timesOwned >= maxAmount,
            canAfford: this.character.gold >= adjustedPrice,
            adjustedPrice
          };
        })
        .filter((item, index) => {
          const itemId = index + 1;
          return availableItemIndices.includes(itemId) && item.type === slotType;
        });

      this.modalService.open(modalContent, { centered: true, size: 'lg' });
    });
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
