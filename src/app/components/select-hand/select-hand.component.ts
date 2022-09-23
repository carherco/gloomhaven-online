import { GameManagerService } from './../../services/game-manager.service';
import { Component, OnInit } from '@angular/core';
import { CharacterClass } from 'src/app/model/character-class';
import { Cragheart } from 'src/app/data/charactersDef';
import { Character } from 'src/app/model/character';
import { Router } from '@angular/router';
import { Characters } from 'src/app/data/characters';

@Component({
  selector: 'app-select-hand',
  templateUrl: './select-hand.component.html',
  styleUrls: ['./select-hand.component.css']
})
export class SelectHandComponent implements OnInit {

  private character: Character;
  characterClass: CharacterClass;
  cardsList: any[] = [];
  cardCount = 0;
  constructor(private router: Router, private game: GameManagerService) {
    this.character = this.game.getCharacter();
    this.characterClass = this.character.characterClass;
    const previousSelectedCards = this.game.getHand() || [];
    this.cardsList = this.character.ownedAbilityCards.map(
      c => {
        return {
          id: c,
          src: 'assets/images/character-ability-cards/' + this.characterClass.key + '/' + c + '.png',
          selected: previousSelectedCards.some(card => card.id === c)
        };
      });
    this.cardCount = this.cardsList.filter( c => c.selected ).length;
  }

  ngOnInit() { }

  onCardClick(card: any) {
    if (card.selected) {
      this.cardCount--;
      card.selected = false;
    } else if (this.cardCount < this.characterClass.handCardSize) {
      this.cardCount++;
      card.selected = true;
    }
  }

  onConfirmHand() {
    this.game.setHand(this.cardsList.filter(c => c.selected));
    this.router.navigate(['play']);
  }

}
