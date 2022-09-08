import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemType, ItemDef } from 'src/app/model/item';
import { ITEMS } from 'src/app/data/items';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopPageComponent {
  itemIndexes = [];

  items: ItemDef[] = [];
  itemTypeSelected: ItemType = 'all';

  priceModifier = 0;
  prosperityLevel = 0;

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.subscribe(
      status => {
        this.prosperityLevel = status.city.prosperityLevel;
        this.priceModifier = status.shop.priceModifier;
        this.itemIndexes = status.shop.items;
        this.items = ITEMS.filter( (_item, index) => this.itemIndexes.includes(index + 1) );
      }
    );
  }
}
