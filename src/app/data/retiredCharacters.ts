import { Cragheart } from './charactersDef';

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
];
