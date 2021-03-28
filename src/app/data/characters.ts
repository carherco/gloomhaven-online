import { Tinkerer, Doomstalker, Spellweaver, Brute, Sunkeeper, Elementalist } from './charactersDef';
import { PLAYERS } from '../data/players';
export const Characters = [
  {
    owner: PLAYERS[0],
    name: 'Divayth Fyr',
    characterClass: Doomstalker,
    personalQuest: {
      id: 530,
      title: 'Augmented Abilities',
      progress: 2,
      total: 4,
    },
    level: 8,
    hitPoints: Doomstalker.hitPoints[7], // el nivel -1
    experience: 439,
    gold: 60,
    perkTicks: 18,
    ownedAbilityCards: [
      ...Doomstalker.levelXCards,
      ...Doomstalker.level1Cards,
      'expose',
      'press-the-attack',
      'flight-of-flame',
      'wild-command',
      'camouflage'
    ],
    ownedItems: [1, 13, 5, 12, 108],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'dsPerk1-1',
      'dsPerk1-2',
      'dsPerk2-1',
      'dsPerk2-2',
      'dsPerk2-3',
      'dsPerk9-1',
      'dsPerk9-2',
      'dsPerk10',
      'dsPerk2-1',
    ],
  },
  {
    owner: PLAYERS[1],
    name: 'Lux Lucitana',
    characterClass: Sunkeeper,
    personalQuest: {
      id: 533,
      title: 'The Perfect Poison',
      progress: 0,
      total: 9,
    },
    level: 5,
    hitPoints: Sunkeeper.hitPoints[8], // el nivel -1
    experience: 232,
    gold: 18,
    perkTicks: 0,
    ownedAbilityCards: [
      ...Sunkeeper.levelXCards,
      ...Sunkeeper.level1Cards,
      ...Sunkeeper.level2Cards,
      ...Sunkeeper.level3Cards,
      ...Sunkeeper.level4Cards,
      ...Sunkeeper.level5Cards,
      ...Sunkeeper.level6Cards,
      ...Sunkeeper.level7Cards,
      ...Sunkeeper.level8Cards,
      ...Sunkeeper.level9Cards
    ],
    ownedItems: [74, 38, 2, 20],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [

    ],
  },
  {
    owner: PLAYERS[2],
    name: '?????',
    characterClass: Elementalist,
    personalQuest: {
      id: 525,
      title: 'Piety in All Things',
      progress: 0,
      total: 12,
    },
    level: 5,
    hitPoints: Elementalist.hitPoints[4], // el nivel -1
    experience: 231,
    gold: 26,
    perkTicks: 1,
    ownedAbilityCards: [
      ...Elementalist.levelXCards,
      ...Elementalist.level1Cards,
      'flashing-burst',
      'cold-fire',
      'spirit-of-doom',
      'chromatic-explosion',
      'frozen-night'
    ],
    ownedItems: [2, 5, 6, 34],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'swPerk2-1',
      'swPerk2-2',
      'swPerk3-1', // No funciona bien este perk, no se marca en el html
      'swPerk5',
      'swPerk8-1',
      'swPerk9-1',
      'swPerk11',
    ],
  },
  {
    owner: PLAYERS[3],
    name: 'Einar',
    characterClass: Brute,
    personalQuest: {
      id: 527,
      title: 'Zealot of the Blood God',
      progress: 4,
      total: 12,
    },
    level: 7,
    hitPoints: Brute.hitPoints[6], // el nivel -1
    experience: 353,
    gold: 66,
    perkTicks: 7,
    ownedAbilityCards: [
      ...Brute.levelXCards,
      ...Brute.level1Cards
    ],
    ownedItems: [7, 74, 36, 34, 27, 20],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [

    ],
  },
];
