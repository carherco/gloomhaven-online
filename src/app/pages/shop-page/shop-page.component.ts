import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemType, ItemDef } from 'src/app/model/item';
import { ITEMS } from 'src/app/data/items';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';
import { Character } from 'src/app/model/character';

interface CountOfItem {
  id: number;
  timesOwned: number;
}

export interface ShopItemDef extends ItemDef {
  timesOwned: number;
}

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopPageComponent {
  items: ShopItemDef[] = [];
  itemTypeSelected: ItemType = 'all';

  priceModifier = 0;
  prosperityLevel = 0;

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.subscribe(
      status => {
        this.prosperityLevel = status.city.prosperityLevel;
        this.priceModifier = status.shop.priceModifier;

        const itemIndexesOwnedByPlayers: number[] = status.characters.flatMap((character: Character) => character.ownedItems);
        const countOfitemsOwnedByPlayers: CountOfItem[] = Object.entries(
          itemIndexesOwnedByPlayers.reduce<Record<number, number>>((acc, item) => {
              acc[item] = (acc[item] || 0) + 1;
              return acc;
          }, {})
        ).map(([id, timesOwned]) => ({ id: Number(id), timesOwned }));

        const itemsWithTimesOwnedPropertyAndFixedAmount: ShopItemDef[] = ITEMS.map((item, index) => {
          const countItem = countOfitemsOwnedByPlayers.find(ci => ci.id === index + 1);
          return {
              ...item,
              amount: status.shop.oneCopyItems.includes(index + 1) ? 1 : item.amount,
              timesOwned: countItem ? countItem.timesOwned : 0,
          };
        });

        this.items = itemsWithTimesOwnedPropertyAndFixedAmount.filter( (_item, index) => status.shop.items.includes(index + 1) );
        this.items = this.items.concat(itemsWithTimesOwnedPropertyAndFixedAmount.filter( (_item, index) => status.shop.oneCopyItems.includes(index + 1) ));
      }
    );
  }
}
