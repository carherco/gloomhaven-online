import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Map18Matrix } from 'src/app/data/mapsDef';
import { Token } from 'src/app/model/token';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ScenarioSnapshot } from 'src/app/model/scenario';
import { ActivatedRoute } from '@angular/router';
import { Map18Tokens, Map16Matrix, Map16Tokens } from './../../data/mapsDef';

@Component({
  selector: 'app-hex-responsive-page',
  templateUrl: './hex-responsive-page.component.html',
  styleUrls: ['./hex-responsive-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HexResponsivePageComponent implements OnInit {

  @Input() originalMatrix = Map16Matrix;
  @Input() availableTokens: Token[] = Map16Tokens;

  currentMatrix: Token[][][];
  currentMatrixFirebaseId: string;

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

  firebaseItemsCollection;

  constructor(private route: ActivatedRoute, private afs: AngularFirestore, private cdr: ChangeDetectorRef, private modalService: NgbModal) {
    this.currentMatrix = [];
    this.route.params.subscribe( p => {
      switch (p.id) {
        case '16':
          this.originalMatrix = Map16Matrix;
          this.availableTokens = Map16Tokens;
          this.currentMatrixFirebaseId = 'envelope_openers_16';
          break;
        case '18':
          this.originalMatrix = Map18Matrix;
          this.availableTokens = Map18Tokens;
          this.currentMatrixFirebaseId = 'envelope_openers_18';
          break;
        default:
          this.originalMatrix = Map16Matrix;
          this.availableTokens = Map16Tokens;
          this.currentMatrixFirebaseId = 'envelope_openers_16';
          break;
      }
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    // this.currentMatrix = this.originalMatrix.map(
    //   fila => fila.map(
    //     celda => {
    //       let token: Token[];
    //       switch (celda) {
    //         case '-':
    //           token = [{ id: '-', type: 'terrain', src: 'assets/corridor-stone_token.png' }];
    //           break;
    //         case '0':
    //           token = [{ id: '0', type: 'terrain', src: 'assets/corridor-stone_token.png' }];
    //           break;
    //         case 'D':
    //           token = [{ id: 'D', type: 'door', src: 'assets/images/overlay-tokens/doors/stone-door.png' }];
    //           break;
    //         case 'W':
    //           token = [{ id: 'W', type: 'difficult-terrain', src: 'assets/water_token.png' }];
    //           break;
    //         default:
    //           token = [];
    //           break;
    //       }
    //       return token;
    //     }
    //   )
    // );

    // const scenarioSnapshot: ScenarioSnapshot = {
    //   scenarioId: 16,
    //   currentMatrix: JSON.stringify(this.currentMatrix)
    // };

    // Para dar de alta el escenario en la base de datos
    this.firebaseItemsCollection = this.afs.collection<ScenarioSnapshot>('escenarios');
    // this.firebaseItemsCollection.add({ id: this.currentMatrixFirebaseId, scenarioId: 18, currentMatrix: scenarioSnapshot.currentMatrix});

    // Dar de alta creando yo el id
    // const id = this.afs.createId();
    // const item: Item = { id, name };
    // this.itemsCollection.doc(id).set(item);

    // Para hacer un Get del escenario
    const currentMatrixDoc = this.afs.doc<ScenarioSnapshot>('escenarios/' + this.currentMatrixFirebaseId);
    currentMatrixDoc.valueChanges().subscribe(
      doc => {
        this.currentMatrix = JSON.parse(doc.currentMatrix);
        this.cdr.detectChanges();
      }
    );
  }

  dragStartFromPool(token: Token) {
    this.dragType = 'fromPool';
    this.dragContent = {...token};
  }

  dragStartPlay(row: number, column: number) {
    this.dragType = 'fromMap';
    this.dragOrigin = {row, column};
    this.dragContent = this.currentMatrix[this.dragOrigin.row][this.dragOrigin.column].slice(-1)[0];
  }

  drop(row: number, column: number, event) {
    event.preventDefault();
    this.dragEnd = {row, column};

    if (['terrain', 'difficult-terrain', 'door'].includes(this.dragContent.type)) {
      return null;
    }

    if (this.dragType === 'fromPool') {
      this.currentMatrix[this.dragEnd.row][this.dragEnd.column].push(this.dragContent);
    }

    if (this.dragType === 'fromMap') {
      this.currentMatrix[this.dragOrigin.row][this.dragOrigin.column].pop();
      this.currentMatrix[this.dragEnd.row][this.dragEnd.column].push(this.dragContent);
    }

    this.currentMatrix = [...this.currentMatrix];
    this.dragType = null;
    this.dragContent = null;
    this.save();
  }

  allowDrop(event) {
    event.preventDefault();
  }

  onShowStats(token: Token, row: number, column: number, modalContent) {
    this.elementSelected = token;
    this.rowSelected = row;
    this.columnSelected = column;
    this.showStats = true;
    this.modalService.open(modalContent, { centered: true });
  }

  damageButtonClick() {
    this.elementSelected.health--;
  }

  healButtonClick() {
    this.elementSelected.health++;
  }

  closeModal(modal) {
    this.showStats = false;
    this.save();
    modal.close();
  }

  removeToken(modal) {
    this.currentMatrix[this.rowSelected][this.columnSelected].pop();
    this.closeModal(modal);
  }

  save() {
    const preparedDoc = {scenarioId: 18, currentMatrix: JSON.stringify(this.currentMatrix)};
    this.firebaseItemsCollection.doc(this.currentMatrixFirebaseId).set(preparedDoc);
  }

}
