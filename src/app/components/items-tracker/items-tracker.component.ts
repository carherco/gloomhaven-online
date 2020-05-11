import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-items-tracker',
  templateUrl: './items-tracker.component.html',
  styleUrls: ['./items-tracker.component.css']
})
export class ItemsTrackerComponent implements OnInit {

  @Input() itemNumbers: number[] = [];
  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = this.itemNumbers.map(
      id => { return {id, spent: false, consumed: false, flipped: false}; }
    );
  }

  toggleSpent(item: Item) {
    item.spent = !item.spent;
  }

  toggleConsumed(item: Item) {
    item.consumed = !item.consumed;
  }

  toggleFlipped(item: Item) {
    item.flipped = !item.flipped;
  }

}
