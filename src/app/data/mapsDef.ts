import { Token } from '../model/token';

const Scenario18Matrix = [
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
    ['0', '0', 'W', '0', '0', '0', 'D', '0', '0', '0', '0', '0', '0'],
  ['0', '0', 'W', '0', '0', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['-', '-', 'W', '0', '-', '-', '-', '-', '-', '0', '0', '-', '-'],
  ['-', '-', 'W', '0', '0', '-', '-', '-', '-', '0', '0', '0', '-', '-'],
    ['-', '-', 'W', '0', '-', '-', '-', '-', '-', '0', '0', '-', '-'],
  ['-', '-', 'W', '0', '0', '-', '-', '-', '-', '0', '0', '0', '-', '-'],
    ['-', '-', '0', '0', '-', '-', '-', '-', '-', '0', '0', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'D', '-', '-', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', 'W', '0', '0', '0', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '0', 'W', 'W', '0', '0', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '0', '0', 'W', 'W', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '0', 'W', 'W', 'W', '0', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '0', '0', '0', 'W', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '-'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '-'],
];

const Scenario18Tokens: Token[] = [
  {id: 'Ooze', name: 'Ooze', type: 'enemy', src: 'assets/Ooze_token.jpg', maxHealth: 7, health: 7, shield: 1, move: 1, attack: 2, range: 3, status: {} },
  {id: 'Ooze_elite', name: 'Ooze', type: 'enemy elite', src: 'assets/Ooze_token.jpg', maxHealth: 11, health: 11, shield: 1, move: 1, attack: 3, range: 3, status: {} },
  {id: 'Giant-Viper', name: 'Giant-Viper', type: 'enemy', src: 'assets/Giant-Viper_token.jpg', maxHealth: 4, health: 4, move: 3, attack: 1, status: {} },
  {id: 'Giant-Viper_elite', name: 'Giant-Viper', type: 'enemy elite', src: 'assets/Giant-Viper_token.jpg', maxHealth: 7, health: 7, move: 3, attack: 2, status: {} },
  {id: 'Vermling-Scout', name: 'Vermling-Scout', type: 'enemy', src: 'assets/Vermling-Scout_token.jpg', maxHealth: 3, health: 3, move: 3, attack: 2, status: {} },
  {id: 'Vermling-Scout_elite', name: 'Vermling-Scout_elite', type: 'enemy elite', src: 'assets/Vermling-Scout_token.jpg', maxHealth: 5, health: 5,  move: 4, attack: 3, status: {} },
  {id: 'poison-gas', type: 'trap', src: 'assets/images/overlay-tokens/traps/poison-gas-trap.png' },
  {id: 'treasure', type: 'loot', src: 'assets/images/overlay-tokens/treasures/treasure.png' },
  {id: 'coin-1', type: 'loot', src: 'assets/images/overlay-tokens/treasures/coin-1.png' },
];

const Scenario18 = {
  id: 18,
  name: 'Abandoned Sewers',
  goal: 'Kill all enemies',
  matrix: Scenario18Matrix,
  tokens: Scenario18Tokens
};

const Scenario16Matrix = [
  ['1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
  ['1', '1', '1', '1', '1', '1', '-', '-', '-', '-', '-', '-', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '-', '-', '1', '1', '1', '1', '1', '1', '1', '1'],
  ['1', '1', '1', '1', '1', '1', '-', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
    ['-', '-', 'D', '-', '-', '-', '-', 'D', '-', '-', '-', '-', '1', '1', '1'],
  ['-', '-', '1', '1', '-', '-', '-', '1', '1'],
    ['-', '1', '1', '1', '-', '-', '1', '1', '1'],
  ['-', '-', '1', '1', '1', '-', '1', '1', '1'],
    ['-', '-', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '1', '1', '1', '1', '1'],
    ['-', '-', '-', '1', '1', '1', '1'],
];

const Scenario16Tokens: Token[] = [
  {id: 'Earth-Demon', name: 'Earth-Demon', type: 'enemy', src: 'assets/Earth-Demon_token.jpg', maxHealth: 12, health: 12, move: 1, attack: 3, status: {} },
  {id: 'Earth-Demon_elite', name: 'Earth-Demon_elite', type: 'enemy elite', src: 'assets/Earth-Demon_token.jpg', maxHealth: 18, health: 18, move: 2, attack: 4, status: {} },
  {id: 'Wind-Demon', name: 'Wind-Demon', type: 'enemy', src: 'assets/Wind-Demon_token.jpg', maxHealth: 4, health: 4, shield: 2, move: 4, attack: 2, range: 3, status: {} },
  {id: 'Wind-Demon_elite', name: 'Wind-Demon_elite', type: 'enemy elite', src: 'assets/Wind-Demon_token.jpg', maxHealth: 7, health: 7, shield: 2, move: 5, attack: 3, range: 4, status: {} },
  {id: 'Inox-Guard', name: 'Inox-Guard', type: 'enemy', src: 'assets/Inox-Guard_token.jpg', maxHealth: 9, health: 9, move: 2, attack: 3, status: {} },
  {id: 'Inox-Guard_elite', name: 'Inox-Guard_elite', type: 'enemy elite', src: 'assets/Inox-Guard_token.jpg', maxHealth: 12, health: 12,  move: 2, attack: 4, retaliate: 2, status: {} },
  {id: 'Inox-Archer', name: 'Inox-Archer', type: 'enemy', src: 'assets/Inox-Archer_token.jpg', maxHealth: 8, health: 8, move: 2, attack: 2, range: 3, status: {} },
  {id: 'Inox-Archer_elite', name: 'Inox-Archer_elite', type: 'enemy elite', src: 'assets/Inox-Archer_token.jpg', maxHealth: 11, health: 11,  move: 2, attack: 3, range: 4, status: {} },
  {id: 'spike-pit', type: 'trap', src: 'assets/images/overlay-tokens/traps/spike-pit-trap.png' },
  {id: 'boulder', type: 'obstacle', src: 'assets/images/overlay-tokens/obstacles/boulder-1.png' },
  {id: 'treasure', type: 'loot', src: 'assets/images/overlay-tokens/treasures/treasure.png' },
  {id: 'coin-1', type: 'loot', src: 'assets/images/overlay-tokens/treasures/coin-1.png' },
];

const Scenario16 = {
  id: 16,
  name: 'Mountain Pass',
  goal: 'Kill all enemies',
  matrix: Scenario16Matrix,
  tokens: Scenario16Tokens
};

const Scenario24Matrix = [
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '-', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1', '1', 'D', '0', '0', '0'],
  ['1', '1', '1', '1', '1', '-', '-', '-', '-', '-', '-', '1', '1', '1', '-', '0', '0', '0', '0'],
    ['1', '1', '1', '1', '-', '-', '-', '-', '-', '-', '-', 'D', '-', '-', '0', '0', '0', '0'],
  ['1', '1', '1', '1', '1', '-', '-', '-', '-', '-', '1', '1', '1', '1', '1', 'D', '0', '0'],
    ['1', '1', '1', '1', 'D', '0', '0', '0', '0', 'D', '1', '1', '1', '1', '1', '1'],
  ['1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '1', '1', '1', '1', '1', '1', '1'],
    ['1', '1', '1', '1', '-', '-', 'D', '-', '-', '-', 'D', 'D', '-', '-', '1', '1', '1'],
  ['1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '-', '-', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0', '0', '-', '-', '-', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0', '0', '0', '-', '-', '-', '1'],
];

const Scenario24Tokens: Token[] = [
  {id: 'Rending-Drake', name: 'Rending-Drake', type: 'enemy', src: 'assets/Rending-Drake_token.jpg', maxHealth: 7, health: 7, move: 4, attack: 3, status: {} },
  {id: 'Rending-Drake_elite', name: 'Rending-Drake_elite', type: 'enemy elite', src: 'assets/Rending-Drake_token.jpg', maxHealth: 9, health: 9, move: 5, attack: 5, status: {} },
  {id: 'Ooze', name: 'Ooze', type: 'enemy', src: 'assets/Ooze_token.jpg', maxHealth: 7, health: 7, shield: 1, move: 1, attack: 2, range: 3, status: {} },
  {id: 'Ooze_elite', name: 'Ooze', type: 'enemy elite', src: 'assets/Ooze_token.jpg', maxHealth: 11, health: 11, shield: 1, move: 1, attack: 3, range: 3, status: {} },
  {id: 'Living-Spirit', name: 'Living-Spirit', type: 'enemy', src: 'assets/Living-Spirit_token.jpg', maxHealth: 2, health: 2, shield: 2, move: 3, attack: 2, range: 3, status: {} },
  {id: 'Living-Spirit_elite', name: 'Living-Spirit', type: 'enemy elite', src: 'assets/Living-Spirit_token.jpg', maxHealth: 3, health: 3, shield: 3, move: 4, attack: 3, range: 4, status: {} },
  {id: 'spike-pit', type: 'trap', src: 'assets/images/overlay-tokens/traps/spike-pit-trap.png' },
  {id: 'rock-column', type: 'obstacle', src: 'assets/images/overlay-tokens/obstacles/rock-column.png' },
  {id: 'nest', type: 'obstacle', src: 'assets/images/overlay-tokens/obstacles/nest.png' },
  {id: 'treasure', type: 'loot', src: 'assets/images/overlay-tokens/treasures/treasure.png' },
  {id: 'coin-1', type: 'loot', src: 'assets/images/overlay-tokens/treasures/coin-1.png' },
];

const Scenario24 = {
  id: 24,
  name: 'Echo Chamber',
  goal: 'Open all doors (fog tiles)',
  matrix: Scenario24Matrix,
  tokens: Scenario24Tokens
};

const Scenario25Matrix = [
  ['-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', 'D'],
  ['-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '1', '1', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', 'D'],
  ['1', '1', '1', '1', '1', '1', '1', '1'],
  ['-', '1', '1', '1', '1', '1', '1', '1'],
  ['1', '1', '1', '1', '1', '1', '1', '1'],
];

const Scenario25Tokens: Token[] = [
  {id: 'Rending-Drake', name: 'Rending-Drake', type: 'enemy', src: 'assets/Rending-Drake_token.jpg', maxHealth: 7, health: 7, move: 4, attack: 3, status: {} },
  {id: 'Rending-Drake_elite', name: 'Rending-Drake_elite', type: 'enemy elite', src: 'assets/Rending-Drake_token.jpg', maxHealth: 9, health: 9, move: 5, attack: 5, status: {} },
  {id: 'Hound', name: 'Hound', type: 'enemy', src: 'assets/Hound_token.jpg', maxHealth: 6, health: 6, move: 4, attack: 2, status: {} },
  {id: 'Hound_Elite', name: 'Hound_elite', type: 'enemy elite', src: 'assets/Hound_token.jpg', maxHealth: 7, health: 7, move: 5, attack: 3, status: {} },
  {id: 'Spitting-Drake', name: 'Spitting-Drake', type: 'enemy', src: 'assets/Spitting-Drake_token.jpg', maxHealth: 8, health: 8, move: 3, attack: 3, range: 3, status: {} },
  {id: 'Spitting-Drake_elite', name: 'Spitting-Drake_elite', type: 'enemy elite', src: 'assets/Spitting-Drake_token.jpg', maxHealth: 10, health: 10, move: 3, attack: 5, range: 4, status: {} },
  {id: 'spike-pit', type: 'trap', src: 'assets/images/overlay-tokens/traps/spike-pit-trap.png' },
  {id: 'boulder', type: 'obstacle', src: 'assets/images/overlay-tokens/obstacles/boulder-1.png' },
  {id: 'treasure', type: 'loot', src: 'assets/images/overlay-tokens/treasures/treasure.png' },
  {id: 'coin-1', type: 'loot', src: 'assets/images/overlay-tokens/treasures/coin-1.png' },
];

const Scenario25 = {
  id: 25,
  name: 'Icecrag Ascent',
  goal: 'All characters must escape through the exit',
  matrix: Scenario25Matrix,
  tokens: Scenario25Tokens
};


export const Scenarios = {
  16: Scenario16,
  18: Scenario18,
  24: Scenario24,
  25: Scenario25,
};
