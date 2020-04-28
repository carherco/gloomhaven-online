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
    experience: 101,
    gold: 85,
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
    level: 4,
    hitPoints: 12,
    experience: 164,
    gold: 47,
    perkTicks: 6,
    ownedAbilityCards: [],
    ownedItems: [6, 14, 125, 16, 20, 21],
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
    level: 3,
    hitPoints: 11,
    experience: 103,
    gold: 11,
    perkTicks: 8,
    ownedAbilityCards: [],
    ownedItems: [4, 13, 2, 5, 11, 8, 17],
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
    hitPoints: 8,
    experience: 122,
    gold: 28,
    perkTicks: 2,
    ownedAbilityCards: [],
    ownedItems: [11, 13, 1, 8, 16, 12, 20],
    scenarioAbilityCards: [],
    scenarioItems: [],
    attacModifierCards: [],
  }
];
