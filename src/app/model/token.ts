type TokenType = 'terrain'|'obstacle'|'difficult-terrain'|'player'|'enemy'|'enemy elite'|'summon_player'|'loot'|'door'|'trap';

interface Token {
  id: string;
  type: TokenType;
  src: string;
  name?: string;
  maxHealth?: number;
  health?: number;
  shield?: number;
  move?: number;
  attack?: number;
  range?: number;
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

export {
  TokenType,
  Token,
  CorridorManMadeStoneToken,
  CorridorNaturalStoneToken,
  WaterToken
};
