import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { Cragheart } from 'src/app/data/charactersDef';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  player: Player = {
    name: 'Lorkham',
    character: Cragheart,
    level: 2,
    hitPoints: 11,
    experience: 0,
    ownedAbilityCards: [],
    ownedItems: [],
    scenarioAbilityCards: [],
    scenarioItems: [],
    attacModifierCards: [],
  }
  handCards: [
    { id: 'ch00' },
    { id: 'ch01' },
    { id: 'ch02' },
    { id: 'ch03' },
    { id: 'ch04' },
    { id: 'ch05' },
    { id: 'ch06' },
    { id: 'ch07' },
    { id: 'ch08' },
    { id: 'ch09' },
    { id: 'ch10' },
  ];
  playedCards: [];
  activeCards: [];
  discardedCards: [];
  LostCards: [];

  constructor() { }

  setHand(handCards) {
    this.handCards = handCards;
  }

  getHand() {
    return this.handCards;
  }
}
