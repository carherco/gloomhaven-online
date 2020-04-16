import { Token } from '../model/token';

export const Map18Matrix = [
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['0', '0', 'W', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
  ['0', '0', 'W', '0', '0', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['-', '-', 'W', '0', '-', '-', '-', '-', '-', '0', '0', '-', '-'],
  ['-', '-', 'W', '0', '0', '-', '-', '-', '-', '0', '0', '0', '-', '-'],
    ['-', '-', 'W', '0', '-', '-', '-', '-', '-', '0', '0', '-', '-'],
  ['-', '-', 'W', '0', '0', '-', '-', '-', '-', '0', '0', '0', '-', '-'],
    ['-', '-', '0', '0', '-', '-', '-', '-', '-', '0', '0', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', 'W', '0', '0', '0', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '0', 'W', 'W', '0', '0', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '0', '0', 'W', 'W', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '0', 'W', 'W', 'W', '0', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '0', '0', '0', 'W', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '-'],
];

export const Map18Tokens: Token[] = [
  {id: 'player1', type: 'player', src: 'assets/Cragheart_token.png', maxHealth: 11, health: 11 },
  {id: 'player2', type: 'player', src: 'assets/Tinkerer_token.png', maxHealth: 9, health: 9 },
  {id: 'summon_bob', type: 'summon_player', src: 'assets/images/summons/summons.png', maxHealth: 6, health: 6 },
  {id: 'player3', type: 'player', src: 'assets/Scoundrel_token.png', maxHealth: 11, health: 11 },
  {id: 'player4', type: 'player', src: 'assets/Mindthief_token.png', maxHealth: 7, health: 7 },
  {id: 'summon_rats', type: 'summon_player', src: 'assets/images/summons/summons.png', maxHealth: 6, health: 6, attack: 1 },
  {id: 'Ooze', name: 'Ooze', type: 'enemy', src: 'assets/Ooze_token.jpg', maxHealth: 7, health: 7, shield: 1, move: 1, attack: 2, range: 3 },
  {id: 'Ooze_elite', name: 'Ooze', type: 'enemy elite', src: 'assets/Ooze_token.jpg', maxHealth: 11, health: 11, shield: 1, move: 1, attack: 3, range: 3 },
  {id: 'Giant-Viper', name: 'Giant-Viper', type: 'enemy', src: 'assets/Giant-Viper_token.jpg', maxHealth: 4, health: 4, move: 3, attack: 1 },
  {id: 'Giant-Viper_elite', name: 'Giant-Viper', type: 'enemy elite', src: 'assets/Giant-Viper_token.jpg', maxHealth: 7, health: 7, move: 3, attack: 2 },
  {id: 'Vermling-Scout', name: 'Vermling-Scout', type: 'enemy', src: 'assets/Vermling-Scout_token.jpg', maxHealth: 3, health: 3, move: 3, attack: 2 },
  {id: 'Vermling-Scout_elite', name: 'Vermling-Scout_elite', type: 'enemy elite', src: 'assets/Vermling-Scout_token.jpg', maxHealth: 5, health: 5,  move: 4, attack: 3 },
  {id: 'poison-gas', type: 'trap', src: 'assets/images/overlay-tokens/traps/poison-gas-trap.png' },
  {id: 'treasure', type: 'loot', src: 'assets/images/overlay-tokens/treasures/treasure.png' },
  {id: 'coin-1', type: 'loot', src: 'assets/images/overlay-tokens/treasures/coin-1.png' },
];
