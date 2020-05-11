import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameManagerService } from 'src/app/services/game-manager.service';
import { Character } from 'src/app/model/character';
import { Players } from 'src/app/data/players';
import { Player } from 'src/app/model/player';
import { Modifier } from 'src/app/model/modifier';

@Component({
  selector: 'app-player-board',
  templateUrl: './player-board.component.html',
  styleUrls: ['./player-board.component.css']
})
export class PlayerBoardComponent implements OnInit {

  player: Player = Players[3];
  character: Character = this.player.character;
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
  cardTrackerSize = 1;

  discardedCards = [];
  discardedCardsSelectedCount = 0;
  discardedCardsSelectedMax = 2;

  lostCards = [];
  lostCardsSelectedCount = 0;
  lostCardsSelectedMax = 1;

  shortResting = false;
  longResting = false;
  shortRestRerolls = 0;

  srcImageBackCard = 'assets/images/character-ability-cards/' + this.character.key + '/' + this.character.key.toLowerCase() + '-back.png';

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
    this.handCards = this.game.getHand();
    //this.player = this.game.player;
    this.maxHealth = this.character.hitPoints[this.player.level - 1];
    this.health = this.maxHealth;
    this.attackModifierDeck = this.game.getAttackModifierDeck();
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

  // function for clicking Hand
// var hand = document.querySelectorAll(".hand");
// for (var i = 0; i < hand.length; i++) {
//   (function () {
//   var handCard = hand[i];
//     handCard.onclick = (function () {
//       if (isFlipped(chosenCard1) && isFlipped(chosenCard2) && mustLoseCount<1){
//       if(!isSelected(handCard) && handChosen === true && cardCount<2 && !isFlipped(handCard)){
//         handCard.classList.add("add-border");
//         cardCount++;
//         if(cardCount === 2){
//           playCardsButton.classList.remove("not-without-more-cards");
//           loseHandCard.classList.add("not-without-more-selected");
//         } else if(cardCount === 1){
//           loseHandCard.classList.remove("not-without-more-selected");
//         }
//       } else if (isSelected(handCard)){
//         handCard.classList.remove("add-border");
//         cardCount--;
//         playCardsButton.classList.add("not-without-more-cards");
//         if (cardCount === 1){
//           loseHandCard.classList.remove("not-without-more-selected");
//         } else if(cardCount === 0){
//           loseHandCard.classList.add("not-without-more-selected");
//         }
//       }
//     } else {
//       if(!isSelected(handCard) && handChosen === true && cardCount<1 && !isFlipped(handCard)){
//         handCard.classList.add("add-border");
//         cardCount++;
//         loseHandCard.classList.remove("not-without-more-selected");
//       } else if(!isSelected(handCard) && handChosen === true && cardCount === 1){
//         for (var j = 0; j<hand.length; j++){
//           if (hand[j].classList.contains("add-border")){
//             hand[j].classList.remove("add-border");
//             j = hand.length;
//           }
//         } handCard.classList.add("add-border");
//       }else if (isSelected(handCard)){
//         handCard.classList.remove("add-border");
//         cardCount--;
//         loseHandCard.classList.add("not-without-more-selected");
//       }
//     }
//     });
//   }).call(this, i);
// };

// playCardsButton.onclick = () => {
//   //document.getElementById("hand-cards").style.backgroundColor = "red";
//   if(cardCount === 2 && mustLoseCount<1 && !(shortResting) && !(longResting)){
//     if(cardHand1.classList.contains("add-border")){
//       getCard1(cardHand1);
//     }else if(cardHand2.classList.contains("add-border")){
//       getCard1(cardHand2);
//     }else if(cardHand3.classList.contains("add-border")){
//       getCard1(cardHand3);
//     }else if(cardHand4.classList.contains("add-border")){
//       getCard1(cardHand4);
//     }else if(cardHand5.classList.contains("add-border")){
//       getCard1(cardHand5);
//     }else if(cardHand6.classList.contains("add-border")){
//       getCard1(cardHand6);
//     }else if(cardHand7.classList.contains("add-border")){
//       getCard1(cardHand7);
//     }else if(cardHand8.classList.contains("add-border")){
//       getCard1(cardHand8);
//     }else if(cardHand9.classList.contains("add-border")){
//       getCard1(cardHand9);
//     }else if(cardHand10.classList.contains("add-border")){
//       getCard1(cardHand10);
//     }else if(cardHand11.classList.contains("add-border")){
//       getCard1(cardHand11);
//     }
//     if(cardHand2.classList.contains("add-border")){
//       getCard2(cardHand2);
//     }else if(cardHand3.classList.contains("add-border")){
//       getCard2(cardHand3);
//     }else if(cardHand4.classList.contains("add-border")){
//       getCard2(cardHand4);
//     }else if(cardHand5.classList.contains("add-border")){
//       getCard2(cardHand5);
//     }else if(cardHand6.classList.contains("add-border")){
//       getCard2(cardHand6);
//     }else if(cardHand7.classList.contains("add-border")){
//       getCard2(cardHand7);
//     }else if(cardHand8.classList.contains("add-border")){
//       getCard2(cardHand8);
//     }else if(cardHand9.classList.contains("add-border")){
//       getCard2(cardHand9);
//     }else if(cardHand10.classList.contains("add-border")){
//       getCard2(cardHand10);
//     }else if(cardHand11.classList.contains("add-border")){
//       getCard2(cardHand11);
//     }else if(cardHand12.classList.contains("add-border")){
//       getCard2(cardHand12);
//     }
//     cardCount = 0;
//     chosenCard1.src = playCard1;
//     chosenCard1.classList.remove("flipped");
//     chosenCard2.src = playCard2;
//     chosenCard2.classList.remove("flipped");
//     cardsInPlayCounter = 2;
//     shortRestButton.classList.add("not-while-in-play");
//     longRestButton.classList.add("not-while-in-play");
//     loseCardFromRestButton.classList.add("not-while-in-play");
//     rerollShortRestButton.classList.add("not-while-in-play");
//     playCardsButton.classList.add("not-without-more-cards");
//   }
// };

// let chosenCard1 = document.getElementById('chosen-card-1');
// let chosenCard2 = document.getElementById('chosen-card-2');
// let chosenCounter = 0;
// chosenCard1.onclick = () => {
//   if(chosenCounter < 1 && !isSelected(chosenCard1) && !isFlipped(chosenCard1) && mustLoseCount<1){
//     chosenCard1.classList.add("add-border");
//     chosenCounter++;
//     discardButton.classList.remove("not-without-more-selected");
//     loseButton.classList.remove("not-without-more-selected");
//     activateButton.classList.remove("not-without-more-selected");
//   } else if (chosenCounter === 1 && isSelected(chosenCard1)){
//     chosenCard1.classList.remove("add-border");
//     chosenCounter--;
//     discardButton.classList.add("not-without-more-selected");
//     loseButton.classList.add("not-without-more-selected");
//     activateButton.classList.add("not-without-more-selected");
//   } else if (chosenCounter == 1 && !isSelected(chosenCard1) && !isFlipped(chosenCard1)){
//     chosenCard2.classList.remove("add-border");
//     chosenCard1.classList.add("add-border");
//   }
// };

// chosenCard2.onclick = () => {
//   if(chosenCounter < 1 && !isSelected(chosenCard2) && !isFlipped(chosenCard2) && mustLoseCount<1){
//     chosenCard2.classList.add("add-border");
//     chosenCounter++;
//     discardButton.classList.remove("not-without-more-selected");
//     loseButton.classList.remove("not-without-more-selected");
//     activateButton.classList.remove("not-without-more-selected");
//   } else if (chosenCounter == 1 && isSelected(chosenCard2)){
//     chosenCard2.classList.remove("add-border");
//     chosenCounter--;
//     discardButton.classList.add("not-without-more-selected");
//     loseButton.classList.add("not-without-more-selected");
//     activateButton.classList.add("not-without-more-selected");
//   } else if (chosenCounter == 1 && !isSelected(chosenCard2) && !isFlipped(chosenCard2)){
//     chosenCard1.classList.remove("add-border");
//     chosenCard2.classList.add("add-border");
//   }
// };

// discardButton.onclick = () => {
//   if(chosenCard1.classList.contains("add-border") && mustLoseCount<1){
//     if(discard1.classList.contains("flipped")){
//       discard1.src = chosenCard1.src;
//       discard1.classList.remove("hiding");
//       discard1.classList.remove("flipped")
//     } else if(discard2.classList.contains("flipped")){
//       discard2.src = chosenCard1.src;
//       discard2.classList.remove("hiding");
//       discard2.classList.remove("flipped")
//     } else if(discard3.classList.contains("flipped")){
//       discard3.src = chosenCard1.src;
//       discard3.classList.remove("hiding");
//       discard3.classList.remove("flipped")
//     } else if(discard4.classList.contains("flipped")){
//       discard4.src = chosenCard1.src;
//       discard4.classList.remove("hiding");
//       discard4.classList.remove("flipped")
//     } else if(discard5.classList.contains("flipped")){
//       discard5.src = chosenCard1.src;
//       discard5.classList.remove("hiding");
//       discard5.classList.remove("flipped")
//     } else if(discard6.classList.contains("flipped")){
//       discard6.src = chosenCard1.src;
//       discard6.classList.remove("hiding");
//       discard6.classList.remove("flipped")
//     } else if(discard7.classList.contains("flipped")){
//       discard7.src = chosenCard1.src;
//       discard7.classList.remove("hiding");
//       discard7.classList.remove("flipped")
//     } else if(discard8.classList.contains("flipped")){
//       discard8.src = chosenCard1.src;
//       discard8.classList.remove("hiding");
//       discard8.classList.remove("flipped")
//     } else if(discard9.classList.contains("flipped")){
//       discard9.src = chosenCard1.src;
//       discard9.classList.remove("hiding");
//       discard9.classList.remove("flipped")
//     } else if(discard10.classList.contains("flipped")){
//       discard10.src = chosenCard1.src;
//       discard10.classList.remove("hiding");
//       discard10.classList.remove("flipped")
//     } else if(discard11.classList.contains("flipped")){
//       discard11.src = chosenCard1.src;
//       discard11.classList.remove("hiding");
//       discard11.classList.remove("flipped")
//     } else if(discard12.classList.contains("flipped")){
//       discard12.src = chosenCard1.src;
//       discard12.classList.remove("hiding");
//       discard12.classList.remove("flipped")
//     }
//     flipChosenCard(chosenCard1);
//     chosenCounter--;
//     discardCount++;
//     cardsInPlayCounter--;
//     if(cardsInPlayCounter === 0){
//       shortRestButton.classList.remove("not-while-in-play");
//       longRestButton.classList.remove("not-while-in-play");
//       loseCardFromRestButton.classList.remove("not-while-in-play");
//       rerollShortRestButton.classList.remove("not-while-in-play");
//       discardButton.classList.add("not-without-more-selected");
//       loseButton.classList.add("not-without-more-selected");
//       activateButton.classList.add("not-without-more-selected");
//     }
//     if(discardCount>1){
//       shortRestButton.classList.remove("not-without-more-cards");
//       longRestButton.classList.remove("not-without-more-cards");
//     }
//     discardButton.classList.add("not-without-more-selected");
//     loseButton.classList.add("not-without-more-selected");
//     activateButton.classList.add("not-without-more-selected");
//   }
//   if(chosenCard2.classList.contains("add-border") && mustLoseCount<1){
//     if(discard1.classList.contains("flipped")){
//       discard1.src = chosenCard2.src;
//       discard1.classList.remove("hiding");
//       discard1.classList.remove("flipped")
//     } else if(discard2.classList.contains("flipped")){
//       discard2.src = chosenCard2.src;
//       discard2.classList.remove("hiding");
//       discard2.classList.remove("flipped")
//     } else if(discard3.classList.contains("flipped")){
//       discard3.src = chosenCard2.src;
//       discard3.classList.remove("hiding");
//       discard3.classList.remove("flipped")
//     } else if(discard4.classList.contains("flipped")){
//       discard4.src = chosenCard2.src;
//       discard4.classList.remove("hiding");
//       discard4.classList.remove("flipped")
//     } else if(discard5.classList.contains("flipped")){
//       discard5.src = chosenCard2.src;
//       discard5.classList.remove("hiding");
//       discard5.classList.remove("flipped")
//     } else if(discard6.classList.contains("flipped")){
//       discard6.src = chosenCard2.src;
//       discard6.classList.remove("hiding");
//       discard6.classList.remove("flipped")
//     } else if(discard7.classList.contains("flipped")){
//       discard7.src = chosenCard2.src;
//       discard7.classList.remove("hiding");
//       discard7.classList.remove("flipped")
//     } else if(discard8.classList.contains("flipped")){
//       discard8.src = chosenCard2.src;
//       discard8.classList.remove("hiding");
//       discard8.classList.remove("flipped")
//     } else if(discard9.classList.contains("flipped")){
//       discard9.src = chosenCard2.src;
//       discard9.classList.remove("hiding");
//       discard9.classList.remove("flipped")
//     } else if(discard10.classList.contains("flipped")){
//       discard10.src = chosenCard2.src;
//       discard10.classList.remove("hiding");
//       discard10.classList.remove("flipped")
//     }
//     else if(discard11.classList.contains("flipped")){
//       discard11.src = chosenCard2.src;
//       discard11.classList.remove("hiding");
//       discard11.classList.remove("flipped")
//     } else if(discard12.classList.contains("flipped")){
//       discard12.src = chosenCard2.src;
//       discard12.classList.remove("hiding");
//       discard12.classList.remove("flipped")
//     }
//     flipChosenCard(chosenCard2);
//     chosenCounter--;
//     discardCount++
//     cardsInPlayCounter--;
//     if(cardsInPlayCounter === 0){
//       shortRestButton.classList.remove("not-while-in-play");
//       longRestButton.classList.remove("not-while-in-play");
//       loseCardFromRestButton.classList.remove("not-while-in-play");
//       rerollShortRestButton.classList.remove("not-while-in-play");

//     }
//     if(discardCount>1){
//       shortRestButton.classList.remove("not-without-more-cards");
//       longRestButton.classList.remove("not-without-more-cards");
//     }
//     discardButton.classList.add("not-without-more-selected");
//     loseButton.classList.add("not-without-more-selected");
//     activateButton.classList.add("not-without-more-selected");
//       }
//     };

// loseButton.onclick = () => {
//   if(chosenCard1.classList.contains("add-border") && mustLoseCount<1){
//     if(lost1.classList.contains("flipped")){
//       lost1.src = chosenCard1.src;
//       lost1.classList.remove("hiding");
//     lost1.classList.remove("flipped")
//     } else if(lost2.classList.contains("flipped")){
//       lost2.src = chosenCard1.src;
//       lost2.classList.remove("hiding");
//       lost2.classList.remove("flipped")
//     } else if(lost3.classList.contains("flipped")){
//       lost3.src = chosenCard1.src;
//       lost3.classList.remove("hiding");
//       lost3.classList.remove("flipped")
//     } else if(lost4.classList.contains("flipped")){
//       lost4.src = chosenCard1.src;
//       lost4.classList.remove("hiding");
//       lost4.classList.remove("flipped")
//     } else if(lost5.classList.contains("flipped")){
//       lost5.src = chosenCard1.src;
//       lost5.classList.remove("hiding");
//       lost5.classList.remove("flipped")
//     } else if(lost6.classList.contains("flipped")){
//       lost6.src = chosenCard1.src;
//       lost6.classList.remove("hiding");
//       lost6.classList.remove("flipped")
//     } else if(lost7.classList.contains("flipped")){
//       lost7.src = chosenCard1.src;
//       lost7.classList.remove("hiding");
//       lost7.classList.remove("flipped")
//     } else if(lost8.classList.contains("flipped")){
//       lost8.src = chosenCard1.src;
//       lost8.classList.remove("hiding");
//       lost8.classList.remove("flipped")
//     } else if(lost9.classList.contains("flipped")){
//       lost9.src = chosenCard1.src;
//       lost9.classList.remove("hiding");
//       lost9.classList.remove("flipped")
//     } else if(lost10.classList.contains("flipped")){
//       lost10.src = chosenCard1.src;
//       lost10.classList.remove("hiding");
//       lost10.classList.remove("flipped")
//     } else if(lost11.classList.contains("flipped")){
//       lost11.src = chosenCard1.src;
//       lost11.classList.remove("hiding");
//       lost11.classList.remove("flipped")
//     } else if(lost12.classList.contains("flipped")){
//       lost12.src = chosenCard1.src;
//       lost12.classList.remove("hiding");
//       lost12.classList.remove("flipped")
//     }
//     flipChosenCard(chosenCard1);
//     chosenCounter--;
//     cardsInPlayCounter--;
//     if(cardsInPlayCounter === 0){
//       shortRestButton.classList.remove("not-while-in-play");
//       longRestButton.classList.remove("not-while-in-play");
//       loseCardFromRestButton.classList.remove("not-while-in-play");
//       rerollShortRestButton.classList.remove("not-while-in-play");
//       discardButton.classList.add("not-without-more-selected");
//       loseButton.classList.add("not-without-more-selected");
//       activateButton.classList.add("not-without-more-selected");
//     }
//   }
//   if(chosenCard2.classList.contains("add-border") && mustLoseCount<1){
//     if(lost1.classList.contains("flipped")){
//       lost1.src = chosenCard2.src;
//       lost1.classList.remove("hiding");
//       lost1.classList.remove("flipped")
//     } else if(lost2.classList.contains("flipped")){
//       lost2.src = chosenCard2.src;
//       lost2.classList.remove("hiding");
//       lost2.classList.remove("flipped")
//     } else if(lost3.classList.contains("flipped")){
//       lost3.src = chosenCard2.src;
//       lost3.classList.remove("hiding");
//       lost3.classList.remove("flipped")
//     } else if(lost4.classList.contains("flipped")){
//       lost4.src = chosenCard2.src;
//       lost4.classList.remove("hiding");
//       lost4.classList.remove("flipped")
//     } else if(lost5.classList.contains("flipped")){
//       lost5.src = chosenCard2.src;
//       lost5.classList.remove("hiding");
//       lost5.classList.remove("flipped")
//     } else if(lost6.classList.contains("flipped")){
//       lost6.src = chosenCard2.src;
//       lost6.classList.remove("hiding");
//       lost6.classList.remove("flipped")
//     } else if(lost7.classList.contains("flipped")){
//       lost7.src = chosenCard2.src;
//       lost7.classList.remove("hiding");
//       lost7.classList.remove("flipped")
//     } else if(lost8.classList.contains("flipped")){
//       lost8.src = chosenCard2.src;
//       lost8.classList.remove("hiding");
//       lost8.classList.remove("flipped")
//     } else if(lost9.classList.contains("flipped")){
//       lost9.src = chosenCard2.src;
//       lost9.classList.remove("hiding");
//       lost9.classList.remove("flipped")
//     } else if(lost10.classList.contains("flipped")){
//       lost10.src = chosenCard2.src;
//       lost10.classList.remove("hiding");
//       lost10.classList.remove("flipped")
//     } else if(lost11.classList.contains("flipped")){
//       lost11.src = chosenCard2.src;
//       lost11.classList.remove("hiding");
//       lost11.classList.remove("flipped")
//     } else if(lost12.classList.contains("flipped")){
//       lost12.src = chosenCard2.src;
//       lost12.classList.remove("hiding");
//       lost12.classList.remove("flipped")
//     }
//     flipChosenCard(chosenCard2);
//     chosenCounter--;
//     cardsInPlayCounter--;
//     if(cardsInPlayCounter === 0){
//       shortRestButton.classList.remove("not-while-in-play");
//       longRestButton.classList.remove("not-while-in-play");
//       loseCardFromRestButton.classList.remove("not-while-in-play");
//       rerollShortRestButton.classList.remove("not-while-in-play");
//       discardButton.classList.add("not-without-more-selected");
//       loseButton.classList.add("not-without-more-selected");
//       activateButton.classList.add("not-without-more-selected");
//     }
//   }
// };

// activateButton.onclick = () => {
//   if(chosenCard1.classList.contains("add-border") && mustLoseCount<1 && numberOfActiveCards<6){
//     if(active1.classList.contains("flipped")){
//       active1.src = chosenCard1.src;
//       active1.classList.remove("hiding");
//       active1.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active2.classList.contains("flipped")){
//       active2.src = chosenCard1.src;
//       active2.classList.remove("hiding");
//       active2.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active3.classList.contains("flipped")){
//       active3.src = chosenCard1.src;
//       active3.classList.remove("hiding");
//       active3.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active4.classList.contains("flipped")){
//       active4.src = chosenCard1.src;
//       active4.classList.remove("hiding");
//       active4.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active5.classList.contains("flipped")){
//       active5.src = chosenCard1.src;
//       active5.classList.remove("hiding");
//       active5.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active6.classList.contains("flipped")){
//       active6.src = chosenCard1.src;
//       active6.classList.remove("hiding");
//       active6.classList.remove("flipped");
//       numberOfActiveCards++;
//     }
//     flipChosenCard(chosenCard1);
//     chosenCounter--;
//     cardsInPlayCounter--;
//     if(cardsInPlayCounter === 0){
//       shortRestButton.classList.remove("not-while-in-play");
//       longRestButton.classList.remove("not-while-in-play");
//       loseCardFromRestButton.classList.remove("not-while-in-play");
//       rerollShortRestButton.classList.remove("not-while-in-play");
//       discardButton.classList.add("not-without-more-selected");
//       loseButton.classList.add("not-without-more-selected");
//       activateButton.classList.add("not-without-more-selected");
//     }
//   }
//   if(chosenCard2.classList.contains("add-border") && mustLoseCount<1 && numberOfActiveCards<6){
//     if(active1.classList.contains("flipped")){
//       active1.src = chosenCard2.src;
//       active1.classList.remove("hiding");
//       active1.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active2.classList.contains("flipped")){
//       active2.src = chosenCard2.src;
//       active2.classList.remove("hiding");
//       active2.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active3.classList.contains("flipped")){
//       active3.src = chosenCard2.src;
//       active3.classList.remove("hiding");
//       active3.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active4.classList.contains("flipped")){
//       active4.src = chosenCard2.src;
//       active4.classList.remove("hiding");
//       active4.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active5.classList.contains("flipped")){
//       active5.src = chosenCard2.src;
//       active5.classList.remove("hiding");
//       active5.classList.remove("flipped");
//       numberOfActiveCards++;
//     } else if(active6.classList.contains("flipped")){
//       active6.src = chosenCard2.src;
//       active6.classList.remove("hiding");
//       active6.classList.remove("flipped");
//       numberOfActiveCards++;
//     }
//     flipChosenCard(chosenCard2);
//     chosenCounter--;
//     cardsInPlayCounter--;
//     if(cardsInPlayCounter === 0){
//       shortRestButton.classList.remove("not-while-in-play");
//       longRestButton.classList.remove("not-while-in-play");
//       loseCardFromRestButton.classList.remove("not-while-in-play");
//       rerollShortRestButton.classList.remove("not-while-in-play");
//       discardButton.classList.add("not-without-more-selected");
//       loseButton.classList.add("not-without-more-selected");
//       activateButton.classList.add("not-without-more-selected");
//     }
//   }
// };

// let discardsSelected = 0;
// var discards = document.querySelectorAll(".discarded");
// for (var i = 0; i < discards.length; i++) {
//   (function () {
//   var discardedCard = discards[i];
//     discardedCard.onclick = (function () {
//       if(!isSelected(discardedCard) && mustLoseCount<1 && discardsSelected === 0){
//         discardedCard.classList.add("discard-selected");
//         discardsSelected++;
//         loseDiscardButton.classList.remove("not-without-more-selected");
//         if(longResting){
//           loseCardFromRestButton.classList.remove("not-unless-resting");
//         } else {
//           recoverDiscardButton.classList.remove("not-without-more-selected");
//         }
//       } else if (!isSelected(discardedCard) && discardsSelected === 1){
//         var selectedDiscardedCards = document.querySelectorAll(".discard-selected");
//         var selectedDiscardedCard = selectedDiscardedCards[0];
//         selectedDiscardedCard.classList.remove("discard-selected");
//         discardedCard.classList.add("discard-selected");
//       } else if (isSelected(discardedCard) && discardsSelected === 1){
//         discardedCard.classList.remove("discard-selected");
//         discardsSelected--;
//         loseDiscardButton.classList.add("not-without-more-selected");
//         if(longResting){
//           loseCardFromRestButton.classList.add("not-unless-resting");
//         } else {
//           recoverDiscardButton.classList.add("not-without-more-selected");
//         }
//       }
//     });
//   }).call(this, i);
// };

// let lostSelectedCounter = 0;
// var lostCards = document.querySelectorAll(".lost");
// for (var i = 0; i < lostCards.length; i++) {
//   (function () {
//   var lostCard = lostCards[i];
//     lostCard.onclick = (function () {
//       if(!isSelected(lostCard) && lostSelectedCounter === 0){
//         lostCard.classList.add("lost-selected");
//         lostSelectedCounter++
//         recoverLostCardButton.classList.remove("not-without-more-selected");
//       } else if(!isSelected(lostCard) && lostSelectedCounter === 1){
//         var selectedLostCards = document.querySelectorAll(".lost-selected");
//         var selectedLostCard = selectedLostCards[0];
//         selectedLostCard.classList.remove("lost-selected");
//         lostCard.classList.add("lost-selected");
//       } else {
//         lostCard.classList.remove("lost-selected");
//         lostSelectedCounter--;
//         recoverLostCardButton.classList.add("not-without-more-selected");
//       }
//     });
//   }).call(this, i);
// };


// let activesSelected = 0;
// var actives = document.querySelectorAll(".active-card");
// for (var i = 0; i < actives.length; i++) {
//   (function () {
//   var activeCard = actives[i];
//     activeCard.onclick = (function () {
//       if(!isSelected(activeCard) && activesSelected === 0){
//         activeCard.classList.add("active-selected");
//         activesSelected++;
//         discardActiveCardButton.className = "button";
//         loseActiveCardButton.className = "button";
//         createActiveTracker.className = "button";
//         if(activeCard.classList.contains("has-tracker")){
//           createActiveTracker.classList.add("not-without-more-selected");
//         }
//       } else if(!isSelected(activeCard) && activesSelected ===1){
//         var activeCardsSelected = document.querySelectorAll(".active-selected");
//         var activeCardSelected = activeCardsSelected[0];
//         activeCard.classList.add("active-selected");
//         activeCardSelected.classList.remove("active-selected");
//         discardActiveCardButton.classList.remove("not-without-more-selected");
//         loseActiveCardButton.classList.remove("not-without-more-selected");
//         createActiveTracker.classList.remove("not-without-more-selected");
//         if(activeCard.classList.contains("has-tracker")){
//           createActiveTracker.classList.add("not-without-more-selected");
//         }
//       } else {
//         activeCard.classList.remove("active-selected");
//         activesSelected--;
//         discardActiveCardButton.classList.add("not-without-more-selected");
//         loseActiveCardButton.classList.add("not-without-more-selected");
//         createActiveTracker.classList.add("not-without-more-selected");
//       }
//     });
//   }).call(this, i);
// };


// const shortRestLoop = card => {
//     if(!(card.classList.contains("flipped"))){
//       card.classList.add("must-lose");
//       card.insertAdjacentHTML("afterend", "<br/><p class = 'must-lose'>Must Lose</p>");
//       mustLoseCount++
//     }
//   }

// let mustLose = false;
// let shortResting = false;
// let mustLoseCount = 0;
// shortRestButton.onclick = () => {
//   if(mustLoseCount === 0 && discardCount>1 && cardsInPlayCounter === 0 && !(longResting) && !(shortResting)){
//   playCardsButton.classList.add("not-while-resting");
//   shortRestButton.classList.add("not-while-resting");
//   longRestButton.classList.add("not-while-resting");
//   loseCardFromRestButton.classList.remove("not-unless-resting");
//   rerollShortRestButton.classList.remove("not-unless-resting");
//   recoverDiscardButton.classList.add("not-without-more-selected");
//   loseDiscardButton.classList.add("not-without-more-selected");
//   mustLose = true;
//   shortResting = true;
//   var discardedCards = document.querySelectorAll(".discarded");
//   for (var i = 0; i<discardedCards.length; i++){
//     var discardedCard = discardedCards[i];
//     (function (){
//       discardedCard.classList.remove("discard-selected");
//     }).call(this,i);
//   }
//   let randomCard = Math.floor(Math.random()*discardCount);
//   switch (randomCard) {
//     case 0:
//       for (var i = 0; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//         }
//       break;
//     case 1:
//       for (var i = 1; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//       break;
//     case 2:
//       for (var i = 2; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//       break;
//     case 3:
//       for (var i = 3; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//       break;
//     case 4:
//       for (var i = 4; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//       break;
//     case 5:
//       for (var i = 5; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//       break;
//     case 6:
//       for (var i = 6; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//       break;
//     case 7:
//       for (var i = 7; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//       break;
//     case 8:
//       for (var i = 8; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//        break;
//     case 9:
//       for (var i = 9; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//     break;
//     case 10:
//       for (var i = 10; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//     break;
//     case 11:
//       for (var i = 11; i<discardedCards.length; i++){
//         var discardedCard = discardedCards[i];
//         shortRestLoop(discardedCard);
//         i=discardedCards.length;
//       }
//     break;
//   }
// }
// }

// loseCardFromRestButton.onclick = () => {
//   if(mustLoseCount>0 && mustLose && shortResting){
//     playCardsButton.classList.remove("not-while-resting");
//     shortRestButton.classList.remove("not-while-resting");
//     longRestButton.classList.remove("not-while-resting");
//     loseCardFromRestButton.classList.add("not-unless-resting");
//     rerollShortRestButton.classList.remove("can-only-do-once");
//     shortRestButton.classList.add("not-without-more-cards");
//     longRestButton.classList.add("not-without-more-cards");
//     rerollShortRestButton.classList.add("not-unless-resting");
//     loseDiscardButton.classList.add("not-without-more-selected");
//     mustLose = false;
//     shortResting = false;
//       var mustLoseCards = document.querySelectorAll(".must-lose");
//         var mustLoseCard = mustLoseCards[0];
//         (function (){
//           for (var i = 0; i<lostCards.length; i++){
//             var lostCard1 = lostCards[i];
//             if(lostCard1.classList.contains("flipped")){
//               lostCard1.classList.remove("flipped");
//               lostCard1.classList.remove("hiding");
//               lostCard1.src = mustLoseCard.src;
//               i = lostCards.length;
//             }
//           }
//         }).call(this, i);
//         mustLoseCount = 0;
//         discardCount = 0;
//         discardsSelected = 0;
//         mustLoseCard.nextSibling.remove();
//         mustLoseCard.nextSibling.remove();
//         flipDiscard(mustLoseCard);
//         var discardedCards = document.querySelectorAll(".discarded");
//         var cardsInHand = document.querySelectorAll(".hand");
//         for (var j = 0; j<discardedCards.length; j++){
//           (function (){
//             var discardedCard = discardedCards[j];
//             if(!(discardedCard.classList.contains("flipped"))){
//               for (var k = 0; k<cardsInHand.length; k++){
//                 (function () {
//                   var cardInHand = cardsInHand[k];
//                   if(cardInHand.classList.contains("flipped")){
//                     cardInHand.src = discardedCard.src;
//                     cardInHand.classList.remove("flipped");
//                     cardInHand.classList.remove("hiding");
//                     flipDiscard(discardedCard);
//                     k = cardsInHand.length;
//                   }
//                 }).call(this,k);
//             }
//           }

//         }).call(this,j);
//       }
//     } else if (longResting &&  discardsSelected === 1){
//       playCardsButton.classList.remove("not-while-resting");
//       shortRestButton.classList.remove("not-while-resting");
//       longRestButton.classList.remove("not-while-resting");
//       loseCardFromRestButton.classList.add("not-unless-resting");
//       shortRestButton.classList.add("not-without-more-cards");
//       longRestButton.classList.add("not-without-more-cards");
//       loseDiscardButton.classList.add("not-without-more-selected");
//       longResting = false;
//       mustLose = false;
//       var selectedDiscards = document.querySelectorAll(".discard-selected");
//       var selectedDiscard = selectedDiscards[0];
//       selectedDiscard.classList.remove("discard-selected");
//       discardsSelected = 0;
//       (function (){
//         for (var i = 0; i<lostCards.length; i++){
//           var lostCard1 = lostCards[i];
//           if(lostCard1.classList.contains("flipped")){
//             lostCard1.classList.remove("flipped");
//             lostCard1.classList.remove("hiding");
//             lostCard1.src = selectedDiscard.src;
//             i = lostCards.length;
//           }
//         }
//       }).call(this, i);
//       discardCount = 0;
//       Element.prototype.remove = function() {
//         this.parentElement.removeChild(this);
//       }
//       document.getElementById('choose-to-lose').remove();
//       flipDiscard(selectedDiscard);
//       var discardedCards = document.querySelectorAll(".discarded");
//       var cardsInHand = document.querySelectorAll(".hand");
//       for (var j = 0; j<discardedCards.length; j++){
//         (function (){
//           var discardedCard = discardedCards[j];
//           if(!(discardedCard.classList.contains("flipped"))){
//             for (var k = 0; k<cardsInHand.length; k++){
//               (function () {
//                 var cardInHand = cardsInHand[k];
//                 if(cardInHand.classList.contains("flipped")){
//                   cardInHand.src = discardedCard.src;
//                   cardInHand.classList.remove("flipped");
//                   cardInHand.classList.remove("hiding");
//                   flipDiscard(discardedCard);
//                   k = cardsInHand.length;
//                 }
//               }).call(this,k);
//           }
//         }

//       }).call(this,j);
//     }
//     if(poisoned){
//       poisoned = false;
//       poisonedToken.classList.add("hiding");
//       healButton.classList.remove("poisoned");
//       wounded = false;
//       woundedToken.classList.add('hiding');
//     } else if (health<maxHealth){
//       health = health+2;
//       healthCounter.innerHTML = health + "/" + maxHealth;
//       wounded = false;
//       woundedToken.classList.add('hiding');
//       if(health>maxHealth){
//         health = maxHealth;
//         healthCounter.innerHTML = health + "/" + maxHealth;
//       }
//     }
//   }
// }

// rerollShortRestButton.onclick = () => {
//   if(mustLoseCount === 1){
//     rerollShortRestButton.classList.add("can-only-do-once");
//     health--;
//     healButton.classList.remove("at-max");
//     healthCounter.innerHTML =  health + "/" + maxHealth;
//     var discardedCards = document.querySelectorAll(".discarded");
//     for (var i = 0; i<discardedCards.length; i++){
//       var discardedCard = discardedCards[i];
//       (function (){
//         discardedCard.classList.remove("discard-selected");
//         if(discardedCard.classList.contains("must-lose")){
//           discardedCard.classList.add("unloseable");
//           i = discardedCards.length;
//           discardedCard.classList.remove("must-lose");
//           discardedCard.nextSibling.remove();
//           discardedCard.nextSibling.remove();
//         }
//       }).call(this,i);
//     }
//       var randomCard2 = Math.floor(Math.random()*discardCount);
//       var unloseable = document.querySelectorAll(".unloseable");
//       var unloseableCard = unloseable[0];
//       unloseableCard.classList.remove("unloseable");
//       while (unloseableCard === discardedCards[randomCard2]){
//         randomCard2 = Math.floor(Math.random()*discardCount);
//       }
//     switch (randomCard2) {
//       case 0:
//         for (var i = 0; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//           }
//         break;
//       case 1:
//         for (var i = 1; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//         break;
//       case 2:
//         for (var i = 2; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//         break;
//       case 3:
//         for (var i = 3; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//         break;
//       case 4:
//         for (var i = 4; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//         break;
//       case 5:
//         for (var i = 5; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//         break;
//       case 6:
//         for (var i = 6; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//         break;
//       case 7:
//         for (var i = 7; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//         break;
//       case 8:
//         for (var i = 8; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//          break;
//       case 9:
//         for (var i = 9; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//       break;
//       case 10:
//         for (var i = 10; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//       break;
//       case 11:
//         for (var i = 11; i<discardedCards.length; i++){
//           var discardedCard = discardedCards[i];
//           shortRestLoop(discardedCard);
//           i=discardedCards.length;
//         }
//       break;
//     }
//   }
// }


// let longResting = false;
// longRestButton.onclick = () => {
//   if(discardCount>1 && mustLoseCount === 0 && cardsInPlayCounter === 0 && !(shortResting) && !(longResting)){
//     document.getElementById('discard-table').insertAdjacentHTML("beforebegin", "<p id = 'choose-to-lose'>Choose One Card to Lose</p><br/>");
//     playCardsButton.classList.add("not-while-resting");
//     shortRestButton.classList.add("not-while-resting");
//     longRestButton.classList.add("not-while-resting");
//     recoverDiscardButton.classList.add("not-without-more-selected");
//     mustLose = true;
//     longResting = true;
//     if (discardsSelected === 1){
//       loseCardFromRestButton.classList.remove("not-unless-resting");
//     }
//   }
// }

// recoverDiscardButton.onclick = () => {
//   if(!shortResting && !longResting && !mustLose && discardsSelected>0){
//     discardsSelected = 0;
//     discardCount--;
//     recoverDiscardButton.classList.add("not-without-more-selected");
//     loseDiscardButton.classList.add("not-without-more-selected");
//     var selectedDiscards = document.querySelectorAll(".discard-selected");
//     var selectedDiscard = selectedDiscards[0];
//     selectedDiscard.classList.remove("discard-selected");
//     var cardsInHand = document.querySelectorAll(".hand");
//       for (var i = 0; i<cardsInHand.length; i++){
//         (function () {
//           var cardInHand = cardsInHand[i];
//           if(cardInHand.classList.contains("flipped")){
//             cardInHand.src = selectedDiscard.src;
//             cardInHand.classList.remove("flipped");
//             cardInHand.classList.remove("hiding");
//             flipDiscard(selectedDiscard);
//             i = cardsInHand.length;
//           }
//         }).call(this,i);
//       }
//       if(discardCount<2){
//         shortRestButton.classList.add("not-without-more-cards");
//         longRestButton.classList.add("not-without-more-cards");
//       }
//     }
// }

// discardActiveCardButton.onclick = () => {
//   if(!mustLose && activesSelected === 1){
//     var activeCardsSelected = document.querySelectorAll(".active-selected");
//     var activeCardSelected = activeCardsSelected[0];
//     for (var i = 0; i<discards.length; i++){
//       var discardedCard = discards[i];
//       if(discardedCard.classList.contains("flipped")){
//         discardedCard.src = activeCardSelected.src;
//         discardedCard.classList.remove("flipped");
//         discardedCard.classList.remove("hiding");
//         i = discards.length;
//         flipActive(activeCardSelected);
//         activesSelected = 0;
//         numberOfActiveCards--;
//         discardCount++;
//       }
//     }
//     if(discardCount>1){
//       shortRestButton.classList.remove("not-without-more-cards");
//       longRestButton.classList.remove("not-without-more-cards");
//     }
//     discardActiveCardButton.classList.add("not-without-more-selected");
//     loseActiveCardButton.classList.add("not-without-more-selected");
//     createActiveTracker.classList.add("not-without-more-selected");
//   }
// }

// loseActiveCardButton.onclick = () => {
//   if(activesSelected === 1){
//     var activeCardsSelected = document.querySelectorAll(".active-selected");
//     var activeCardSelected = activeCardsSelected[0];
//     for (var i = 0; i<lostCards.length; i++){
//       var lostCard = lostCards[i];
//       if(lostCard.classList.contains("flipped")){
//         lostCard.src = activeCardSelected.src;
//         lostCard.classList.remove("flipped");
//         lostCard.classList.remove("hiding");
//         i = lostCards.length;
//         flipActive(activeCardSelected);
//         activesSelected = 0;
//         numberOfActiveCards--;
//       }
//     }
//     discardActiveCardButton.classList.add("not-without-more-selected");
//     loseActiveCardButton.classList.add("not-without-more-selected");
//     createActiveTracker.classList.add("not-without-more-selected");
//   }
// }

// recoverLostCardButton.onclick = () => {
//   if(!shortResting && !longResting && !mustLose && lostSelectedCounter>0){
//     lostSelectedCounter = 0;
//     var selectedLostCards = document.querySelectorAll(".lost-selected");
//     var selectedLostCard = selectedLostCards[0];
//     recoverLostCardButton.classList.add("not-without-more-selected");
//     selectedLostCard.classList.remove("lost-selected");
//     var cardsInHand = document.querySelectorAll(".hand");
//       for (var i = 0; i<cardsInHand.length; i++){
//         (function () {
//           var cardInHand = cardsInHand[i];
//           if(cardInHand.classList.contains("flipped")){
//             cardInHand.src = selectedLostCard.src;
//             cardInHand.classList.remove("flipped");
//             cardInHand.classList.remove("hiding");
//             flipLost(selectedLostCard);
//             i = cardsInHand.length;
//           }
//         }).call(this,i);
//       }
//     }
// }

// togglePoison.onclick = () =>{
//   if(!poisoned){
//     poisoned = true;
//     poisonedToken.classList.remove('hiding');
//     healButton.classList.add("poisoned");
//   }else{
//     poisoned = false;
//     poisonedToken.classList.add('hiding');
//     healButton.classList.remove("poisoned");
//   }
// }

// toggleBearPoison.onclick = () =>{
//   if(!bearPoisoned){
//     bearPoisoned = true;
//     bearPoisonedToken.classList.remove('hiding');
//     healBearButton.classList.add("poisoned");
//   }else{
//     bearPoisoned = false;
//     bearPoisonedToken.classList.add('hiding');
//     healBearButton.classList.remove("poisoned");
//   }
// }

// toggleWounded.onclick = () =>{
//   if(!wounded){
//     wounded = true;
//     woundedToken.classList.remove('hiding');
//   }else{
//     wounded = false;
//     woundedToken.classList.add('hiding');
//   }
// }

// toggleBearWounded.onclick = () =>{
//   if(!bearWounded){
//     bearWounded = true;
//     bearWoundedToken.classList.remove('hiding');
//   }else{
//     bearWounded = false;
//     bearWoundedToken.classList.add('hiding');
//   }
// }

// toggleImmobilized.onclick = () =>{
//   if(!immobilized){
//     immobilized = true;
//     immobilizedToken.classList.remove('hiding');
//   }else{
//     immobilized = false;
//     immobilizedToken.classList.add('hiding');
//   }
// }

// toggleBearImmobilized.onclick = () =>{
//   if(!bearImmobilized){
//     bearImmobilized = true;
//     bearImmobilizedToken.classList.remove('hiding');
//   }else{
//     bearImmobilized = false;
//     bearImmobilizedToken.classList.add('hiding');
//   }
// }

// toggleDisarmed.onclick = () =>{
//   if(!disarmed){
//     disarmed = true;
//     disarmedToken.classList.remove('hiding');
//   }else{
//     disarmed = false;
//     disarmedToken.classList.add('hiding');
//   }
// }

// toggleBearDisarmed.onclick = () =>{
//   if(!bearDisarmed){
//     bearDisarmed = true;
//     bearDisarmedToken.classList.remove('hiding');
//   }else{
//     bearDisarmed = false;
//     bearDisarmedToken.classList.add('hiding');
//   }
// }

// toggleStunned.onclick = () =>{
//   if(!stunned){
//     stunned = true;
//     stunnedToken.classList.remove('hiding');
//   }else{
//     stunned = false;
//     stunnedToken.classList.add('hiding');
//   }
// }

// toggleBearStunned.onclick = () =>{
//   if(!bearStunned){
//     bearStunned = true;
//     bearStunnedToken.classList.remove('hiding');
//   }else{
//     bearStunned = false;
//     bearStunnedToken.classList.add('hiding');
//   }
// }

// toggleMuddled.onclick = () =>{
//   if(!muddled){
//     muddled = true;
//     muddledToken.classList.remove('hiding');
//   }else{
//     muddled = false;
//     muddledToken.classList.add('hiding');
//   }
// }

// toggleBearMuddled.onclick = () =>{
//   if(!bearMuddled){
//     bearMuddled = true;
//     bearMuddledToken.classList.remove('hiding');
//   }else{
//     bearMuddled = false;
//     bearMuddledToken.classList.add('hiding');
//   }
// }

// toggleInvisible.onclick = () =>{
//   if(!invisible){
//     invisible = true;
//     invisibleToken.classList.remove('hiding');
//   }else{
//     invisible = false;
//     invisibleToken.classList.add('hiding');
//   }
// }

// toggleBearInvisible.onclick = () =>{
//   if(!bearInvisible){
//     bearInvisible = true;
//     bearInvisibleToken.classList.remove('hiding');
//   }else{
//     bearInvisible = false;
//     bearInvisibleToken.classList.add('hiding');
//   }
// }

// toggleStrengthened.onclick = () =>{
//   if(!strengthened){
//     strengthened = true;
//     strengthenedToken.classList.remove('hiding');
//   }else{
//     strengthened = false;
//     strengthenedToken.classList.add('hiding');
//   }
// }

// toggleBearStrengthened.onclick = () =>{
//   if(!bearStrengthened){
//     bearStrengthened = true;
//     bearStrengthenedToken.classList.remove('hiding');
//   }else{
//     bearStrengthened = false;
//     bearStrengthenedToken.classList.add('hiding');
//   }
// }

// let healthCounter = document.getElementById('health-counter');
// let xpCounter = document.getElementById('xp-counter');
// let bearHealthCounter = document.getElementById('bear-health-counter');
// let lootCounter = document.getElementById('loot-counter');







// increaseTrackerSize.onclick = () => {
//   if(trackerSize<6){
//     trackerSize++;
//     trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
//     decreaseTrackerSize.classList.remove("at-min");
//     if(trackerSize === 6){
//       increaseTrackerSize.classList.add("at-max");
//     }
//   }
// }

// decreaseTrackerSize.onclick = () => {
//   if(trackerSize>1){
//     trackerSize--;
//     trackerSizeCounter.innerHTML = "Tracker Size: "+ trackerSize;
//     increaseTrackerSize.classList.remove("at-max");
//     if(trackerSize === 1){
//       decreaseTrackerSize.classList.add("at-min");
//     }
//   }
// }

// createActiveTracker.onclick = () => {
//   var activeCardsWithBorder = document.querySelectorAll(".active-selected");
//   activeCardWithBorder = activeCardsWithBorder[0];
//   if(!(activeCardWithBorder.classList.contains("has-tracker"))){
//   switch(trackerSize){
//     case 1:
//       var activeCards = document.querySelectorAll(".active-card");
//       for (var i = 0; i<activeCards.length; i++){
//         (function (){
//           var activeCard = activeCards[i];
//           if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
//            activeCard.classList.remove("active-selected");
//            activeCard.classList.add("has-tracker");
//            switch (i){
//             case 0:
//               var card1Trackers = document.querySelectorAll(".tracker-button1");
//               var card1Tracker1 = card1Trackers[0];
//               card1Tracker1.classList.remove("invisible");
//               card1TrackerCounter = 1;
//               break;
//             case 1:
//               var card2Trackers = document.querySelectorAll(".tracker-button2");
//               var card2Tracker1 = card2Trackers[0];
//               card2Tracker1.classList.remove("invisible");
//               card2TrackerCounter = 1;
//               break;
//             case 2:
//               var card3Trackers = document.querySelectorAll(".tracker-button3");
//               var card3Tracker1 = card3Trackers[0];
//               card3Tracker1.classList.remove("invisible");
//               card3TrackerCounter = 1;
//               break;
//             case 3:
//               var card4Trackers = document.querySelectorAll(".tracker-button4");
//               var card4Tracker1 = card4Trackers[0];
//               card4Tracker1.classList.remove("invisible");
//               card4TrackerCounter = 1;
//               break;
//             case 4:
//               var card5Trackers = document.querySelectorAll(".tracker-button5");
//               var card5Tracker1 = card5Trackers[0];
//               card5Tracker1.classList.remove("invisible");
//               card5TrackerCounter = 1;
//               break;
//             case 5:
//               var card6Trackers = document.querySelectorAll(".tracker-button6");
//               var card6Tracker1 = card6Trackers[0];
//               card6Tracker1.classList.remove("invisible");
//               card6TrackerCounter = 1;
//               break;
//            }
//           }
//         }).call(this,i);
//       }
//       break;
//     case 2:
//       var activeCards = document.querySelectorAll(".active-card");
//       for (var i = 0; i<activeCards.length; i++){
//         (function (){
//           var activeCard = activeCards[i];
//           if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
//             activeCard.classList.remove("active-selected");
//             activeCard.classList.add("has-tracker");
//             switch (i){
//              case 0:
//                var card1Trackers = document.querySelectorAll(".tracker-button1");
//                for(var j = 0; j<card1Trackers.length; j++){
//                  (function () {
//                    var card1Tracker = card1Trackers[j];
//                    if(j<2){
//                      card1Tracker.classList.remove("invisible");
//                      card1TrackerCounter = 2;
//                    }
//                  }).call(this, j);
//                }
//                break;
//              case 1:
//              var card2Trackers = document.querySelectorAll(".tracker-button2");
//              for(var j = 0; j<card2Trackers.length; j++){
//                (function () {
//                  var card2Tracker = card2Trackers[j];
//                  if(j<2){
//                    card2Tracker.classList.remove("invisible");
//                    card2TrackerCounter = 2;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 2:
//              var card3Trackers = document.querySelectorAll(".tracker-button3");
//              for(var j = 0; j<card3Trackers.length; j++){
//                (function () {
//                  var card3Tracker = card3Trackers[j];
//                  if(j<2){
//                    card3Tracker.classList.remove("invisible");
//                    card3TrackerCounter = 2;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 3:
//              var card4Trackers = document.querySelectorAll(".tracker-button4");
//              for(var j = 0; j<card4Trackers.length; j++){
//                (function () {
//                  var card4Tracker = card4Trackers[j];
//                  if(j<2){
//                    card4Tracker.classList.remove("invisible");
//                    card4TrackerCounter = 2;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 4:
//              var card5Trackers = document.querySelectorAll(".tracker-button5");
//              for(var j = 0; j<card5Trackers.length; j++){
//                (function () {
//                  var card5Tracker = card5Trackers[j];
//                  if(j<2){
//                    card5Tracker.classList.remove("invisible");
//                    card5TrackerCounter = 2;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 5:
//              var card6Trackers = document.querySelectorAll(".tracker-button6");
//              for(var j = 0; j<card6Trackers.length; j++){
//                (function () {
//                  var card6Tracker = card6Trackers[j];
//                  if(j<2){
//                    card6Tracker.classList.remove("invisible");
//                    card6TrackerCounter = 2;
//                  }
//                }).call(this, j);
//              }
//                break;
//             }
//           }
//         }).call(this,i);
//       }
//       break;
//     case 3:
//       var activeCards = document.querySelectorAll(".active-card");
//       for (var i = 0; i<activeCards.length; i++){
//         (function (){
//           var activeCard = activeCards[i];
//           if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
//             activeCard.classList.remove("active-selected");
//             activeCard.classList.add("has-tracker");
//             switch (i){
//              case 0:
//                var card1Trackers = document.querySelectorAll(".tracker-button1");
//                for(var j = 0; j<card1Trackers.length; j++){
//                  (function () {
//                    var card1Tracker = card1Trackers[j];
//                    if(j<3){
//                      card1Tracker.classList.remove("invisible");
//                      card1TrackerCounter = 3;
//                    }
//                  }).call(this, j);
//                }
//                break;
//              case 1:
//              var card2Trackers = document.querySelectorAll(".tracker-button2");
//              for(var j = 0; j<card2Trackers.length; j++){
//                (function () {
//                  var card2Tracker = card2Trackers[j];
//                  if(j<3){
//                    card2Tracker.classList.remove("invisible");
//                    card2TrackerCounter = 3;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 2:
//              var card3Trackers = document.querySelectorAll(".tracker-button3");
//              for(var j = 0; j<card3Trackers.length; j++){
//                (function () {
//                  var card3Tracker = card3Trackers[j];
//                  if(j<3){
//                    card3Tracker.classList.remove("invisible");
//                    card3TrackerCounter = 3;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 3:
//              var card4Trackers = document.querySelectorAll(".tracker-button4");
//              for(var j = 0; j<card4Trackers.length; j++){
//                (function () {
//                  var card4Tracker = card4Trackers[j];
//                  if(j<3){
//                    card4Tracker.classList.remove("invisible");
//                    card4TrackerCounter = 3;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 4:
//              var card5Trackers = document.querySelectorAll(".tracker-button5");
//              for(var j = 0; j<card5Trackers.length; j++){
//                (function () {
//                  var card5Tracker = card5Trackers[j];
//                  if(j<3){
//                    card5Tracker.classList.remove("invisible");
//                    card5TrackerCounter = 3;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 5:
//              var card6Trackers = document.querySelectorAll(".tracker-button6");
//              for(var j = 0; j<card6Trackers.length; j++){
//                (function () {
//                  var card6Tracker = card6Trackers[j];
//                  if(j<3){
//                    card6Tracker.classList.remove("invisible");
//                    card6TrackerCounter = 3;
//                  }
//                }).call(this, j);
//              }
//                break;
//             }
//           }
//         }).call(this,i);
//       }
//       break;
//     case 4:
//       var activeCards = document.querySelectorAll(".active-card");
//       for (var i = 0; i<activeCards.length; i++){
//         (function (){
//           var activeCard = activeCards[i];
//           if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
//           activeCard.classList.remove("active-selected");
//           activeCard.classList.add("has-tracker");
//           switch (i){
//            case 0:
//              var card1Trackers = document.querySelectorAll(".tracker-button1");
//              for(var j = 0; j<card1Trackers.length; j++){
//                (function () {
//                  var card1Tracker = card1Trackers[j];
//                  if(j<4){
//                    card1Tracker.classList.remove("invisible");
//                    card1TrackerCounter = 4;
//                  }
//                }).call(this, j);
//              }
//              break;
//            case 1:
//            var card2Trackers = document.querySelectorAll(".tracker-button2");
//            for(var j = 0; j<card2Trackers.length; j++){
//              (function () {
//                var card2Tracker = card2Trackers[j];
//                if(j<4){
//                  card2Tracker.classList.remove("invisible");
//                  card2TrackerCounter = 4;
//                }
//              }).call(this, j);
//            }
//              break;
//            case 2:
//            var card3Trackers = document.querySelectorAll(".tracker-button3");
//            for(var j = 0; j<card3Trackers.length; j++){
//              (function () {
//                var card3Tracker = card3Trackers[j];
//                if(j<4){
//                  card3Tracker.classList.remove("invisible");
//                  card3TrackerCounter = 4;
//                }
//              }).call(this, j);
//            }
//              break;
//            case 3:
//            var card4Trackers = document.querySelectorAll(".tracker-button4");
//            for(var j = 0; j<card4Trackers.length; j++){
//              (function () {
//                var card4Tracker = card4Trackers[j];
//                if(j<4){
//                  card4Tracker.classList.remove("invisible");
//                  card4TrackerCounter = 4;
//                }
//              }).call(this, j);
//            }
//              break;
//            case 4:
//            var card5Trackers = document.querySelectorAll(".tracker-button5");
//            for(var j = 0; j<card5Trackers.length; j++){
//              (function () {
//                var card5Tracker = card5Trackers[j];
//                if(j<4){
//                  card5Tracker.classList.remove("invisible");
//                  card5TrackerCounter = 4;
//                }
//              }).call(this, j);
//            }
//              break;
//            case 5:
//            var card6Trackers = document.querySelectorAll(".tracker-button6");
//            for(var j = 0; j<card6Trackers.length; j++){
//              (function () {
//                var card6Tracker = card6Trackers[j];
//                if(j<4){
//                  card6Tracker.classList.remove("invisible");
//                  card6TrackerCounter = 4;
//                }
//              }).call(this, j);
//            }
//              break;
//           }
//           }
//         }).call(this,i);
//       }
//       break;
//     case 5:
//       var activeCards = document.querySelectorAll(".active-card");
//       for (var i = 0; i<activeCards.length; i++){
//         (function (){
//           var activeCard = activeCards[i];
//           if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
//             activeCard.classList.remove("active-selected");
//             activeCard.classList.add("has-tracker");
//             switch (i){
//              case 0:
//                var card1Trackers = document.querySelectorAll(".tracker-button1");
//                for(var j = 0; j<card1Trackers.length; j++){
//                  (function () {
//                    var card1Tracker = card1Trackers[j];
//                    if(j<5){
//                      card1Tracker.classList.remove("invisible");
//                      card1TrackerCounter = 5;
//                    }
//                  }).call(this, j);
//                }
//                break;
//              case 1:
//              var card2Trackers = document.querySelectorAll(".tracker-button2");
//              for(var j = 0; j<card2Trackers.length; j++){
//                (function () {
//                  var card2Tracker = card2Trackers[j];
//                  if(j<5){
//                    card2Tracker.classList.remove("invisible");
//                    card2TrackerCounter = 5;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 2:
//              var card3Trackers = document.querySelectorAll(".tracker-button3");
//              for(var j = 0; j<card3Trackers.length; j++){
//                (function () {
//                  var card3Tracker = card3Trackers[j];
//                  if(j<5){
//                    card3Tracker.classList.remove("invisible");
//                    card3TrackerCounter = 5;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 3:
//              var card4Trackers = document.querySelectorAll(".tracker-button4");
//              for(var j = 0; j<card4Trackers.length; j++){
//                (function () {
//                  var card4Tracker = card4Trackers[j];
//                  if(j<5){
//                    card4Tracker.classList.remove("invisible");
//                    card4TrackerCounter = 5;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 4:
//              var card5Trackers = document.querySelectorAll(".tracker-button5");
//              for(var j = 0; j<card5Trackers.length; j++){
//                (function () {
//                  var card5Tracker = card5Trackers[j];
//                  if(j<5){
//                    card5Tracker.classList.remove("invisible");
//                    card5TrackerCounter = 5;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 5:
//              var card6Trackers = document.querySelectorAll(".tracker-button6");
//              for(var j = 0; j<card6Trackers.length; j++){
//                (function () {
//                  var card6Tracker = card6Trackers[j];
//                  if(j<5){
//                    card6Tracker.classList.remove("invisible");
//                    card6TrackerCounter = 5;
//                  }
//                }).call(this, j);
//              }
//                break;
//             }
//           }
//         }).call(this,i);
//       }
//       break;
//     case 6:
//       var activeCards = document.querySelectorAll(".active-card");
//       for (var i = 0; i<activeCards.length; i++){
//         (function (){
//           var activeCard = activeCards[i];
//           if (activeCard.classList.contains("active-selected") && !(activeCard.classList.contains("has-tracker"))){
//             activeCard.classList.remove("active-selected");
//             activeCard.classList.add("has-tracker");
//             switch (i){
//              case 0:
//                var card1Trackers = document.querySelectorAll(".tracker-button1");
//                for(var j = 0; j<card1Trackers.length; j++){
//                  (function () {
//                    var card1Tracker = card1Trackers[j];
//                    if(j<6){
//                      card1Tracker.classList.remove("invisible");
//                      card1TrackerCounter = 6;
//                    }
//                  }).call(this, j);
//                }
//                break;
//              case 1:
//              var card2Trackers = document.querySelectorAll(".tracker-button2");
//              for(var j = 0; j<card2Trackers.length; j++){
//                (function () {
//                  var card2Tracker = card2Trackers[j];
//                  if(j<6){
//                    card2Tracker.classList.remove("invisible");
//                    card2TrackerCounter = 6;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 2:
//              var card3Trackers = document.querySelectorAll(".tracker-button3");
//              for(var j = 0; j<card3Trackers.length; j++){
//                (function () {
//                  var card3Tracker = card3Trackers[j];
//                  if(j<6){
//                    card3Tracker.classList.remove("invisible");
//                    card3TrackerCounter = 6;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 3:
//              var card4Trackers = document.querySelectorAll(".tracker-button4");
//              for(var j = 0; j<card4Trackers.length; j++){
//                (function () {
//                  var card4Tracker = card4Trackers[j];
//                  if(j<6){
//                    card4Tracker.classList.remove("invisible");
//                    card4TrackerCounter = 6;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 4:
//              var card5Trackers = document.querySelectorAll(".tracker-button5");
//              for(var j = 0; j<card5Trackers.length; j++){
//                (function () {
//                  var card5Tracker = card5Trackers[j];
//                  if(j<6){
//                    card5Tracker.classList.remove("invisible");
//                    card5TrackerCounter = 6;
//                  }
//                }).call(this, j);
//              }
//                break;
//              case 5:
//              var card6Trackers = document.querySelectorAll(".tracker-button6");
//              for(var j = 0; j<card6Trackers.length; j++){
//                (function () {
//                  var card6Tracker = card6Trackers[j];
//                  if(j<6){
//                    card6Tracker.classList.remove("invisible");
//                    card6TrackerCounter = 6;
//                  }
//                }).call(this, j);
//              }
//                break;
//             }
//           }
//         }).call(this,i);
//       }
//       break;
//     }
//     discardActiveCardButton.classList.add("not-without-more-selected");
//     loseActiveCardButton.classList.add("not-without-more-selected");
//     createActiveTracker.classList.add("not-without-more-selected");
//     activesSelected = 0;
// }
// }

// var trackerUseButtons1 = document.querySelectorAll(".tracker-button1");
// for (var i = 0; i<trackerUseButtons1.length; i++){
//   (function (){
//     var trackerUseButton1 = trackerUseButtons1[i];
//     trackerUseButton1.onclick = () => {
//       if (trackerUseButton1 === trackerUseButtons1[0]){
//         trackerUseButton1.classList.add("invisible");
//       }else if (trackerUseButton1.previousSibling.classList.contains("invisible")){
//         trackerUseButton1.classList.add("invisible");
//       } if(card1TrackerCounter === 1 && trackerUseButton1 === trackerUseButtons1[0]){
//         active1.classList.remove("has-tracker");
//         if(active1.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card1TrackerCounter === 2 && trackerUseButton1 === trackerUseButtons1[1]){
//         active1.classList.remove("has-tracker");
//         if(active1.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }  else if (card1TrackerCounter === 3 && trackerUseButton1 === trackerUseButtons1[2]){
//         active1.classList.remove("has-tracker");
//         if(active1.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card1TrackerCounter === 4 && trackerUseButton1 === trackerUseButtons1[3]){
//         active1.classList.remove("has-tracker");
//         if(active1.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card1TrackerCounter === 5 && trackerUseButton1 === trackerUseButtons1[4]){
//         active1.classList.remove("has-tracker");
//         if(active1.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card1TrackerCounter === 6 && trackerUseButton1 === trackerUseButtons1[5]){
//         active1.classList.remove("has-tracker");
//         if(active1.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }
//     }
//   }).call(this, i);
// }

// var trackerUseButtons2 = document.querySelectorAll(".tracker-button2");
// for (var i = 0; i<trackerUseButtons2.length; i++){
//   (function (){
//     var trackerUseButton2 = trackerUseButtons2[i];
//     trackerUseButton2.onclick = () => {
//       if (trackerUseButton2 === trackerUseButtons2[0]){
//         trackerUseButton2.classList.add("invisible");
//       }else if (trackerUseButton2.previousSibling.classList.contains("invisible")){
//         trackerUseButton2.classList.add("invisible");
//       } if(card2TrackerCounter === 1 && trackerUseButton2 === trackerUseButtons2[0]){
//         active2.classList.remove("has-tracker");
//         if(active2.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card2TrackerCounter === 2 && trackerUseButton2 === trackerUseButtons2[1]){
//         active2.classList.remove("has-tracker");
//         if(active2.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }  else if (card2TrackerCounter === 3 && trackerUseButton2 === trackerUseButtons2[2]){
//         active2.classList.remove("has-tracker");
//         if(active2.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card2TrackerCounter === 4 && trackerUseButton2 === trackerUseButtons2[3]){
//         active2.classList.remove("has-tracker");
//         if(active2.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card2TrackerCounter === 5 && trackerUseButton2 === trackerUseButtons2[4]){
//         active2.classList.remove("has-tracker");
//         if(active2.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card2TrackerCounter === 6 && trackerUseButton2 === trackerUseButtons2[5]){
//         active2.classList.remove("has-tracker");
//         if(active2.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }
//     }
//   }).call(this, i);
// }

// var trackerUseButtons3 = document.querySelectorAll(".tracker-button3");
// for (var i = 0; i<trackerUseButtons3.length; i++){
//   (function (){
//     var trackerUseButton3 = trackerUseButtons3[i];
//     trackerUseButton3.onclick = () => {
//       if (trackerUseButton3 === trackerUseButtons3[0]){
//         trackerUseButton3.classList.add("invisible");
//       }else if (trackerUseButton3.previousSibling.classList.contains("invisible")){
//         trackerUseButton3.classList.add("invisible");
//       } if(card3TrackerCounter === 1 && trackerUseButton3 === trackerUseButtons3[0]){
//         active3.classList.remove("has-tracker");
//         if(active3.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card3TrackerCounter === 2 && trackerUseButton3 === trackerUseButtons3[1]){
//         active3.classList.remove("has-tracker");
//         if(active3.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }  else if (card3TrackerCounter === 3 && trackerUseButton3 === trackerUseButtons3[2]){
//         active3.classList.remove("has-tracker");
//         if(active3.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card3TrackerCounter === 4 && trackerUseButton3 === trackerUseButtons3[3]){
//         active3.classList.remove("has-tracker");
//         if(active3.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card3TrackerCounter === 5 && trackerUseButton3 === trackerUseButtons3[4]){
//         active3.classList.remove("has-tracker");
//         if(active3.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card3TrackerCounter === 6 && trackerUseButton3 === trackerUseButtons3[5]){
//         active3.classList.remove("has-tracker");
//         if(active3.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }
//     }
//   }).call(this, i);
// }

// var trackerUseButtons4 = document.querySelectorAll(".tracker-button4");
// for (var i = 0; i<trackerUseButtons4.length; i++){
//   (function (){
//     var trackerUseButton4 = trackerUseButtons4[i];
//     trackerUseButton4.onclick = () => {
//       if (trackerUseButton4 === trackerUseButtons4[0]){
//         trackerUseButton4.classList.add("invisible");
//       }else if (trackerUseButton4.previousSibling.classList.contains("invisible")){
//         trackerUseButton4.classList.add("invisible");
//       } if(card4TrackerCounter === 1 && trackerUseButton4 === trackerUseButtons4[0]){
//         active4.classList.remove("has-tracker");
//         if(active4.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card4TrackerCounter === 2 && trackerUseButton4 === trackerUseButtons4[1]){
//         active4.classList.remove("has-tracker");
//         if(active4.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }  else if (card4TrackerCounter === 3 && trackerUseButton4 === trackerUseButtons4[2]){
//         active4.classList.remove("has-tracker");
//         if(active4.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card4TrackerCounter === 4 && trackerUseButton4 === trackerUseButtons4[3]){
//         active4.classList.remove("has-tracker");
//         if(active4.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card4TrackerCounter === 5 && trackerUseButton4 === trackerUseButtons4[4]){
//         active4.classList.remove("has-tracker");
//         if(active4.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card4TrackerCounter === 6 && trackerUseButton4 === trackerUseButtons4[5]){
//         active4.classList.remove("has-tracker");
//         if(active4.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }
//     }
//   }).call(this, i);
// }

// var trackerUseButtons5 = document.querySelectorAll(".tracker-button5");
// for (var i = 0; i<trackerUseButtons5.length; i++){
//   (function (){
//     var trackerUseButton5 = trackerUseButtons5[i];
//     trackerUseButton5.onclick = () => {
//       if (trackerUseButton5 === trackerUseButtons5[0]){
//         trackerUseButton5.classList.add("invisible");
//       }else if (trackerUseButton5.previousSibling.classList.contains("invisible")){
//         trackerUseButton5.classList.add("invisible");
//       } if(card5TrackerCounter === 1 && trackerUseButton5 === trackerUseButtons5[0]){
//         active5.classList.remove("has-tracker");
//         if(active5.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card5TrackerCounter === 2 && trackerUseButton5 === trackerUseButtons5[1]){
//         active5.classList.remove("has-tracker");
//         if(active5.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }  else if (card5TrackerCounter === 3 && trackerUseButton5 === trackerUseButtons5[2]){
//         active5.classList.remove("has-tracker");
//         if(active5.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card5TrackerCounter === 4 && trackerUseButton5 === trackerUseButtons5[3]){
//         active5.classList.remove("has-tracker");
//         if(active5.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card5TrackerCounter === 5 && trackerUseButton5 === trackerUseButtons5[4]){
//         active5.classList.remove("has-tracker");
//         if(active5.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card5TrackerCounter === 6 && trackerUseButton5 === trackerUseButtons5[5]){
//         active5.classList.remove("has-tracker");
//         if(active5.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }
//     }
//   }).call(this, i);
// }

// var trackerUseButtons6 = document.querySelectorAll(".tracker-button6");
// for (var i = 0; i<trackerUseButtons6.length; i++){
//   (function (){
//     var trackerUseButton6 = trackerUseButtons6[i];
//     trackerUseButton6.onclick = () => {
//       if (trackerUseButton6 === trackerUseButtons6[0]){
//         trackerUseButton6.classList.add("invisible");
//       }else if (trackerUseButton6.previousSibling.classList.contains("invisible")){
//         trackerUseButton6.classList.add("invisible");
//       } if(card6TrackerCounter === 1 && trackerUseButton6 === trackerUseButtons6[0]){
//         active6.classList.remove("has-tracker");
//         if(active6.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card6TrackerCounter === 2 && trackerUseButton6 === trackerUseButtons6[1]){
//         active6.classList.remove("has-tracker");
//         if(active6.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }  else if (card6TrackerCounter === 3 && trackerUseButton6 === trackerUseButtons6[2]){
//         active6.classList.remove("has-tracker");
//         if(active6.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card6TrackerCounter === 4 && trackerUseButton6 === trackerUseButtons6[3]){
//         active6.classList.remove("has-tracker");
//         if(active6.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card6TrackerCounter === 5 && trackerUseButton6 === trackerUseButtons6[4]){
//         active6.classList.remove("has-tracker");
//         if(active6.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       } else if (card6TrackerCounter === 6 && trackerUseButton6 === trackerUseButtons6[5]){
//         active6.classList.remove("has-tracker");
//         if(active6.classList.contains("active-selected")){
//           createActiveTracker.classList.remove("not-without-more-selected");
//         }
//       }
//     }
//   }).call(this, i);
// }

// loseDiscardButton.onclick = () => {
//   var selectedDiscards = document.querySelectorAll(".discard-selected");
//   if(discardsSelected === 1){
//   for (var i = 0; i<lostCards.length; i++){
//     var lostCard = lostCards[i];
//     if(lostCard.classList.contains("flipped")){
//       lostCard.src = selectedDiscards[0].src;
//       lostCard.classList.remove("flipped");
//       lostCard.classList.remove("hiding");
//       i = lostCards.length;
//       flipDiscard(selectedDiscards[0]);
//       discardsSelected--;
//       discardCount--;
//       recoverDiscardButton.classList.add("not-without-more-selected");
//       loseDiscardButton.classList.add("not-without-more-selected");
//       loseCardFromRestButton.classList.add("not-unless-resting");
//     }
//   }
// }
//   if(discardCount === 0 && longResting){
//     longResting = false;
//     mustLose = false;
//     playCardsButton.classList.remove("not-while-resting");
//     shortRestButton.classList.remove("not-while-resting");
//     longRestButton.classList.remove("not-while-resting");
//     loseCardFromRestButton.classList.add("not-unless-resting");
//     shortRestButton.classList.add("not-without-more-cards");
//     longRestButton.classList.add("not-without-more-cards");
//     loseDiscardButton.classList.add("not-without-more-selected");
//     Element.prototype.remove = function() {
//       this.parentElement.removeChild(this);
//     }
//     document.getElementById('choose-to-lose').remove();
//   }
// }


// loseHandCard.onclick = () => {
//   if(cardCount === 1){
//     var cardsInHand = document.querySelectorAll(".hand");
//     for (var j = 0; j<cardsInHand.length; j++){
//       var cardInHand = cardsInHand[j];
//       if (cardInHand.classList.contains("add-border")){
//         for (var i = 0; i<lostCards.length; i++){
//           var lostCard = lostCards[i];
//           if(lostCard.classList.contains("flipped")){
//             lostCard.src = cardInHand.src;
//             lostCard.classList.remove("flipped");
//             lostCard.classList.remove("hiding");
//             i = lostCards.length;
//             flipCard(cardInHand);
//             cardCount--;
//             loseHandCard.classList.add('not-without-more-selected');
//           }
//         }
//       }
//     }
//   }
// }


}
