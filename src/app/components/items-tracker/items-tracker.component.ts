import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-items-tracker',
  templateUrl: './items-tracker.component.html',
  styleUrls: ['./items-tracker.component.css']
})
export class ItemsTrackerComponent implements OnInit {

  @Input() items;
  constructor() { }

  ngOnInit(): void {
  }

}
