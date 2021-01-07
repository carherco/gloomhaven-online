import { Tinkerer, Doomstalker, Spellweaver, Brute } from './charactersDef';
import { PLAYERS } from '../data/players';
export const Characters = [
  {
    owner: PLAYERS[0],
    name: 'Divayth Fyr',
    characterClass: Doomstalker,
    personalQuest: {
      id: 530,
      title: 'Augmented Abilities',
      progress: 1,
      total: 4,
    },
    level: 6,
    hitPoints: Doomstalker.hitPoints[5], // el nivel -1
    experience: 296,
    gold: 33,
    perkTicks: 12,
    ownedAbilityCards: [
      ...Doomstalker.levelXCards,
      ...Doomstalker.level1Cards,
      'expose',
      'press-the-attack',
      'flight-of-flame',
      'wild-command',
      'camouflage'
    ],
    ownedItems: [1, 13, 5, 12, 147],
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
    name: 'Farts like Thunder',
    characterClass: Tinkerer,
    personalQuest: {
      id: 513,
      title: 'Finding the Cure',
      progress: 0,
      total: 8,
    },
    level: 8,
    hitPoints: Tinkerer.hitPoints[7], // el nivel -1
    experience: 458,
    gold: 44,
    perkTicks: 18,
    ownedAbilityCards: [
      ...Tinkerer.levelXCards,
      ...Tinkerer.level1Cards,
      'stamina-booster',
      'crank-bow',
      'dangerous-contraption',
      'noxious-vials',
      'auto-turret',
      'curative-aerosol',
      'disintegration-beam'
    ],
    ownedItems: [6, 14, 125, 16, 20, 21, 13, 33, 15, 135, 34],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'tiPerk1-1',
      'tiPerk1-2',
      'tiPerk3',
      'tiPerk2',
      'tiPerk7-1',
      'tiPerk7-2',
      'tiPerk4',
      'tiPerk9-1',
      'tiPerk9-1',
      'tiPerk10',
      'tiPerk11',
      'tiPerk8-1',
      'tiPerk8-2',
    ],
  },
  {
    owner: PLAYERS[2],
    name: 'Medeas',
    characterClass: Spellweaver,
    personalQuest: {
      id: 531,
      title: 'Elemental Samples',
      progress: 3,
      total: 6,
    },
    level: 5,
    hitPoints: Spellweaver.hitPoints[4], // el nivel -1
    experience: 269,
    gold: 42,
    perkTicks: 7,
    ownedAbilityCards: [
      ...Spellweaver.levelXCards,
      ...Spellweaver.level1Cards,
      'flashing-burst',
      'cold-fire',
      'spirit-of-doom',
      'chromatic-explosion'
    ],
    ownedItems: [5, 31, 34, 27, 12, 1],
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
      progress: 0,
      total: 12,
    },
    level: 4,
    hitPoints: Brute.hitPoints[3], // el nivel -1
    experience: 199,
    gold: 23,
    perkTicks: 1,
    ownedAbilityCards: [
      ...Brute.levelXCards,
      ...Brute.level1Cards
    ],
    ownedItems: [7, 34, 74],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [

    ],
  },
];
