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
import { Scenarios, TokenDef } from '../data/mapsDef';
import { MonsterAbilityCardBack, MonsterAbilityCardFront, EnemyTracker } from '../model/monsterAbilityCard';
import { MonsterAbilityCards } from '../data/monster-ability-cards';
import { EnemyDef, EnemyDefs } from '../data/enemiesDefs';
import { SCENARIOS } from '../data/scenarios';
import { SCENARIO_MONSTERS } from '../data/scenario_monsters';

@Injectable({
  providedIn: 'root'
})
export class ScenarioCreatorService {

  scenarioLevel = 4;
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
    return {...Scenarios[id], ...SCENARIOS[id], enemies: SCENARIO_MONSTERS[id].monsters, tokens: this.getScenarioTokens(id)};
  }

  getScenarioTokens(id): Token[] {


    const tokensIds = Scenarios[id].tokens;
    const mapTokens = tokensIds.flatMap(
      t => {
        let tokens: Token[];
        switch (t.type) {
          // case 'enemy':  // Deprecated (no more 'enemy' in map definition)
          //   tokens = [
          //     new EnemyToken(t.id, 'normal', this.scenarioLevel) as Token,
          //     new EnemyToken(t.id, 'elite', this.scenarioLevel) as Token
          //   ];
          //   break;
          case 'boss':
            tokens = [new BossToken(t.id, this.scenarioLevel) as Token];
            break;
          case 'obstacle':
            tokens = [new ObstacleToken(t.id) as Token];
            break;
          case 'trap':
            tokens = [new TrapToken(t.id, this.scenarioLevel) as Token];
            break;
          // case 'loot': // Deprecated (no more 'treasure' nor 'coin-1' in map definition)
          //   tokens = [new LootToken(t.id) as Token];
          //   break;

          default:
            tokens = [];
            break;
        }
        return tokens;
      }
    );

    const enemyTokens: Token[] = [];
    SCENARIO_MONSTERS[id].monsters.forEach(
      mosnter => {
        const normalToken = new EnemyToken(mosnter.name, 'normal', this.scenarioLevel) as Token;
        const eliteToken = new EnemyToken(mosnter.name, 'elite', this.scenarioLevel) as Token;
        enemyTokens.push(normalToken, eliteToken)
      }
    );

    const output: Token[] = [
      ...enemyTokens,
      ...mapTokens,
      new LootToken('treasure') as Token,
      new LootToken('coin-1') as Token
    ];
    return output;
  }

  getEnemyDeck(cardsId: string): [MonsterAbilityCardBack, MonsterAbilityCardFront[]] {
    const cards = MonsterAbilityCards.filter( c => c.name.includes('-' + cardsId + '-'));
    return [
      cards.find(c => c.name.includes('back')),
      cards.filter(c => !c.name.includes('back')) as MonsterAbilityCardFront[]
    ];
  }

  getEnemiesTrackers(tokens: TokenDef[]): EnemyTracker[] {
    return tokens
      .filter( t => ['enemy', 'boss'].includes(t.type))
      .map(
        (e: Token) => {
          const cardsId = EnemyDefs[e.id].cardsId;
          const [cardBack, cards] = this.getEnemyDeck(cardsId);
          return {
            ...e,
            type: 'enemy',
            cardsId,
            cardBack,
            cards,
            deckCards: [...cards],
            drawnCards: [],
            currentCard: null,
            currentInitiative: null
          };
        }
      );
  }
}
