import { GameManagerService } from './../../services/game-manager.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { Cragheart } from 'src/app/data/charactersDef';
import { Player } from 'src/app/model/player';
import { Router } from '@angular/router';
import { Players } from 'src/app/data/players';

@Component({
  selector: 'app-select-hand',
  templateUrl: './select-hand.component.html',
  styleUrls: ['./select-hand.component.css']
})
export class SelectHandComponent implements OnInit {

  player: Player;
  character: Character;
  cardsList = [];
  cardCount = 0;
  constructor(private router: Router, private game: GameManagerService) {
    this.player = this.game.getPlayer();
    this.character = this.player.character;
    const previousSelectedCards = this.game.getHand();
    this.cardsList = this.player.ownedAbilityCards.map(
      c => {
        return {
          id: c,
          src: 'assets/images/character-ability-cards/' + this.character.key + '/' + c + '.png',
          selected: previousSelectedCards.some(card => card.id === c)
        };
      });
    this.cardCount = this.cardsList.filter( c => c.selected ).length;
  }

  ngOnInit() { }

  onCardClick(card) {
    if (card.selected) {
      this.cardCount--;
      card.selected = false;
    } else if (this.cardCount < this.character.handCardSize) {
      this.cardCount++;
      card.selected = true;
    }
  }

  onConfirmHand() {
    this.game.setHand(this.cardsList.filter(c => c.selected));
    this.router.navigate(['play']);
  }

}
