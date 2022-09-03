import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-treasures-tracker',
  templateUrl: './treasures-tracker.component.html',
  styleUrls: ['./treasures-tracker.component.css']
})
export class TreasuresTrackerComponent {

  @Input() treasures: {id: number, title: string}[] = [];

}
