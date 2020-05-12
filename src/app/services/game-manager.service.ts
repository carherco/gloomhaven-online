import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { Players } from '../data/players';
import { Modifier } from '../model/modifier';
import { defaultDeck } from '../data/modifiers';

@Injectable({
  providedIn: 'root'
})
export class GameManagerService {

  player: Player;
  handCards;
  playedCards: [];
  activeCards: [];
  discardedCards: [];
  LostCards: [];

  constructor() { }

  setPlayer(player) {
    this.player = player;
    localStorage.setItem('player', JSON.stringify(this.player));
  }

  getPlayer(): Player {

    let player;

    player = this.player;

    if (player) {
      return player;
    }

    player = JSON.parse(localStorage.getItem('player'));

    if (player) {
      this.player = player;
      return player;
    }

    return null;
  }

  isPlayerSelected() {
    return this.getPlayer() ? true : false;
  }

  setHand(handCards) {
    this.handCards = handCards.map(c => ({...c, selected: false }));
    localStorage.setItem('handCards', JSON.stringify(this.handCards));
  }

  getHand(): any[] {
    return this.handCards || JSON.parse(localStorage.getItem('handCards'));
  }

  getAttackModifierDeck(): Modifier[] {
    let deck: Modifier[] = [...defaultDeck];
    console.log(this.player);
    const playerPerksNames = this.player.perks;
    const characterPerks = this.player.character.perks;
    playerPerksNames.forEach(
      perkName => {
        const perkObject = characterPerks.find( p => p.id === perkName );
        deck = this.addModifiers([...deck], [...perkObject.addModifiers], this.player.character.key);
        deck = this.removeModifiers([...deck], perkObject.removeModifiers, this.player.character.key);
      }
    );
    return deck;
  }

  private addModifiers(currentDeck: Modifier[], modifiers: Modifier[], key: string): Modifier[] {
    const srcPrefix = key.toLowerCase() + 'Perks/' + key.toLowerCase();
    const modifiersWithCorrectSrc = modifiers.map(
      m => ({...m, src: srcPrefix + m.src.charAt(0).toUpperCase() + m.src.slice(1)})
    );
    return currentDeck.concat(modifiersWithCorrectSrc);
  }

  private removeModifiers(currentDeck: Modifier[], modifiers: Modifier[], key: string): Modifier[] {
    modifiers.forEach(
      (m, i) => {
        currentDeck.splice(currentDeck.findIndex(c => c.id === m.id), 1);
      }
    );
    return currentDeck;
  }
}
