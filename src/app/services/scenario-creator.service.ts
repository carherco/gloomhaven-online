import { Injectable } from '@angular/core';
import { Token, CorridorManMadeStoneToken, WaterToken, CorridorNaturalStoneToken } from '../model/token';
import { Scenarios } from '../data/mapsDef';

@Injectable({
  providedIn: 'root'
})
export class ScenarioCreatorService {

  enemiesNotBossesIds = ['Ooze', 'Giant-Viper', 'Vermling-Scout'];
  enemiesBossesIds = [];
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
    return Scenarios[id];
  }

  getScenarioTokens(id): Token[] {

    // function partition(array, isValid) {
    //   return array.reduce(([pass, fail], elem) => {
    //     return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    //   }, [[], []]);
    // }

    const tokensIds = ['Ooze', 'Giant-Viper', 'Vermling-Scout', 'poison-gas', 'treasure', 'coin-1'];
    // let enemiesIds, bossesIds, others;

    // [enemiesIds, bossesIds] = partition(tokensIds, (t) => this.enemiesNotBossesIds.includes(id));
    // [bossesIds, others] = partition(others, (t) => this.enemiesBossesIds.includes(id));

    function createClassByName(name,...a) {
      const c = eval(name);
      return new c(...a);
    }
    return tokensIds.flatMap(
      t => this.enemiesNotBossesIds.includes(id) ? [createClassByName(t), createClassByName(t + 'Elite')] : [createClassByName(t)]
    );
  }
}
