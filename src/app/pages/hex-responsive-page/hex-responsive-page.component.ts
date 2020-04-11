import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hex-responsive-page',
  templateUrl: './hex-responsive-page.component.html',
  styleUrls: ['./hex-responsive-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HexResponsivePageComponent implements OnInit {

  @Input() matrix = [
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
      ['0', 'E', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['0', 'E', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['-', '-', '0', '0', '-', '-', '-', '-', '-', '0', '0', '-', '-'],
    ['-', '-', '0', '0', '0', '-', '-', '-', '-', '0', '0', '0', '-', '-'],
      ['-', '-', '0', '0', '-', '-', '-', '-', '-', '0', '0', '-', '-'],
    ['-', '-', '0', '1', '3', '-', '-', '-', '-', '0', '0', '0', '-', '-'],
      ['-', '-', '2', '4', '-', '-', '-', '-', '-', '0', '0', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0', '-', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '-'],
      ['-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '-'],
  ];

  private dragOrigin = {
    row: -1,
    column: -1,
  };

  private dragEnd = {
    row: -1,
    column: -1,
  };

  constructor() { }

  ngOnInit(): void {
  }

  dragstart(row: number, column: number, event) {
    this.dragOrigin = {row, column};
  }

  drop(row: number, column: number, event) {
    this.dragEnd = {row, column};
    const originContent = this.matrix[this.dragOrigin.row][this.dragOrigin.column];
    this.matrix[this.dragEnd.row][this.dragEnd.column] = originContent;
    this.matrix[this.dragOrigin.row][this.dragOrigin.column] = '0';
    this.matrix = [...this.matrix];
  }

  allowDrop(event) {
    event.preventDefault();
  }

}
