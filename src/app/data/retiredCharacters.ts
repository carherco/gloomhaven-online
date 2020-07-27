import { Cragheart, Scoundrel } from './charactersDef';

export const RetiredCharacters = [
  {
    name: 'Lorkham',
    owner: 'player0',
    character: Cragheart,
    personalQuest: {
      id: 528,
      title: 'Goliath Toppler',
      progress: 4,
      total: 4,
    },
    level: 3,
    hitPoints: 14,
    experience: 149,
    gold: 27,
    perkTicks: 2,
    ownedAbilityCards: [ ...Cragheart.levelXCards, ...Cragheart.level1Cards, 'sentient-growth', 'blunt-force' ],
    ownedItems: [1, 14, 3, 13, 130, 81],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: ['chPerk2-1', 'chPerk10'],
  },
  {
    name: 'Nightmare',
    character: Scoundrel,
    personalQuest: {
      id: 526,
      title: 'Vengeance',
      progress: 4,
      total: 4,
    },
    level: 5,
    hitPoints: Scoundrel.hitPoints[4], // el nivel -1
    experience: 215,
    gold: 32,
    perkTicks: 14,
    ownedAbilityCards: [],
    ownedItems: [4, 13, 2, 5, 11, 8, 17, 12, 44],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [],
  },
];
