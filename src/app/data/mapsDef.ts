import { Token } from '../model/token';

export interface TokenDef {
  id: string;
  type: string;
  name?: string;
  src?: string;
}

type Scenario = {
  id: number,
  name: string,
  requirements: string[],
  goal: string,
  matrix: string[][],
  tokens: TokenDef[]
}

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

const Scenario18: Scenario = {
  id: 18,
  name: 'Abandoned Sewers',
  requirements: [],
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

const Scenario16: Scenario = {
  id: 16,
  name: 'Mountain Pass',
  requirements: [],
  goal: 'Kill all enemies',
  matrix: Scenario16Matrix,
  tokens: Scenario16Tokens
};

const Scenario23Matrix = [
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0'],
    ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0'],
  ['-', '0', '0', '0', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0'],
  ['0', '0', '0', '0', '0', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0'],
  ['-', '0', '0', '0', 'D', '0', '0', '-', '-', '-', '0', '0', 'D', '0', '0', '0', '0'],
    ['-', '-', '-', '-', '0', '0', '0', '-', '-', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '0', '0', '0', '-', '0', '0', '0'],
    ['-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0'],
    ['-', '-', '-', '-', '-', '-', '0', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', 'D'],
    ['-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0'],
    ['-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0'],
    ['-', '-', '-', '-', '-', '0', '0', '0', '0', '0', '0']
];

const Scenario23Tokens: TokenDef[] = [
  // {id: 'Stone-Golem', type: 'enemy' },
  // {id: 'Ancient-Artillery', type: 'enemy' },
  // {id: 'Living-Bones', type: 'enemy' },
  // {id: 'Living-Spirit', type: 'enemy' },
  {id: 'damage-trap', type: 'trap' },
  {id: 'boulder', type: 'obstacle' },
  // {id: 'treasure', type: 'loot' },
  // {id: 'coin-1', type: 'loot' },
];

const Scenario23: Scenario = {
  id: 23,
  name: 'Deep Ruins',
  requirements: [],
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

const Scenario24: Scenario = {
  id: 24,
  name: 'Echo Chamber',
  requirements: [],
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

const Scenario25: Scenario = {
  id: 25,
  name: 'Icecrag Ascent',
  requirements: [],
  goal: 'All characters must escape through the exit',
  matrix: Scenario25Matrix,
  tokens: Scenario25Tokens
};

const Scenario57Matrix = [
  ['-', '0', '0', '0'],
    ['0', '0', '0', '0'],
  ['-', '0', '0', '0'],
    ['-', '0', '0', '-', '1', '1', '1', '1', '1', '1'],
  ['-', '-', 'D', '-', '-', '1', '1', '1', '1', '1'],
    ['-', '0', '0', '0', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '0', '0', 'D', '1', '1', '1', '1', '1'],
    ['-', '0', '0', '0', '1', '1', '1', '1', '1', '1'],
  ['-', '-', '0', '0'],
    ['-', '0', '0', '0'],
  ['-', '-', '0', '0'],
    ['-', '0', '0', '0'],
  ['-', '-', '0', '0', 'D', '1', '1', '1', '1'],
    ['-', '0', '0', '0', '1', '1', '1', '1', '1'],
  ['-', '-', 'D'],
    ['-', '0', '0'],
  ['-', '0', '0', '0'],
    ['0', '0', '0', '0'],
  ['-', '0', '0', '0'],
];

const Scenario57Tokens: TokenDef[] = [
  // {id: 'City-Guard', type: 'enemy' },
  // {id: 'City-Archer', type: 'enemy' },
  // {id: 'Hound', type: 'enemy' },
  // {id: 'damage-trap', type: 'trap'},
  // {id: 'boulder', type: 'obstacle' },
  // {id: 'table', type: 'obstacle' },
  {id: 'treasure', type: 'loot' },
  {id: 'coin-1', type: 'loot' },
];

const Scenario57: Scenario = {
  id: 57,
  name: 'Investigation',
  requirements: ['"Vengeance" personal quest'],
  goal: 'Kill the Infiltrator',
  matrix: Scenario57Matrix,
  tokens: Scenario57Tokens
};

const Scenario81Matrix = [
  ['-', '-', '-', '-', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0'],
    ['-', '-', '1', '1', '1', '1', '1', '1', 'D', '0', '0', '0', '0', '0', '0'],
  ['-', '-', '1', '1', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0'],
    ['-', '1', '1', '1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0'],
  ['-', '1', '1', '1', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0'],
    ['1', '1', '1', '-', '0', '0', '0', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0'],
  ['-', '-', '1', 'D', '0', '0', '0', '0', '-', '-', '-', '-', '-', '-', '-', '0'],
    ['-', '-', '-', '0', '0', '0', '0', '0'],
  ['-', '-', '-', '-', '0', '0', '0', '0'],
    ['-', '-', '-', '-', '0', '0', '0']
];

const Scenario81Tokens: TokenDef[] = [
  {id: 'Night-Demon', type: 'enemy' },
  {id: 'Sun-Demon', type: 'enemy' },
  {id: 'Stone-Golem', type: 'enemy' },
  {id: 'Ancient-Artillery', type: 'enemy' },
  {id: 'The-Colorless', type: 'boss' },
  {id: 'poison-gas-trap', type: 'trap'},
  {id: 'altar', type: 'obstacle' },
  {id: 'stone-pillar', type: 'obstacle' },
  {id: 'treasure', type: 'loot' },
  {id: 'coin-1', type: 'loot' },
];

const Scenario81: Scenario = {
  id: 81,
  name: 'Temple of the Eclipse',
  requirements: [],
  goal: 'Kill the Colorless',
  matrix: Scenario81Matrix,
  tokens: Scenario81Tokens
};

export const Scenarios = {
  16: Scenario16,
  18: Scenario18,
  23: Scenario23,
  24: Scenario24,
  25: Scenario25,
  57: Scenario57,
  81: Scenario81,
};


const HallwayHovelCabinMatrix = [
  ['0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1'],
  ['0', '0', '0', '0', '0', '0', '0', 'D', '1', '1', '1'],
  ['0', '0', '0', '0', '0', '0', '0', '0', '1', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '1', '1'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1', '-', '-', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1', '1', '-', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '1', 'D', '0', '0', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '1', '1', '-', '0', '0', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0', '0', '0'],
  ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '0']
];

const HallwayHovelCabinTokens = [
  {id: 'Night-Demon', type: 'enemy' },
  {id: 'Sun-Demon', type: 'enemy' },
  {id: 'Stone-Golem', type: 'enemy' },
  {id: 'Ancient-Artillery', type: 'enemy' },
  {id: 'The-Colorless', type: 'boss' },
  {id: 'poison-gas-trap', type: 'trap'},
  {id: 'altar', type: 'obstacle' },
  {id: 'stone-pillar', type: 'obstacle' },
  {id: 'treasure', type: 'loot' },
  {id: 'coin-1', type: 'loot' },
];

const RandomScenarioHallwayHovelCabin = {
  id: 1,
  name: 'Random1',
  goal: 'Kill all enemies',
  matrix: HallwayHovelCabinMatrix,
  tokens: HallwayHovelCabinTokens
};

export const RandomScenarios = {
  1: RandomScenarioHallwayHovelCabin
};
