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
    level: 2,
    hitPoints: 1,
    experience: 76,
    gold: 70,
    perkTicks: 0,
    ownedAbilityCards: [],
    ownedItems: [1, 14, 3],
    scenarioAbilityCards: [],
    scenarioItems: [],
    attacModifierCards: [],
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
    level: 3,
    hitPoints: 1,
    experience: 131,
    gold: 34,
    perkTicks: 5,
    ownedAbilityCards: [],
    ownedItems: [6, 14, 125],
    scenarioAbilityCards: [],
    scenarioItems: [],
    attacModifierCards: [],
  },
  {
    name: 'Nightmare',
    character: Scoundrel,
    personalQuest: {
      id: 526,
      title: 'Vengeance',
      progress: 1,
      total: 4,
    },
    level: 2,
    hitPoints: 1,
    experience: 90,
    gold: 46,
    perkTicks: 7,
    ownedAbilityCards: [],
    ownedItems: [4, 13, 2, 5, 11, 8],
    scenarioAbilityCards: [],
    scenarioItems: [],
    attacModifierCards: [],
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
    level: 3,
    hitPoints: 1,
    experience: 101,
    gold: 53,
    perkTicks: 1,
    ownedAbilityCards: [],
    ownedItems: [11, 13, 1, 8],
    scenarioAbilityCards: [],
    scenarioItems: [],
    attacModifierCards: [],
  }
];
