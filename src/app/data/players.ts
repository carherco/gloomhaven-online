import { Tinkerer, Scoundrel, Mindthief, Doomstalker, Spellweaver } from './charactersDef';
export const Players = [
  {
    name: 'Divayth Fyr',
    character: Doomstalker,
    personalQuest: {
      id: 530,
      title: 'Augmented Abilities',
      progress: 1,
      total: 4,
    },
    level: 5,
    hitPoints: Doomstalker.hitPoints[4], // el nivel -1
    experience: 263,
    gold: 17,
    perkTicks: 11,
    ownedAbilityCards: [
      ...Doomstalker.levelXCards,
      ...Doomstalker.level1Cards,
      'expose',
      'press-the-attack',
      'flight-of-flame',
      'wild-command'
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
    name: 'Farts like Thunder',
    character: Tinkerer,
    personalQuest: {
      id: 513,
      title: 'Finding the Cure',
      progress: 0,
      total: 8,
    },
    level: 8,
    hitPoints: Tinkerer.hitPoints[7], // el nivel -1
    experience: 421,
    gold: 34,
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
      'hars-stimulants'
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
    name: 'Medeas',
    character: Spellweaver,
    personalQuest: {
      id: 531,
      title: 'Elemental Samples',
      progress: 2,
      total: 6,
    },
    level: 4,
    hitPoints: Spellweaver.hitPoints[3], // el nivel -1
    experience: 238,
    gold: 29,
    perkTicks: 3,
    ownedAbilityCards: [
      ...Spellweaver.levelXCards,
      ...Spellweaver.level1Cards,
      'flashing-burst',
      'cold-fire',
      'spirit-of-doom',
    ],
    ownedItems: [5, 31, 34, 27, 12],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'swPerk2-1',
      'swPerk2-2',
      'swPerk5',
      'swPerk8-1',
      'swPerk9-1',
    ],
  },
  {
    name: 'Psycho',
    character: Mindthief,
    personalQuest: {
      id: 521,
      title: 'Take Back the Trees',
      progress: 3,
      total: 3,
    },
    level: 7,
    hitPoints: Mindthief.hitPoints[6], // el nivel -1
    experience: 379,
    gold: 20,
    perkTicks: 6,
    ownedAbilityCards: [
      ...Mindthief.levelXCards,
      ...Mindthief.level1Cards,
      'hostile-takeover',
      'silent-scream',
      'cranium-overload',
      'mass-hysteria',
      'dark-frenzy',
      'psychic-projection'
    ],
    ownedItems: [11, 13, 1, 8, 16, 12, 20, 21, 139, 27],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'mtPerk8',
      'mtPerk5-1',
      'mtPerk1-1',
      'mtPerk1-2',
      'mtPerk11',
      'mtPerk12',
      'mtPerk4',
      'mtPerk10',
    ],
  },
];
