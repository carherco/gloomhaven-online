import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Map18Matrix } from 'src/app/data/mapsDef';

@Component({
  selector: 'app-hex-responsive-page',
  templateUrl: './hex-responsive-page.component.html',
  styleUrls: ['./hex-responsive-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HexResponsivePageComponent implements OnInit {

  @Input() originalMatrix = Map18Matrix;

  currentMatrix;

  private dragType: 'setup'|'play' = null;
  private dragContent: string;

  private dragOrigin = {
    row: -1,
    column: -1,
  };

  private dragEnd = {
    row: -1,
    column: -1,
  };

  constructor() {
    this.currentMatrix = this.originalMatrix.map(arr => arr.slice(0));
  }

  ngOnInit(): void {
  }

  dragStartSetup(content: string) {
    this.dragType = 'setup';
    this.dragContent = content;
  }

  dragStartPlay(row: number, column: number) {
    this.dragType = 'play';
    this.dragOrigin = {row, column};
  }

  drop(row: number, column: number) {
    this.dragEnd = {row, column};

    if (this.dragType === 'setup') {
      this.currentMatrix[this.dragEnd.row][this.dragEnd.column] = this.dragContent;
    }

    if (this.dragType === 'play') {
      const originContent = this.currentMatrix[this.dragOrigin.row][this.dragOrigin.column];
      this.currentMatrix[this.dragEnd.row][this.dragEnd.column] = originContent;
      this.currentMatrix[this.dragOrigin.row][this.dragOrigin.column] = this.originalMatrix[this.dragOrigin.row][this.dragOrigin.column];
    }

    this.currentMatrix = [...this.currentMatrix];
    this.dragType = null;
  }

  allowDrop(event) {
    event.preventDefault();
  }

}
