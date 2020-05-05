import { Token } from '../model/token';

interface TokenDef {
  id: string;
  type: string;
  name?: string;
  src?: string;
};

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

const Scenario18Tokens: TokenDef[] = [
  {id: 'Ooze', type: 'enemy'},
  {id: 'Giant-Viper', type: 'enemy'},
  {id: 'Vermling-Scout', type: 'enemy'},
  {id: 'poison-gas-trap', type: 'trap'},
  {id: 'treasure', type: 'loot'},
  {id: 'coin-1', type: 'loot'},
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

const Scenario16Tokens: TokenDef[] = [
  {id: 'Earth-Demon', type: 'enemy' },
  {id: 'Wind-Demon', type: 'enemy' },
  {id: 'Inox-Guard', type: 'enemy' },
  {id: 'Inox-Archer', type: 'enemy' },
  {id: 'spike-pit', type: 'trap' },
  {id: 'boulder', type: 'obstacle' },
  {id: 'treasure', type: 'loot' },
  {id: 'coin-1', type: 'loot' },
];

const Scenario16 = {
  id: 16,
  name: 'Mountain Pass',
  goal: 'Kill all enemies',
  matrix: Scenario16Matrix,
  tokens: Scenario16Tokens
};

const Scenario23Matrix = [
  ["-","-","-","-","-","-","-","-","-","-","-","-","-","0","0","0","0"],
    ["-","-","-","-","-","-","-","-","-","-","-","-","0","0","0","0","0"],
  ["-","0","0","0","-","-","-","-","-","-","-","-","0","0","0","0","0","0"],
    ["0","0","0","0","-","-","-","-","-","-","-","-","0","0","0","0","0"],
  ["0","0","0","0","0","-","-","-","-","-","-","-","0","0","0","0","0","0"],
    ["0","0","0","0","-","-","-","-","-","-","-","-","0","0","0","0","0"],
  ["-","0","0","0","D","0","0","-","-","-","0","0","D","0","0","0","0"],
    ["-","-","-","-","0","0","0","-","-","0","0","0"],
  ["-","-","-","-","-","0","0","0","-","0","0","0"],
    ["-","-","-","-","-","0","0","0","0","0","0"],
  ["-","-","-","-","-","-","0","0","0","0","0"],
    ["-","-","-","-","-","-","0","0","0","0"],
  ["-","-","-","-","-","-","-","-","D"],
    ["-","-","-","-","-","0","0","0","0","0","0"],
  ["-","-","-","-","-","-","0","0","0","0","0"],
    ["-","-","-","-","-","0","0","0","0","0","0"],
  ["-","-","-","-","-","-","0","0","0","0","0"],
    ["-","-","-","-","-","0","0","0","0","0","0"]
];

const Scenario23Tokens: TokenDef[] = [
  {id: 'Stone-Golem', type: 'enemy' },
  {id: 'Ancient-Artillery', type: 'enemy' },
  {id: 'Living-Bones', type: 'enemy' },
  {id: 'Living-Spirit', type: 'enemy' },
  {id: 'damage-trap', type: 'trap' },
  {id: 'boulder', type: 'obstacle' },
  {id: 'treasure', type: 'loot' },
  {id: 'coin-1', type: 'loot' },
];

const Scenario23 = {
  id: 23,
  name: 'Deep Ruins',
  goal: 'Occupy all pressure plates simultaneously',
  matrix: Scenario23Matrix,
  tokens: Scenario23Tokens
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

const Scenario24Tokens: TokenDef[] = [
  {id: 'Rending-Drake', type: 'enemy' },
  {id: 'Ooze', type: 'enemy' },
  {id: 'Living-Spirit', type: 'enemy' },
  {id: 'spike-pit', type: 'trap', src: 'assets/images/overlay-tokens/traps/spike-pit-trap.png' },
  {id: 'rock-column', type: 'obstacle', src: 'assets/images/overlay-tokens/obstacles/rock-column.png' },
  {id: 'nest', type: 'obstacle', src: 'assets/images/overlay-tokens/obstacles/nest.png' },
  {id: 'treasure', type: 'loot' },
  {id: 'coin-1', type: 'loot' },
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

const Scenario25Tokens: TokenDef[] = [
  {id: 'Rending-Drake', name: 'Rending-Drake', type: 'enemy' },
  {id: 'Hound', name: 'Hound', type: 'enemy' },
  {id: 'Spitting-Drake', name: 'Spitting-Drake', type: 'enemy' },
  {id: 'spike-pit', type: 'trap', src: 'assets/images/overlay-tokens/traps/spike-pit-trap.png' },
  {id: 'boulder', type: 'obstacle', src: 'assets/images/overlay-tokens/obstacles/boulder-1.png' },
  {id: 'treasure', type: 'loot' },
  {id: 'coin-1', type: 'loot' },
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
  23: Scenario23,
  24: Scenario24,
  25: Scenario25,
};
