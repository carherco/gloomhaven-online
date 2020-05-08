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
    this.cardsList = this.cardsList.concat(this.character.level1Cards);
    if(this.player.level > 3) {
      this.cardsList = this.cardsList.concat(this.character.level2Cards);
    }
    if(this.player.level > 4) {
      this.cardsList = this.cardsList.concat(this.character.level3Cards);
    }
    if(this.player.level > 5) {
      this.cardsList = this.cardsList.concat(this.character.level4Cards);
    }
    if(this.player.level > 6) {
      this.cardsList = this.cardsList.concat(this.character.level5Cards);
    }
    if(this.player.level > 7) {
      this.cardsList = this.cardsList.concat(this.character.level6Cards);
    }
    if(this.player.level > 7) {
      this.cardsList = this.cardsList.concat(this.character.level7Cards);
    }
    if(this.player.level > 7) {
      this.cardsList = this.cardsList.concat(this.character.level8Cards);
    }
    if(this.player.level > 8) {
      this.cardsList = this.cardsList.concat(this.character.level9Cards);
    }
    this.cardsList = this.cardsList.map(c => { c.src = c.id + '.jpg', c.selected = false; return c; });
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
