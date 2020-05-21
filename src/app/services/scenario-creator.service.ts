import { Injectable } from '@angular/core';
import {
  Token,
  CorridorManMadeStoneToken,
  WaterToken,
  CorridorNaturalStoneToken,
  EnemyToken,
  BossToken,
  ObstacleToken,
  LootToken,
  TrapToken
} from '../model/token';
import { Scenarios } from '../data/mapsDef';
import { MonsterAbilityCardBack, MonsterAbilityCardFront, EnemyTracker } from '../model/monsterAbilityCard';
import { MonsterAbilityCards } from '../data/monster-ability-cards';
import { EnemyDef } from '../data/enemiesDefs';

@Injectable({
  providedIn: 'root'
})
export class ScenarioCreatorService {

  scenarioLevel = 2;
  constructor() { }

  createFromMatrix(matrix: string[][]): Token[][][] {
    return matrix.map(
      fila => fila.map(
        celda => {
          let token: Token[];
          switch (celda) {
            case '-':
              token = [{ id: '-', type: 'terrain', src: 'assets/corridor-stone_token.png' }];
              break;
            case '0':
              token = [new CorridorManMadeStoneToken()];
              break;
            case '1':
              token = [new CorridorNaturalStoneToken()];
              break;
            case 'D':
              token = [{ id: 'D', type: 'door', src: 'assets/images/overlay-tokens/doors/stone-door.png' }];
              break;
            case 'W':
              token = [new WaterToken()];
              break;
            default:
              token = [];
              break;
          }
          return token;
        }
      )
    );
  }

  getUrlScenarioAvatar(id): string {
    return 'assets/images/world-map/' + id + '.png';
  }

  getScenarioData(id) {
    return {...Scenarios[id], tokens: this.getScenarioTokens(id)};
  }

  getScenarioTokens(id): Token[] {

    const tokensIds = Scenarios[id].tokens;
    const output = tokensIds.flatMap(
      t => {
        let tokens: Token[];
        switch (t.type) {
          case 'enemy':
            tokens = [
              new EnemyToken(t.id, 'normal', this.scenarioLevel) as Token,
              new EnemyToken(t.id, 'elite', this.scenarioLevel) as Token
            ];
            break;
          case 'boss':
            tokens = [new BossToken(t.id, this.scenarioLevel) as Token];
            break;
          case 'obstacle':
            tokens = [new ObstacleToken(t.id) as Token];
            break;
          case 'trap':
            tokens = [new TrapToken(t.id, this.scenarioLevel) as Token];
            break;
          case 'loot':
            tokens = [new LootToken(t.id) as Token];
            break;

          default:
            tokens = [];
            break;
        }
        console.log(tokens);
        return tokens;
      }
    );

    return output;
  }

  getEnemyDeck(cardsId: string): [MonsterAbilityCardBack, MonsterAbilityCardFront[]] {
    // console.log(cardsId);
    const cards = MonsterAbilityCards.filter( c => c.name.includes('--' + cardsId + '--'));
    // console.log(cards);
    return [
      cards.find(c => c.name.includes('back')),
      cards.filter(c => !c.name.includes('back')) as MonsterAbilityCardFront[]
    ];
  }

  // id: string;
  // src: string;
  // cardsId: string;
  // cardBack: MonsterAbilityCardBack;
  // cards: MonsterAbilityCardFront[];
  getEnemiesTrackers(tokens: Token[]): any[] {
    console.log(tokens);
    return tokens
      .filter( t => ['enemy', 'boss'].includes(t.type))
      // .map(
      //   e => {
      //     const [cardBack, cards] = this.getEnemyDeck(e.cardsId);
      //     // console.log(cardBack, cards);
      //     return {
      //       ...e,
      //       cardBack,
      //       cards
      //     };
      //   }
      // );
  }
}
