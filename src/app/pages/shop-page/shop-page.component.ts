import { Component, OnInit } from '@angular/core';
import { ItemType, ItemDef } from 'src/app/model/item';
import { ITEMS } from 'src/app/data/items';

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
    107, 113, 81, 88, 130, 116, 74, 44, 98,
    135, 139, 147, 76
  ];
  items: ItemDef[] = [];
  itemTypeSelected: ItemType = 'all';

  priceModifier;

  reputation = 8;
  private priceModifierMap = [
    -5, -5, -4, -4, -4, -4, -3, -3, -3, -3, -2, -2, -2, -2, -1, -1, -1, -1,
    0, 0, 0, 0, 0,
    1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5
  ];

  constructor() {
    this.priceModifier = this.priceModifierMap[20 - this.reputation];
    this.items = ITEMS.filter( (item, index) => this.itemIndexes.includes(index + 1) );
  }

  ngOnInit(): void {
  }

}
