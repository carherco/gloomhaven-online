import { Tinkerer, Scoundrel, Mindthief, Doomstalker, Spellweaver } from './charactersDef';
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
    level: 5,
    hitPoints: Doomstalker.hitPoints[4], // el nivel -1
    experience: 227,
    gold: 32,
    perkTicks: 8,
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
    level: 7,
    hitPoints: Tinkerer.hitPoints[6], // el nivel -1
    experience: 378,
    gold: 3,
    perkTicks: 15,
    ownedAbilityCards: [
      ...Tinkerer.levelXCards,
      ...Tinkerer.level1Cards,
      'stamina-booster',
      'crank-bow',
      'dangerous-contraption',
      'noxious-vials',
      'auto-turret',
      'curative-aerosol'
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
    experience: 201,
    gold: 0,
    perkTicks: 1,
    ownedAbilityCards: [
      ...Spellweaver.levelXCards,
      ...Spellweaver.level1Cards,
      'flashing-burst',
      'cold-fire',
      'spirit-of-doom',
    ],
    ownedItems: [5, 31, 34, 27],
    scenarioAbilityCards: [],
    scenarioItems: [],
    perks: [
      'swPerk2-1',
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
    level: 6,
    hitPoints: Mindthief.hitPoints[5], // el nivel -1
    experience: 332,
    gold: 18,
    perkTicks: 4,
    ownedAbilityCards: [
      ...Mindthief.levelXCards,
      ...Mindthief.level1Cards,
      'hostile-takeover',
      'silent-scream',
      'cranium-overload',
      'mass-hysteria',
      'dark-frenzy'
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
    ],
  },
];
