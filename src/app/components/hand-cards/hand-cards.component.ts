import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hand-cards',
  templateUrl: './hand-cards.component.html',
  styleUrls: ['./hand-cards.component.css']
})
export class HandCardsComponent implements OnInit {

  @Input() cards!: any[];
  handSize = 0;
  @ViewChild('card1') cardHand1!: ElementRef;
  @ViewChild('card2') cardHand2!: ElementRef;
  @ViewChild('card3') cardHand3!: ElementRef;
  @ViewChild('card4') cardHand4!: ElementRef;
  @ViewChild('card5') cardHand5!: ElementRef;
  @ViewChild('card6') cardHand6!: ElementRef;
  @ViewChild('card7') cardHand7!: ElementRef;
  @ViewChild('card8') cardHand8!: ElementRef;
  @ViewChild('card9') cardHand9!: ElementRef;
  @ViewChild('card10') cardHand10!: ElementRef;
  @ViewChild('card11') cardHand11!: ElementRef;
  @ViewChild('card12') cardHand12!: ElementRef;

  @Input() selectedCount = 0;
  selectedMax = 2;

  constructor() { }

  ngOnInit(): void {
    this.handSize = this.cards.length;
  }

  onCardClick(card: any) {
    if (card.selected) {
      this.selectedCount--;
      card.selected = false;
    } else if (this.selectedCount < this.selectedMax) {
      this.selectedCount++;
      card.selected = true;
    }
  }

}
