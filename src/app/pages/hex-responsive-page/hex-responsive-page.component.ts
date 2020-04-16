import { Map18Tokens } from './../../data/mapsDef';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Map18Matrix } from 'src/app/data/mapsDef';
import { Token } from 'src/app/model/token';

@Component({
  selector: 'app-hex-responsive-page',
  templateUrl: './hex-responsive-page.component.html',
  styleUrls: ['./hex-responsive-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HexResponsivePageComponent implements OnInit {

  @Input() originalMatrix = Map18Matrix;
  @Input() availableTokens: Token[] = Map18Tokens;

  currentMatrix: Token[][][];

  private dragType: 'fromPool'|'fromMap' = null;
  private dragContent: Token;

  private dragOrigin = {
    row: -1,
    column: -1,
  };

  private dragEnd = {
    row: -1,
    column: -1,
  };

  showStats = false;
  elementSelected: Token;
  rowSelected: number;
  columnSelected: number;

  constructor() {
    // this.currentMatrix = this.originalMatrix.map(arr => arr.slice(0));
  }

  ngOnInit(): void {
    this.currentMatrix = this.originalMatrix.map(
      fila => fila.map(
        celda => {
          let token: Token[];
          switch (celda) {
            case '-':
              token = [{ id: '-', type: 'terrain', src: 'assets/corridor-stone_token.png' }];
              break;
            case '0':
              token = [{ id: '0', type: 'terrain', src: 'assets/corridor-stone_token.png' }];
              break;
            case 'W':
              token = [{ id: 'W', type: 'difficult-terrain', src: 'assets/water_token.png' }];
              break;
            default:
              token = [];
              break;
          }
          return token;
        }
      )
    );
  }

  dragStartFromPool(token: Token) {
    this.dragType = 'fromPool';
    this.dragContent = token;
  }

  dragStartPlay(row: number, column: number) {
    this.dragType = 'fromMap';
    this.dragOrigin = {row, column};
  }

  drop(row: number, column: number) {
    this.dragEnd = {row, column};

    if (this.dragType === 'fromPool') {
      this.currentMatrix[this.dragEnd.row][this.dragEnd.column].push(this.dragContent);
    }

    if (this.dragType === 'fromMap') {
      const originContent = this.currentMatrix[this.dragOrigin.row][this.dragOrigin.column].pop();
      this.currentMatrix[this.dragEnd.row][this.dragEnd.column].push(originContent);
    }

    this.currentMatrix = [...this.currentMatrix];
    this.dragType = null;
  }

  allowDrop(event) {
    event.preventDefault();
  }

  onShowStats(token: Token, row: number, column: number) {
    this.elementSelected = token;
    this.rowSelected = row;
    this.columnSelected = column;
    this.showStats = true;
  }

  damageButtonClick() {
    this.elementSelected.health--;
  }

  healButtonClick() {
    this.elementSelected.health++;
  }

  hideElementStats() {
    this.showStats = false;
  }

  removeToken() {
    this.currentMatrix[this.rowSelected][this.columnSelected].pop();
    this.hideElementStats();
  }

  // openDialog(token): void {
  //   const dialogRef = this.dialog.open(MapDialogComponent, {
  //     width: '250px',
  //     data: {name: 'asdfasd', animal: 'asdafd'}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed', result);
  //   });
  // }

}
