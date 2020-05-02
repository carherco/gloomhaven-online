import { Injectable } from '@angular/core';
import { Token, CorridorManMadeStoneToken, WaterToken, CorridorNaturalStoneToken, EnemyToken, LootToken, TrapToken } from '../model/token';
import { Scenarios } from '../data/mapsDef';

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

    // const tokensIds = Scenarios[id].tokens;
    const tokensIds = [
      {id: 'Ooze', type: 'enemy'},
      {id: 'Giant-Viper', type: 'enemy'},
      {id: 'Vermling-Scout', type: 'enemy'},
      {id: 'poison-gas', type: 'trap'},
      {id: 'treasure', type: 'loot'},
      {id: 'coin-1', type: 'loot'},
    ];

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
            tokens = [];
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
        return tokens;
      }
    );

    return output;
  }
}
