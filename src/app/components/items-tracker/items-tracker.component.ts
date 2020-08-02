import { Component, OnInit, Input } from '@angular/core';
import { ItemInPlay } from 'src/app/model/item';
import { ITEMS } from 'src/app/data/items';

@Component({
  selector: 'app-items-tracker',
  templateUrl: './items-tracker.component.html',
  styleUrls: ['./items-tracker.component.css']
})
export class ItemsTrackerComponent implements OnInit {

  @Input() itemNumbers: number[] = [];
  items: ItemInPlay[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = ITEMS
                   .filter( (item, index) => this.itemNumbers.includes(index + 1) )
                   .map( item => ({...item, spent: false, consumed: false, flipped: false}) );

  }

  toggleSpent(item: ItemInPlay) {
    item.spent = !item.spent;
  }

  toggleConsumed(item: ItemInPlay) {
    item.consumed = !item.consumed;
  }

  toggleFlipped(item: ItemInPlay) {
    item.flipped = !item.flipped;
  }

}
