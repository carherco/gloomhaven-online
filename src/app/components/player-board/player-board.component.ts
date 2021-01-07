import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameManagerService } from 'src/app/services/game-manager.service';
import { CharacterClass } from 'src/app/model/character-class';
import { Characters } from 'src/app/data/characters';
import { Character } from 'src/app/model/character';
import { Modifier } from 'src/app/model/modifier';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.css']
})
export class PlayerBoardComponent implements OnInit {

  character: Character;
  attackModifierDeck: Modifier[];

  handCards = [];
  handCardsSelectedCount = 0;
  handCardsSelectedMax = 2;

  playedCards = [];
  playedCardsSelectedCount = 0;
  playedCardsSelectedMax = 1;

  activeCards = [];
  activeCardsSelectedCount = 0;
  activeCardsSelectedMax = 1;

  discardedCards = [];
  discardedCardsSelectedCount = 0;
  discardedCardsSelectedMax = 2;

  lostCards = [];
  lostCardsSelectedCount = 0;
  lostCardsSelectedMax = 1;

  shortResting = false;
  longResting = false;
  shortRestRerolls = 0;

  srcImageBackCard: string;

  maxHealth = 0;
  health = 0;
  experience = 0;
  loot = 0;

  status = {
    poisoned: false,
    wounded: false,
    immobilized: false,
    disarmed: false,
    stunned: false,
    invisible: false,
    muddled: false,
    strengthened: false
  };

  constructor(private router: Router, private game: GameManagerService) {
    this.character = this.game.getCharacter();
    this.handCards = this.game.getHand();
    console.log(this.character);
    const characterClass = this.character.characterClass;
    this.maxHealth = characterClass.hitPoints[this.character.level - 1];
    this.health = this.maxHealth;
    this.attackModifierDeck = this.game.getAttackModifierDeck();
    this.srcImageBackCard = 'assets/images/character-ability-cards/' + characterClass.key + '/' + characterClass.key.toLowerCase() + '-back.png';
  }

  ngOnInit(): void {
  }

  onHandCardClick(card) {
    if (card.selected) {
      this.handCardsSelectedCount--;
      card.selected = false;
    } else if (this.handCardsSelectedCount < this.handCardsSelectedMax) {
      this.handCardsSelectedCount++;
      card.selected = true;
    }
  }

  onPlayCardsButton() {
    this.playedCards = this.handCards.filter(c => c.selected);
    this.handCards = [...this.handCards.filter(c => !c.selected)];
    this.playedCards[0].selected = false;
    this.playedCards[1].selected = false;
    this.handCardsSelectedCount = 0;
  }

  onLoseHandCardButton() {
    const selectedCard = this.handCards.find(c => c.selected);
    this.handCards = [...this.handCards.filter(c => !c.selected)];
    selectedCard.selected = false;
    this.lostCards.push(selectedCard);
    this.handCardsSelectedCount = 0;
  }

  onPlayedCardClick(card) {
    if (card.selected) {
      this.playedCardsSelectedCount--;
      card.selected = false;
    } else if (this.playedCardsSelectedCount < this.playedCardsSelectedMax) {
      this.playedCardsSelectedCount++;
      card.selected = true;
    }
  }

  onDiscardPlayedCardClick() {
    if (this.playedCards[0].selected) {
      this.playedCards[0].selected = false;
      this.discardedCards.push(this.playedCards[0]);
      this.playedCards.splice(0, 1);
      this.playedCardsSelectedCount--;
      console.log(this.playedCards);
    } else if (this.playedCards[1].selected) {
      this.playedCards[1].selected = false;
      this.discardedCards.push(this.playedCards[1]);
      this.playedCards.splice(1, 1);
      this.playedCardsSelectedCount--;
    }
  }

  onLosePlayedCardClick() {
    if (this.playedCards[0].selected) {
      this.playedCards[0].selected = false;
      this.lostCards.push(this.playedCards[0]);
      this.playedCards.splice(0, 1);
      this.playedCardsSelectedCount--;
      console.log(this.playedCards);
    } else if (this.playedCards[1].selected) {
      this.playedCards[1].selected = false;
      this.lostCards.push(this.playedCards[1]);
      this.playedCards.splice(1, 1);
      this.playedCardsSelectedCount--;
    }
  }

  onActivatePlayedCardClick() {
    if (this.playedCards[0].selected) {
      this.playedCards[0].selected = false;
      this.activeCards.push(this.playedCards[0]);
      this.playedCards.splice(0, 1);
      this.playedCardsSelectedCount--;
      console.log(this.playedCards);
    } else if (this.playedCards[1].selected) {
      this.playedCards[1].selected = false;
      this.activeCards.push(this.playedCards[1]);
      this.playedCards.splice(1, 1);
      this.playedCardsSelectedCount--;
    }
  }

  onActiveCardClick(card) {
    if (card.selected) {
      this.activeCardsSelectedCount--;
      card.selected = false;
    } else if (this.activeCardsSelectedCount < this.activeCardsSelectedMax) {
      this.activeCardsSelectedCount++;
      card.selected = true;
    }
  }

  onDiscardActiveCardClick() {
    const selectedCard = this.activeCards.find(c => c.selected);
    this.activeCards = this.activeCards.filter(c => !c.selected);
    selectedCard.selected = false;
    this.discardedCards.push(selectedCard);
    this.activeCardsSelectedCount = 0;
  }

  onLoseActiveCardClick() {
    const selectedCard = this.activeCards.find(c => c.selected);
    this.activeCards = this.activeCards.filter(c => !c.selected);
    selectedCard.selected = false;
    this.lostCards.push(selectedCard);
    this.activeCardsSelectedCount = 0;
  }

  onDiscardedCardClick(card) {
    if (this.shortResting) {
      return;
    }

    if (card.selected) {
      this.discardedCardsSelectedCount--;
      card.selected = false;
    } else if (this.discardedCardsSelectedCount < this.discardedCardsSelectedMax) {
      this.discardedCardsSelectedCount++;
      card.selected = true;
    }
  }

  onShortRestButton() {
    this.shortResting = true;
    const selectedCard = this.discardedCards[Math.floor(Math.random() * this.discardedCards.length)];
    selectedCard.selected = true;
  }

  onLongRestButton() {
    this.longResting = true;
  }

  onRecoverDiscardedCardButton() {
    const selectedCard = this.discardedCards.find(c => c.selected);
    this.discardedCards = this.discardedCards.filter(c => !c.selected);
    selectedCard.selected = false;
    this.handCards.push(selectedCard);
    this.discardedCardsSelectedCount = 0;
  }

  onLoseDiscardedCardFromRestButton() {
    const selectedCard = this.discardedCards.find(c => c.selected);
    const recoveredCards = [...this.discardedCards.filter(c => !c.selected)];
    selectedCard.selected = false;
    this.lostCards.push(selectedCard);
    this.handCards = this.handCards.concat(recoveredCards);
    this.discardedCards = [];
    this.discardedCardsSelectedCount = 0;
    this.longResting = false;
    this.shortResting = false;
    this.shortRestRerolls = 0;
  }

  onRerollRandomCardButton() {
    const previousSelectedCard = this.discardedCards.find(c => c.selected);
    const otherCards = this.discardedCards.filter(c => !c.selected);
    const selectedCard = otherCards[Math.floor(Math.random() * otherCards.length)];
    previousSelectedCard.selected = false;
    selectedCard.selected = true;
    this.health--;
    this.shortRestRerolls = 1;
  }

  onLoseDiscardedCardButton() {
    const selectedCards = this.discardedCards.filter(c => c.selected);
    this.discardedCards = [...this.discardedCards.filter(c => !c.selected)];
    selectedCards[0].selected = false;
    selectedCards[1].selected = false;
    this.lostCards.push(selectedCards[0]);
    this.lostCards.push(selectedCards[1]);
    this.discardedCardsSelectedCount = 0;
  }

  onLostCardClick(card) {
    if (card.selected) {
      this.lostCardsSelectedCount--;
      card.selected = false;
    } else if (this.lostCardsSelectedCount < this.lostCardsSelectedMax) {
      this.lostCardsSelectedCount++;
      card.selected = true;
    }
  }

  onRecoverLostCardButton() {
    const selectedCard = this.lostCards.find(c => c.selected);
    this.lostCards = [...this.lostCards.filter(c => !c.selected)];
    selectedCard.selected = false;
    this.handCards.push(selectedCard);
    this.lostCardsSelectedCount = 0;
  }

  onExitButtonClick() {
    const respuesta = window.confirm('¿Quieres salir de esta pantalla para elegir otro jugador / perks / cartas?');
    if (respuesta) {
      this.router.navigate(['/select-player']);
    }
  }

}
