import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations-track',
  templateUrl: './donations-track.component.html',
  styleUrls: ['./donations-track.component.css']
})
export class DonationsTrackComponent implements OnInit {

  from = 1;
  to = 100;
  @Input() current = 36;
  milestones = [10, 15, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];
  checks: string[] = [];

  defaultColor = 'black';
  milestoneColor = 'orange';

  constructor() {}

  ngOnInit(): void {
    // Checks marcados hasta el valor (o normales o milestones)
    for (let i = this.from; i <= this.to; i++) {
      if (i <= this.current) {
        this.checks.push('check_box');
      }
      else {
        this.checks.push('check_box_outline_blank');
      }
    }
  }

  isMilestone(index: number) {
    return this.milestones.includes(index);
  }
}
