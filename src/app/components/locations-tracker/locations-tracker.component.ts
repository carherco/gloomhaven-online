import { Component, Input, OnInit } from '@angular/core';
import { ScenarioWithStatus } from 'src/app/data/scenarios';

@Component({
  selector: 'app-locations-tracker',
  templateUrl: './locations-tracker.component.html',
  styleUrls: ['./locations-tracker.component.css']
})
export class LocationsTrackerComponent implements OnInit {

  @Input() locations: ScenarioWithStatus[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
