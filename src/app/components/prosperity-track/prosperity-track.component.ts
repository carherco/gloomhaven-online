import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prosperity-track',
  templateUrl: './prosperity-track.component.html',
  styleUrls: ['./prosperity-track.component.css']
})
export class ProsperityTrackComponent implements OnInit {

  from = 1;
  to = 64;
  @Input() current = 27;
  milestones = [4, 9, 15, 22, 30, 39, 50, 64];
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
