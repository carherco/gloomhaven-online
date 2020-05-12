import { Component, OnInit, Input } from '@angular/core';
import { defaultDeck, Critic, Fail, Bless, Curse, Minus1 } from 'src/app/data/modifiers';
import { Modifier } from 'src/app/model/modifier';

@Component({
  selector: 'app-attack-modifier-deck',
  templateUrl: './attack-modifier-deck.component.html',
  styleUrls: ['./attack-modifier-deck.component.css']
})
export class AttackModifierDeckComponent implements OnInit {

  @Input() modifierDeck: Modifier[] = defaultDeck;
  initialModifierDeck: Modifier[];
  playedModifierDeck: Modifier[] = [];
  lastModifier: Modifier;
  extraBlesses = 0;
  extraCurses = 0;
  mustShuffle = false;

  private criticId = (new Critic()).id;
  private failId = (new Fail()).id;
  private blessId = (new Bless()).id;
  private curseId = (new Curse()).id;

  constructor() {}

  ngOnInit(): void {
    this.initialModifierDeck = [...this.modifierDeck];
    this.modifierDeck = this.shuffle(this.modifierDeck);
  }

  resetDeck() {
    this.modifierDeck = this.shuffle(this.initialModifierDeck);
    this.extraBlesses = 0;
    this.extraCurses = 0;
    this.mustShuffle = false;
    this.lastModifier = null;
    this.playedModifierDeck = []
  }

  drawCard() {
    if (this.modifierDeck.length > 0) {
      this.lastModifier = this.modifierDeck[0];
      this.playedModifierDeck.push(this.lastModifier);
      this.modifierDeck.splice(0, 1);

      if (this.playedModifierDeck.find(card => card.id === this.criticId || card.id === this.failId)) {
        this.mustShuffle = true;
      }

      if (this.lastModifier.id === this.curseId) {
        this.playedModifierDeck.pop();
        this.extraCurses--;
      }

      if (this.lastModifier.id === this.blessId) {
        this.playedModifierDeck.pop();
        this.extraBlesses--;
      }
    }
  }

  shuffleClick = () => {
    this.shuffleModifierDeck();
  }

  private shuffleModifierDeck() {
    this.modifierDeck = this.modifierDeck.concat(this.playedModifierDeck);
    this.playedModifierDeck = [];
    this.modifierDeck = this.shuffle(this.modifierDeck);
    this.mustShuffle = false;
  }

  private shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  addBless() {
    if (this.extraBlesses < 10) {
      this.modifierDeck.push(new Bless());
      this.extraBlesses++;
      this.shuffleModifierDeck();
    }
  }

  addCurse() {
    if (this.extraCurses < 10) {
      this.modifierDeck.push(new Curse());
      this.extraCurses++;
      this.shuffleModifierDeck();
    }
  }

  addMinus1() {
    this.modifierDeck.push(new Minus1());
  }

  reset() {
    this.resetDeck();
  }

  // attack modifiers

// let mustShuffle = document.getElementById("mustShuffle");
// let blessButton = document.getElementById('bless');
// let curseButton = document.getElementById('curse');
// let shuffleModsButton = document.getElementById('shuffleMods');
// let numOfCurses = 0;
// let numOfBlesses = 0;
// let addMinusOne = document.getElementById('add-minus-1');
// let cardsInDeckText = document.getElementById("cardsInDeck");
// let resetDeckButton = document.getElementById("reset-deck");
// let usedMods = document.getElementById("used-modifier-cards");





// function addMinus1 (){
//   this.modifierDeck.push(minus1);
//   cardsInDeckText.innerHTML = "Cards in Deck: "+ this.modifierDeck.length;
// }

// addMinusOne.onclick = () => {
//   addMinus1();
// }

// function resetDeck () {
//   shuffleModifierDeck();
//   this.modifierDeck = defaultDeckArray.slice();
//   numOfCurses = 0;
//   numOfBlesses = 0;
//   cardsInDeckText.innerHTML = "Cards in Deck: "+ this.modifierDeck.length;
//   blessesInDeck.innerHTML = "Extra Blesses in Deck: "+numOfBlesses;
//   cursesInDeck.innerHTML = "Extra Curses in Deck: "+numOfCurses;
//   shuffleDeck();
// }

// resetDeckButton.onclick = () => {
//   resetDeck();
// }


// Modal for showing what is in the played modifier deck

// var zoomModal = document.getElementById("zoomModal");
// var close = document.getElementsByClassName("close")[0];
// playedModifiers.onclick = function() {
//   zoomModal.style.display = "block";
//     }

// close.onclick = function() {
//     zoomModal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == zoomModal) {
//         zoomModal.style.display = "none";
//     }
// }

}
