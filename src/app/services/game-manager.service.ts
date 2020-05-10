import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { Cragheart } from 'src/app/data/charactersDef';
import { Players } from '../data/players';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  player: Player = Players[0];
  handCards;
  playedCards: [];
  activeCards: [];
  discardedCards: [];
  LostCards: [];

  constructor() { }

  setHand(handCards) {
    this.handCards = handCards.map(c => ({...c, selected: false }));
    localStorage.setItem('handCards', JSON.stringify(this.handCards));
  }

  getHand() {
    return this.handCards || JSON.parse(localStorage.getItem('handCards'));
  }
}
