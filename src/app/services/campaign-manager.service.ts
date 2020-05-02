import { Injectable } from '@angular/core';
import { Players } from 'src/app/data/players';
import { Player } from 'src/app/model/player';
import { Token } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class CampaignManagerService {

  players: Player[] = Players;

  constructor() { }

  getPlayers(): Player[] {
    return this.players;
  }

  getPlayersTokens(): Token[] {
    const playerTokens: Token[] = this.players.map( player => {
      return {
        id: 'player' + player.name,
        type: 'player',
        src: 'assets/' + player.character.class + '_token.png',
        maxHealth: player.hitPoints,
        stats: {
          h: player.hitPoints
        }
      };
    });

    const summonTokens: Token[] = [
      {
        id: 'summon_bob', 
        name: 'Bob', 
        type: 'summon_player', 
        src: 'assets/images/summons/summons.png', 
        maxHealth: 6, 
        stats: {
          h: 6,
          m: 2,
          a: 2
        } 
      },
      {
        id: 'summon_rats', 
        name: 'rats', 
        type: 'summon_player', 
        src: 'assets/images/summons/summons.png', 
        maxHealth: 6, 
        stats: {
          h: 6, 
          m: 2,
          a: 1
        } 
      },
    ];
    
    return playerTokens.concat(summonTokens);
  }
}
