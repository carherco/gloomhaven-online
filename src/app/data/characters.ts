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
    experience: 476,
    gold: 112,
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
    ownedItems: [1, 13, 5, 12, 33, 108],
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
      progress: 3,
      total: 9,
    },
    level: 6,
    hitPoints: Sunkeeper.hitPoints[5], // el nivel -1
    experience: 275,
    gold: 66,
    perkTicks: 2,
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
    ownedItems: [74, 38, 2, 20, 13],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [

    ],
  },
  {
    owner: PLAYERS[2],
    name: 'El Alquimista',
    characterClass: Elementalist,
    personalQuest: {
      id: 525,
      title: 'Piety in All Things',
      progress: 2,
      total: 12,
    },
    level: 5,
    hitPoints: Elementalist.hitPoints[4], // el nivel -1
    experience: 268,
    gold: 38,
    perkTicks: 4,
    ownedAbilityCards: [
      ...Elementalist.levelXCards,
      ...Elementalist.level1Cards,
      'crystallizing-blast',
      'chain-lightning',
      'primal-duality',
      '?????',
      ...Elementalist.level2Cards,
      ...Elementalist.level3Cards,
      ...Elementalist.level4Cards,
      ...Elementalist.level5Cards,
      ...Elementalist.level6Cards,
      ...Elementalist.level7Cards,
      ...Elementalist.level8Cards,
      ...Elementalist.level9Cards,
    ],
    ownedItems: [2, 5, 6, 34, 14],
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
      progress: 6,
      total: 12,
    },
    level: 7,
    hitPoints: Brute.hitPoints[6], // el nivel -1
    experience: 399,
    gold: 39,
    perkTicks: 8,
    ownedAbilityCards: [
      ...Brute.levelXCards,
      ...Brute.level1Cards
    ],
    ownedItems: [7, 74, 36, 34, 27, 20, 18, 28, 25],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [

    ],
  },
];
