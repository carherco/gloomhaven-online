import { Cragheart, Tinkerer, Scoundrel, Mindthief, Doomstalker } from './charactersDef';
export const Players = [
  {
    name: 'Divayth Fyr',
    character: Doomstalker,
    personalQuest: {
      id: 530,
      title: 'Augmented Abilities',
      progress: 0,
      total: 4,
    },
    level: 3,
    hitPoints: 11,
    experience: 95,
    gold: 28,
    perkTicks: 0,
    ownedAbilityCards: [ ...Doomstalker.levelXCards, ...Doomstalker.level1Cards, 'expose', 'press-the-attack' ],
    ownedItems: [1, 13],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'dsPerk1-1',
      'dsPerk1-2',
      'dsPerk9-1',
    ],
  },
  {
    name: 'Farts like Thunder',
    character: Tinkerer,
    personalQuest: {
      id: 513,
      title: 'Finding the Cure',
      progress: 0,
      total: 8,
    },
    level: 5,
    hitPoints: 12,
    experience: 226,
    gold: 22,
    perkTicks: 8,
    ownedAbilityCards: [ ...Tinkerer.levelXCards, ...Tinkerer.level1Cards, 'stamina-booster', 'crank-bow', 'dangerous-contraption'],
    ownedItems: [6, 14, 125, 16, 20, 21, 13],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'tiPerk1-1',
      'tiPerk1-2',
      'tiPerk3',
      'tiPerk2',
      'tiPerk7-1'
    ],
  },
  {
    name: 'Nightmare',
    character: Scoundrel,
    personalQuest: {
      id: 526,
      title: 'Vengeance',
      progress: 2,
      total: 4,
    },
    level: 4,
    hitPoints: 11,
    experience: 152,
    gold: 26,
    perkTicks: 11,
    ownedAbilityCards: [],
    ownedItems: [4, 13, 2, 5, 11, 8, 17, 12],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [],
  },
  {
    name: 'Psycho',
    character: Mindthief,
    personalQuest: {
      id: 521,
      title: 'Take Back the Trees',
      progress: 1,
      total: 3,
    },
    level: 4,
    hitPoints: 9,
    experience: 179,
    gold: 10,
    perkTicks: 4,
    ownedAbilityCards: [ ...Mindthief.levelXCards, ...Mindthief.level1Cards, 'hostile-takeover', 'silent-scream', 'cranium-overload' ],
    ownedItems: [11, 13, 1, 8, 16, 12, 20, 21],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'mtPerk8',
      'mtPerk5-1',
      'mtPerk1-1',
      'mtPerk1-2',
    ],
  },
];
