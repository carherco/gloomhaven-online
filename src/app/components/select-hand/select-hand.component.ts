import { GameManagerService } from './../../services/game-manager.service';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { Cragheart } from 'src/app/data/charactersDef';
import { Player } from 'src/app/model/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-hand',
  templateUrl: './select-hand.component.html',
  styleUrls: ['./select-hand.component.css']
})
export class SelectHandComponent implements OnInit {

  character: Character = Cragheart;
  player: Player;
  cardsList = [];
  cardCount = 0;
  constructor(private router: Router, private game: GameManagerService) {
    this.cardsList = this.character.levelXCards
                                   .concat(this.character.level1Cards)
                                   .map(c => { c.src = c.id + '.jpg', c.selected = false; return c; });
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
