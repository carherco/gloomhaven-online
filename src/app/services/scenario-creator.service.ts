import { Injectable } from '@angular/core';
import { Token, CorridorManMadeStoneToken, WaterToken, CorridorNaturalStoneToken } from '../model/token';

@Injectable({
  providedIn: 'root'
})
export class ScenarioCreatorService {

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
}
