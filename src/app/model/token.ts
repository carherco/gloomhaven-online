import { EnemyDefs, BossDefs, Stats } from '../data/enemiesDefs';

type TokenType = 'terrain'|'obstacle'|'difficult-terrain'|'player'|'enemy'|'enemy elite'|'boss'|'summon_player'|'loot'|'door'|'trap';

interface Token {
  id: string;
  type: TokenType;
  srcBig?: string;
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
    if (type === 'elite') {
      token = {
        id,
        type: 'enemy elite',
        srcBig: 'assets/' + id + '.jpg',
        src: 'assets/' + id + '_token.jpg',
        name: id,
        stats: enemyDef.stats[level].elite,
        maxHealth: enemyDef.stats[level].elite.h,
        status: {},
        extraInfo: enemyDef.description,
      };
    } else {
      token = {
        id,
        type: 'enemy',
        srcBig: 'assets/' + id + '.jpg',
        src: 'assets/' + id + '_token.jpg',
        name: id,
        stats: enemyDef.stats[level].normal,
        maxHealth: enemyDef.stats[level].normal.h,
        status: {},
        extraInfo: enemyDef.description,
      };
    }
    return token;
  }
}

class BossToken {
  constructor(id: string, level: number) {
    let token: Token;
    const bossDef = BossDefs[id];
    token = {
      id,
      type: 'boss',
      srcBig: 'assets/' + id + '.jpg',
      src: 'assets/' + id + '_token.jpg',
      name: id,
      stats: bossDef.stats[level],
      maxHealth: bossDef.stats[level].h,
      status: {},
      extraInfo: bossDef.description,
    };
    return token;
  }
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

class ObstacleToken {
  constructor(id: string) {
    const token: Token = {
      id,
      type: 'trap',
      src: 'assets/images/overlay-tokens/obstacles/' + id + '.png',
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
  TrapToken,
  ObstacleToken,
};
