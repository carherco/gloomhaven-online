import { EnemyDefs, Stats } from '../data/enemiesDefs';

type TokenType = 'terrain'|'obstacle'|'difficult-terrain'|'player'|'enemy'|'enemy elite'|'summon_player'|'loot'|'door'|'trap';

interface Token {
  id: string;
  type: TokenType;
  src: string;
  name?: string;
  stats?: Stats;
  maxHealth?: number;
  poison?: boolean;
  flying?: boolean;
  status?: any;
  extraInfo?: string;
}

class CorridorManMadeStoneToken implements Token {
  id = '0';
  type: TokenType = 'terrain';
  src = 'assets/corridor-stone_token.png';
}

class CorridorNaturalStoneToken implements Token {
  id = '1';
  type: TokenType = 'terrain';
  src = 'assets/corridor-natural-stone_token.png';
}

class WaterToken implements Token {
  id = 'W';
  type: TokenType = 'difficult-terrain';
  src = 'assets/water_token.png';
}

class EnemyToken {
  constructor(id: string, type: 'normal'|'elite', level: number) {
    let token: Token;
    const enemyDef = EnemyDefs[id];
    console.log(id, type, level);
    if (type === 'elite') {
      token = {
        id,
        type: 'enemy elite',
        src: 'assets/' + id + '_token.jpg',
        name: id,
        stats: enemyDef.stats[level].elite,
        extraInfo: enemyDef.description,
      };
    } else {
      token = {
        id,
        type: 'enemy',
        src: 'assets/' + id + '_token.jpg',
        name: id,
        stats: enemyDef.stats[level].normal,
        extraInfo: enemyDef.description,
      };
    }
    return token;
  }
}

class BossToken {

}

class LootToken {
  constructor(id: string) {
    const token: Token = {
      id,
      type: 'loot',
      src: 'assets/images/overlay-tokens/treasures/' + id + '.png',
      name: id
    };
    return token;
  }
}

class TrapToken {
  constructor(id: string, level: number) {
    const token: Token = {
      id,
      type: 'trap',
      src: 'assets/images/overlay-tokens/traps/' + id + '.png',
      name: id
    };
    return token;
  }
}

export {
  TokenType,
  Token,
  CorridorManMadeStoneToken,
  CorridorNaturalStoneToken,
  WaterToken,
  EnemyToken,
  BossToken,
  LootToken,
  TrapToken
};
