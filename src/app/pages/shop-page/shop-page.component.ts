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
  itemIndexes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42,
    107, 113, 81, 88, 130, 116, 74, 44, 98, 77,
    135, 139, 147, 76, 108, 112, 103, 123,
    75, 133
  ];

// Faltan estos 5 en el cálculo automatizado: 107,81(tesoro nº 63),88(tesoro nº 01),116,112

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
      }
    );

    this.items = ITEMS.filter( (item, index) => this.itemIndexes.includes(index + 1) );
  }
}
