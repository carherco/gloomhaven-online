import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandManagerService {

  handSize = 0;
  handCards = [];
  discardedCards = [];
  lostCards = [];
  activeCards = [];
  playCard1 = {};
  playCard2 = {};

  constructor() { }
}
