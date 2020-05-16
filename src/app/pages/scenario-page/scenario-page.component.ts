import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Token } from 'src/app/model/token';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { ScenarioSnapshot } from 'src/app/model/scenario';
import { ActivatedRoute } from '@angular/router';
import { ScenarioCreatorService } from 'src/app/services/scenario-creator.service';
import { CampaignManagerService } from 'src/app/services/campaign-manager.service';


@Component({
  selector: 'app-scenario-page',
  templateUrl: './scenario-page.component.html',
  styleUrls: ['./scenario-page.component.css']
})
export class ScenarioPageComponent implements OnInit {

  @Input() originalMatrix;
  @Input() availableTokens;

  scenarioId: number;
  scenarioAvatar: string;
  scenarioName: string;
  scenarioGoal: string;
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

  constructor(
    private scenarioCreator: ScenarioCreatorService,
    private campaignManager: CampaignManagerService,
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private cdr: ChangeDetectorRef,
    private modalService: NgbModal
    ) {
    this.currentMatrix = [];
    this.route.params.subscribe( p => {
      this.scenarioId = p.id;
      const scenario = this.scenarioCreator.getScenarioData(this.scenarioId);
      this.originalMatrix = scenario.matrix;
      this.availableTokens =  this.campaignManager.getPlayersTokens().concat(scenario.tokens);
      this.scenarioName = scenario.name;
      this.scenarioGoal = scenario.goal;
      this.currentMatrixFirebaseId = 'envelope_openers_' + this.scenarioId;
      this.scenarioAvatar = this.scenarioCreator.getUrlScenarioAvatar(this.scenarioId);
      this.ngOnInit();
    });
  }

  ngOnInit(): void {

    this.firebaseItemsCollection = this.afs.collection<ScenarioSnapshot>('escenarios');

    // Para hacer un Get del escenario
    const currentMatrixDoc = this.afs.doc<ScenarioSnapshot>('escenarios/' + this.currentMatrixFirebaseId);
    currentMatrixDoc.valueChanges().subscribe(
      doc => {
        if (doc) {
          this.currentMatrix = JSON.parse(doc.currentMatrix);
        } else {
          this.currentMatrix = [];
        }
        this.cdr.detectChanges();
      }
    );
  }

  registerMap() {
    this.initMap();
    this.addMap();
  }

  resetScenario() {
    this.initMap();
    this.save();
  }

  initMap() {
    this.currentMatrix = this.scenarioCreator.createFromMatrix(this.originalMatrix);
  }

  addMap() {
    const scenarioSnapshot: ScenarioSnapshot = {
      scenarioId: this.scenarioId,
      currentMatrix: JSON.stringify(this.currentMatrix)
    };

    // Para dar de alta el escenario en la base de datos
    this.firebaseItemsCollection = this.afs.collection<ScenarioSnapshot>('escenarios');
    this.firebaseItemsCollection.doc(this.currentMatrixFirebaseId).set({ id: this.currentMatrixFirebaseId, scenarioId: this.scenarioId, currentMatrix: scenarioSnapshot.currentMatrix});
  }

  dragStartFromPool(token: Token) {
    console.log('dragStartFromPool');
    this.dragType = 'fromPool';
    this.dragContent = {...token};
  }

  dragStartPlay(row: number, column: number) {
    console.log('dragStartPlay');
    this.dragType = 'fromMap';
    this.dragOrigin = {row, column};
    this.dragContent = this.currentMatrix[this.dragOrigin.row][this.dragOrigin.column].slice(-1)[0];
  }

  drop(row: number, column: number, event) {
    console.log('drop', event, row, column);
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
    console.log(this.elementSelected);
    this.modalService.open(modalContent, { centered: true, size: 'lg' });
  }

  damageButtonClick() {
    this.elementSelected.stats.h--;
  }

  healButtonClick() {
    this.elementSelected.stats.h++;
  }

  closeModal(modal) {
    this.showStats = false;
    this.save();
    modal.close();
  }

  removeToken(modal) {
    if (this.currentMatrix[this.rowSelected][this.columnSelected].length > 1) {
      this.currentMatrix[this.rowSelected][this.columnSelected].pop();
    }
    this.closeModal(modal);
  }

  save() {
    const preparedDoc = {scenarioId: this.scenarioId, currentMatrix: JSON.stringify(this.currentMatrix)};
    this.firebaseItemsCollection.doc(this.currentMatrixFirebaseId).set(preparedDoc);
  }

}
