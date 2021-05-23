import { Component, OnInit } from '@angular/core';
import { ItemType, ItemDef } from 'src/app/model/item';
import { ITEMS } from 'src/app/data/items';
import { CampaignStatusService } from 'src/app/services/campaign-status.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {
  itemIndexes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35,
    36, 37, 38, 39, 40, 41, 42,
    107, 113, 81, 88, 130, 116, 74, 44, 98, 77,
    135, 139, 147, 76, 108, 112, 103, 123
  ];
  items: ItemDef[] = [];
  itemTypeSelected: ItemType = 'all';

  priceModifier = 0;

  reputation = 0;
  prosperityLevel = 0;
  private priceModifierMap = [
    -5, -5, -4, -4, -4, -4, -3, -3, -3, -3, -2, -2, -2, -2, -1, -1, -1, -1,
    0, 0, 0, 0, 0,
    1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5
  ];

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.subscribe(
      status => {
        this.prosperityLevel = status.city.prosperityLevel;
        this.reputation = status.party.reputation;
        this.priceModifier = this.priceModifierMap[20 - this.reputation];
      }
    );

    this.items = ITEMS.filter( (item, index) => this.itemIndexes.includes(index + 1) );
  }

  ngOnInit(): void {
  }

}
