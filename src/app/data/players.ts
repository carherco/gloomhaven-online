import { Cragheart, Tinkerer, Scoundrel, Mindthief } from './charactersDef';
export const Players = [
  {
    name: 'Lorkham',
    character: Cragheart,
    personalQuest: {
      id: 528,
      title: 'Goliath Toppler',
      progress: 3,
      total: 4,
    },
    level: 3,
    hitPoints: 14,
    experience: 127,
    gold: 37,
    perkTicks: 1,
    ownedAbilityCards: [],
    ownedItems: [1, 14, 3, 13, 130, 81],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [],
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
    level: 4,
    hitPoints: 12,
    experience: 203,
    gold: 32,
    perkTicks: 7,
    ownedAbilityCards: [],
    ownedItems: [6, 14, 125, 16, 20, 21, 13],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [],
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
    level: 3,
    hitPoints: 11,
    experience: 130,
    gold: 20,
    perkTicks: 9,
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
    experience: 151,
    gold: 17,
    perkTicks: 3,
    ownedAbilityCards: [ ...Mindthief.levelXCards, ...Mindthief.level1Cards, 'hostile-takeover', 'silent-scream', 'cranium-overload' ],
    ownedItems: [11, 13, 1, 8, 16, 12, 20, 21],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'chPerk8',
      'chPerk5-1',
      'chPerk1-1',
      'chPerk1-2',
    ],
  }
];
