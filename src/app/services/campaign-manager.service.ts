import { Injectable } from '@angular/core';
import { Character } from 'src/app/model/character';
import { Token } from '../model/token';
import { Scenarios } from '../data/mapsDef';
import { tap } from 'rxjs/operators';
import { CampaignStatusService } from './campaign-status.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignManagerService {

  characters: Character[] = [];
  retiredCharacters: Character[] = [];

  constructor(private campaign: CampaignStatusService) {
    const status$ = this.campaign.getStatus$();
    status$.pipe(
      tap(status => this.characters = status.characters),
      tap(status => this.retiredCharacters = status.retiredCharacters)
    ).subscribe();
   }

  getCharacters(): Character[] {
    return this.characters;
  }

  getRetiredCharacters(): Character[] {
    return this.retiredCharacters;
  }

  getScenarios() {
    return Object.entries(Scenarios).map( s => s[1]);
  }

  getCharactersTokens(): Token[] {
    const playerTokens: Token[] = this.characters.map( characters => {
      return {
        id: 'player' + characters.name,
        type: 'player',
        src: 'assets/' + characters.characterClass.id + '_token.png',
        maxHealth: characters.hitPoints,
        stats: {
          h: characters.hitPoints
        },
        status: {}
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
        },
        status: {}
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
        },
        status: {}
      },
    ];

    return playerTokens.concat(summonTokens);
  }
}
