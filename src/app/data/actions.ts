import { CharacterClass } from '../model/character-class';
import { Player } from '../model/player';
import { CampaignStatus, CampaignStatusService } from '../services/campaign-status.service';
import { Brute, Cragheart, Doomstalker, Elementalist, Mindthief, Spellweaver, Sunkeeper, Tinkerer } from './charactersDef';
import { PersonalQuestDef, PERSONAL_QUESTS } from './personal-quests';

export type ACTION_TYPES = 'GAME_START' | 'GLOBAL_ACHIEVEMENT' | 'ITEM_DESIGN' |
'CAMPAIGN_CREATE' | 'PARTY_ACHIEVEMENT' | 'GLOBAL_ACHIEVEMENT' | 'PARTY_GAIN_REPUTATION' | 'PARTY_LOSE_REPUTATION' |
'CHARACTER_CREATE' | 'CHARACTER_RETIRE' | 'CHARACTER_UNLOCK' | 'CHARACTER_LEVEL_UP' | 'CHARACTER_BUY_ITEM' | 'CHARACTER_SELL_ITEM' |
'CHARACTER_GAIN_XP' | 'CHARACTER_GAIN_GOLD' | 'CHARACTER_PAY_GOLD' | 'CHARACTER_GAIN_TICK' | 'CHARACTER_LOSE_TICK' | 'CHARACTER_GAIN_PERK' |
'CHARACTER_MAKE_DONATION' | 'CHARACTER_GAIN_ITEM' |
'SCENARIO_UNLOCK' | 'SCENARIO_COMPLETE' | 'SCENARIO_FAIL' |
'CITY_PROSPERITY_ADD' | 'CITY_LEVEL_UP' |
'CITY_EVENT_PLAY' | 'CITY_EVENT_PLAY' | 'CITY_EVENT_DISCARD' | 'CITY_EVENT_ADD' | 'CITY_EVENT_SHUFFLE' |
'ROAD_EVENT_PLAY' | 'ROAD_EVENT_PLAY' | 'ROAD_EVENT_DISCARD' | 'ROAD_EVENT_ADD' | 'ROAD_EVENT_SHUFFLE'
;

export interface CreateCharacterPayload {
  playerId: string;
  characterClass: CharacterClass;
  name: string;
  personalQuest: PersonalQuestDef;
}

export interface RetireCharacterPayload {
  name: string;
  cityEventsToAdd: number[];
  roadEventsToAdd: number[];
}

export interface GainGlobalAchievementPayload {
  type: string;
  name: string;
}

export interface GainPartyAchievementPayload {
  name: string;
}

export interface CompleteScenarioPayload {
  scenarioId: number;
  level: number;
  playersResults: {playerName: string, playerResults: {xp: number, g?: number, t?: number}}[];
  rewards?: {
    partyAchievement?: string,
    globalAchievement?: string,
    prosperity?: number,
    reputation?: number,
    gold?: number,
    xp?: number,
  };
  scenariosUnblocked?: number[];
}

export interface CompleteSoloScenarioPayload {
  level: number;
  playersResults: {playerName: string, playerResults: {xp: number, g?: number, t?: number}}[];
}

export interface FailScenarioPayload {
  scenarioId: number;
  level: number;
  playersResults: {playerName: string, playerResults: {xp: number, g?: number}}[];
}

export interface BuyItemPayload {
  playerName: string;
  itemId: number;
}

export interface SellItemPayload {
  playerName: string;
  itemId: number;
}

export interface MakeDonationPayload {
  playerName: string;
}

export interface ResolveCityEventPayload {
  eventId: number;
  playersResults?: {playerName: string, playerResults: {xp?: number, g?: number, t?: number}}[];
  rewards?: {
    partyAchievement?: string,
    globalAchievement?: string,
    prosperity?: number,
    reputation?: number,
    addCityEvents?: number[],
    addRoadEvents?: number[],
  };
  discard: boolean;
}

export interface ResolveRoadEventPayload {
  eventId: number;
  playersResults?: {playerName: string, playerResults: {xp?: number, g?: number, t?: number}}[];
  rewards?: {
    partyAchievement?: string,
    globalAchievement?: string,
    prosperity?: number,
    reputation?: number,
    addCityEvents?: number[],
    addRoadEvents?: number[],
  };
  discard: boolean;
}

export interface EnhanceAbilityPayload {
  playerName: string;
  gold: number;
}

export interface UnblockCharacterPayload {
  name: string;
  cityEventsToAdd: number[];
  roadEventsToAdd: number[];
}

export type PAYLOAD =
  CreateCharacterPayload
  | GainGlobalAchievementPayload | GainPartyAchievementPayload
  | CompleteScenarioPayload | FailScenarioPayload
  | BuyItemPayload | SellItemPayload
  | MakeDonationPayload
  | ResolveCityEventPayload | ResolveRoadEventPayload;

export interface Action {
  type: ACTION_TYPES;
  payload: PAYLOAD;
}

export function loadCampaing(): CampaignStatus {

  const players: Player[] = [
    {uid: 'uuid1', email: 'email1@gmail.com', displayName: 'carherco', photoURL: '', emailVerified: true },
    {uid: 'uuid2', email: 'email2@gmail.com', displayName: 'otro', photoURL: '', emailVerified: true },
    {uid: 'uuid3', email: 'email3@gmail.com', displayName: 'otro3', photoURL: '', emailVerified: true },
    {uid: 'uuid4', email: 'email4@gmail.com', displayName: 'otro4', photoURL: '', emailVerified: true },
  ];

  const campaign = new CampaignStatusService();
  campaign.createCampaign('Envelope openers', players);

  campaign.createCharacter({
    playerId: players[0].uid,
    characterClass: Cragheart,
    name: 'Lorkham',
    personalQuest: PERSONAL_QUESTS[528]
  });

  campaign.buyItem({playerName: 'Lorkham', itemId: 1});
  campaign.buyItem({playerName: 'Lorkham', itemId: 14});

  campaign.createCharacter({
    playerId: players[1].uid,
    characterClass: Tinkerer,
    name: 'Farts Like Thunder',
    personalQuest: PERSONAL_QUESTS[513]
  });

  campaign.buyItem({playerName: 'Farts Like Thunder', itemId: 6});

  campaign.createCharacter({
    playerId: players[2].uid,
    characterClass: Spellweaver,
    name: 'Nightmare',
    personalQuest: PERSONAL_QUESTS[526]
  });

  campaign.buyItem({playerName: 'Nightmare', itemId: 4});
  campaign.buyItem({playerName: 'Nightmare', itemId: 13});

  campaign.createCharacter({
    playerId: players[3].uid,
    characterClass: Mindthief,
    name: 'Psycho',
    personalQuest: PERSONAL_QUESTS[521]
  });

  campaign.buyItem({playerName: 'Psycho', itemId: 11});
  campaign.buyItem({playerName: 'Psycho', itemId: 13});

  campaign.completeScenario({
    scenarioId: 1,
    level: 1,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 4, g: 4} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 18, g: 14, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 8, g: 4, t: 2} },
      { playerName: 'Psycho', playerResults: {xp: 8, g: 4} },
    ],
    rewards: {
      partyAchievement: 'First Steps',
    },
    scenariosUnblocked: [2]
  });

  campaign.completeScenario({
    scenarioId: 2,
    level: 1,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 4, g: 16} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 13, g: 4, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 7, g: 10, t: 1} },
      { playerName: 'Psycho', playerResults: {xp: 6, g: 4} },
    ],
    rewards: {
      prosperity: 1,
      gold: 10
    },
    scenariosUnblocked: [3, 4]
  });

  campaign.buyItem({playerName: 'Nightmare', itemId: 2});

  campaign.resolveCityEvent({eventId: 1, rewards: {reputation: 1}, discard: false});
  campaign.resolveRoadEvent({eventId: 8, discard: true});

  campaign.completeScenario({
    scenarioId: 3,
    level: 1,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 6, g: 4} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 13, g: 0, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 7, g: 8, t: 2} },
      { playerName: 'Psycho', playerResults: {xp: 8, g: 6, t: 1} },
    ],
    rewards: {
      prosperity: 1,
      gold: 15
    },
    scenariosUnblocked: [8, 9]
  });

  campaign.buyItem({playerName: 'Lorkham', itemId: 3});
  campaign.buyItem({playerName: 'Farts Like Thunder', itemId: 14});
  campaign.buyItem({playerName: 'Nightmare', itemId: 5});
  campaign.buyItem({playerName: 'Psycho', itemId: 1});

  //TODO: Este evento necesita más payload (ítem 125 ganado por Farts Like Thunder)
  campaign.resolveCityEvent({eventId: 3, playersResults: [
    { playerName: 'Lorkham', playerResults: {g: -3} },
    { playerName: 'Farts Like Thunder', playerResults: {g: -4} },
    { playerName: 'Psycho', playerResults: {g: -3} },
  ],rewards: {partyAchievement: 'Ancient Technology'}, discard: true});

  campaign.resolveRoadEvent({eventId: 3, discard: false});

  campaign.completeScenario({
    scenarioId: 9,
    level: 1,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 8, g: 10} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 19, g: 0, t: 2} },
      { playerName: 'Nightmare', playerResults: {xp: 6, g: 10, t: 1} },
      { playerName: 'Psycho', playerResults: {xp: 12, g: 6} },
    ],
    rewards: {
      prosperity: 1,
      gold: 20
    },
    scenariosUnblocked: [11, 12]
  });

  //TODO: Este evento necesita más payload (añadir evento ciudad 70 )
  campaign.resolveCityEvent({eventId: 16, playersResults: [
    { playerName: 'Lorkham', playerResults: {g: -4} },
    { playerName: 'Farts Like Thunder', playerResults: {g: -2} },
    { playerName: 'Nightmare', playerResults: {g: -2} },
    { playerName: 'Psycho', playerResults: {g: -2} },
  ],rewards: {}, discard: true});

  //TODO: item 023 conseguido por Nightmare
  campaign.failScenario({
    scenarioId: 11,
    level: 1,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 6, g: 0} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 10, g: 4} },
      { playerName: 'Nightmare', playerResults: {xp: 7, g: 6} },
      { playerName: 'Psycho', playerResults: {xp: 7, g: 8} },
    ]
  });

  campaign.makeDonation({playerName: 'Lorkham'});
  campaign.makeDonation({playerName: 'Nightmare'});
  campaign.makeDonation({playerName: 'Psycho'});
  // Esta donación no está anotada, pero me falta una en algún sitio
  campaign.makeDonation({playerName: 'Farts Like Thunder'});

  campaign.sellItem({playerName: 'Nightmare', itemId: 23});
  campaign.buyItem({playerName: 'Nightmare', itemId: 11});
  campaign.buyItem({playerName: 'Nightmare', itemId: 8});
  campaign.buyItem({playerName: 'Psycho', itemId: 8});

  campaign.resolveCityEvent({eventId: 4, playersResults: [
    { playerName: 'Farts Like Thunder', playerResults: {t: -1} },
    { playerName: 'Psycho', playerResults: {t: -1} },
  ], rewards: {reputation: 1}, discard: true});

  // TODO: Diseño de item 113
  // TODO: 2 global achievements
  campaign.completeScenario({
    scenarioId: 11,
    level: 2,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 6, g: 3} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 16, g: 3, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 5, g: 3, t: 1} },
      { playerName: 'Psycho', playerResults: {xp: 7, g: 3, t: 1} },
    ],
    rewards: {
      prosperity: 2,
      gold: 15,
      globalAchievement: "City Rule: Economic y End of Invasion"
    },
    scenariosUnblocked: [16, 18]
  });

  campaign.resolveCityEvent({eventId: 24, playersResults: [
    { playerName: 'Farts Like Thunder', playerResults: {xp: 10} },
    { playerName: 'Psycho', playerResults: {xp: 10} },
    { playerName: 'Nightmare', playerResults: {xp: 10} },
    { playerName: 'Lorkham', playerResults: {xp: 10} },
  ], discard: false});

  campaign.buyItem({playerName: 'Farts Like Thunder', itemId: 16});
  campaign.buyItem({playerName: 'Farts Like Thunder', itemId: 20});
  campaign.buyItem({playerName: 'Farts Like Thunder', itemId: 21});

  campaign.failScenario({
    scenarioId: 18,
    level: 2,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 8, g: 0} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 15, g: 15} },
      { playerName: 'Nightmare', playerResults: {xp: 8, g: 27} },
      { playerName: 'Psycho', playerResults: {xp: 11, g: 27} },
    ]
  });

  campaign.resolveCityEvent({eventId: 15, rewards: {reputation: -2}, discard: true});

  campaign.buyItem({playerName: 'Nightmare', itemId: 17});
  campaign.buyItem({playerName: 'Psycho', itemId: 16});
  campaign.buyItem({playerName: 'Psycho', itemId: 12});
  campaign.buyItem({playerName: 'Psycho', itemId: 20});

  campaign.makeDonation({playerName: 'Lorkham'});
  campaign.makeDonation({playerName: 'Psycho'});

  campaign.resolveRoadEvent({eventId: 11, rewards: {addCityEvents: [73]}, discard: true});

  campaign.completeScenario({
    scenarioId: 16,
    level: 2,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 9, g: 15} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 10, g: 3, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 5, g: 0, t: 1} },
      { playerName: 'Psycho', playerResults: {xp: 13, g: 15, t: 1} },
    ],
    scenariosUnblocked: [24, 25]
  });

  campaign.resolveCityEvent({eventId: 28, playersResults: [
    { playerName: 'Lorkham', playerResults: {g: 10} },
    { playerName: 'Farts Like Thunder', playerResults: {g: 10} },
    { playerName: 'Nightmare', playerResults: {g: 10} },
    { playerName: 'Psycho', playerResults: {g: 10} },
  ], discard: true});

  campaign.buyItem({playerName: 'Lorkham', itemId: 13});
  campaign.buyItem({playerName: 'Farts Like Thunder', itemId: 13});
  campaign.buyItem({playerName: 'Nightmare', itemId: 12});
  campaign.buyItem({playerName: 'Psycho', itemId: 21});

  campaign.makeDonation({playerName: 'Lorkham'});

  campaign.completeScenario({
    scenarioId: 18,
    level: 2,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 10, g: 18, t: 1} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 19, g: 0, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 5, g: 15, t: 1} },
      { playerName: 'Psycho', playerResults: {xp: 9, g: 21, t: 1} },
    ],
    scenariosUnblocked: [14, 23, 26, 43]
  });

  // TODO: Unlock scenario 81
  campaign.resolveCityEvent({eventId: 17, discard: true});

  campaign.makeDonation({playerName: 'Lorkham'});
  campaign.makeDonation({playerName: 'Nightmare'});
  campaign.makeDonation({playerName: 'Psycho'});

  // Open Envelope B (+1 prosperity ya contemplado)

  campaign.resolveRoadEvent({eventId: 23, playersResults: [
    { playerName: 'Lorkham', playerResults: {g: 2} },
    { playerName: 'Farts Like Thunder', playerResults: {g: 2} },
    { playerName: 'Nightmare', playerResults: {g: 2} },
    { playerName: 'Psycho', playerResults: {g: 2} },
  ],
  rewards: {reputation: -1}, discard: true});

  // TODO: Ítem 130 para Lorkham
  campaign.failScenario({
    scenarioId: 81,
    level: 2,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 3, g: 0} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 7, g: 3} },
      { playerName: 'Nightmare', playerResults: {xp: 9, g: 12} },
      { playerName: 'Psycho', playerResults: {xp: 7, g: 6} },
    ]
  });

  // TODO: revisar este reparto extraño de dinero
  campaign.resolveCityEvent({eventId: 6, playersResults: [
    { playerName: 'Lorkham', playerResults: {g: 5} },
    { playerName: 'Farts Like Thunder', playerResults: {g: 5} },
    { playerName: 'Nightmare', playerResults: {g: 2} },
    { playerName: 'Psycho', playerResults: {g: 5} },
  ], rewards: {prosperity: 1}, discard: true});

  campaign.buyItem({playerName: 'Lorkham', itemId: 81});

  campaign.makeDonation({playerName: 'Lorkham'});
  campaign.makeDonation({playerName: 'Psycho'});

  campaign.resolveRoadEvent({eventId: 14, discard: false});

  campaign.completeScenario({
    scenarioId: 81,
    level: 2,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 4, g: 0, t: 1} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 5, g: 9, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 4, g: 6, t: 2} },
      { playerName: 'Psycho', playerResults: {xp: 10, g: 3, t: 1} },
    ],
    rewards: {xp: 10}
  });

  campaign.makeDonation({playerName: 'Lorkham'});
  campaign.makeDonation({playerName: 'Psycho'});
  campaign.makeDonation({playerName: 'Farts Like Thunder'});

  campaign.retireCharacter({name: 'Lorkham', cityEventsToAdd: [46], roadEventsToAdd: [46]});

  campaign.unblockCharacter({name: 'Doomstalker', cityEventsToAdd: [38], roadEventsToAdd: [38]});

  campaign.createCharacter({
    playerId: players[0].uid,
    characterClass: Doomstalker,
    name: 'Divayth Fyr',
    personalQuest: PERSONAL_QUESTS[530]
  });

  campaign.resolveCityEvent({eventId: 21, discard: false});

  campaign.buyItem({playerName: 'Divayth Fyr', itemId: 1});
  campaign.buyItem({playerName: 'Divayth Fyr', itemId: 13});

  // TODO: Open envelope "When you deserve it"
  // Unlock escenario 76

  campaign.completeScenario({
    scenarioId: 23,
    level: 2,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 8, g: 6, t: 2} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 10, g: 6, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 6, g: 0, t: 1} },
      { playerName: 'Psycho', playerResults: {xp: 11, g: 3, t: 1} },
    ],
    rewards: {globalAchievement: 'Ancient Technology', partyAchievement: 'Through the ruins'}
  });

  campaign.resolveCityEvent({eventId: 70, rewards: {reputation: -1}, discard: false});

  campaign.buyItem({playerName: 'Divayth Fyr', itemId: 5});
  campaign.buyItem({playerName: 'Divayth Fyr', itemId: 12});

  // TODO: Ítem 33 para Farts
  campaign.completeScenario({
    scenarioId: 26,
    level: 2,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 8, g: 16, t: 1} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 15, g: 16, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 6, g: 13, t: 2} },
      { playerName: 'Psycho', playerResults: {xp: 13, g: 3} },
    ],
    rewards: {reputation: 1, prosperity: 2, partyAchievement: 'Through the ruins'}
  });

  campaign.resolveCityEvent({eventId: 5, playersResults: [
    { playerName: 'Farts Like Thunder', playerResults: {t: -1} },
    { playerName: 'Nightmare', playerResults: {t: -1} },
    { playerName: 'Psycho', playerResults: {t: -1} },
  ], rewards: {reputation: 1, prosperity: 1}, discard: true});

  // TODO: Ítem 74 para Divayth Fyr
  campaign.completeScenario({
    scenarioId: 57,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 4, g: 6, t: 1} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 10, g: 3, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 6, g: 3, t: 1} },
      { playerName: 'Psycho', playerResults: {xp: 8, g: 3} },
    ],
    rewards: {reputation: 1},
    scenariosUnblocked: [58]
  });

  campaign.makeDonation({playerName: 'Divayth Fyr'});
  campaign.makeDonation({playerName: 'Psycho'});
  campaign.makeDonation({playerName: 'Farts Like Thunder'});
  campaign.makeDonation({playerName: 'Nightmare'});

  campaign.resolveCityEvent({eventId: 27, rewards: {prosperity: 1}, discard: true});

  campaign.completeScenario({
    scenarioId: 58,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 5, g: 3} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 9, g: 6, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 9, g: 0} },
      { playerName: 'Psycho', playerResults: {xp: 8, g: 0} },
    ],
    rewards: {reputation: 2},
  });

  // TODO: Open envelope X
  // "We call from de dust.
  // From the aged bones of those you have killed.
  // Speak our name into his web and we will be free.
  // 10 clues you must find. -10 letters to our name-.
  // Here is our first: B."

  campaign.buyItem({playerName: 'Farts Like Thunder', itemId: 15});

  campaign.resolveCityEvent({eventId: 14, rewards: {reputation: 2}, discard: true});

  campaign.makeDonation({playerName: 'Nightmare'});

  campaign.retireCharacter({name: 'Nightmare', cityEventsToAdd: [45], roadEventsToAdd: [45]});

  campaign.createCharacter({
    playerId: players[2].uid,
    characterClass: Spellweaver,
    name: 'Medea',
    personalQuest: PERSONAL_QUESTS[531]
  });

  // TODO: Unblock scenario 072 por el Town Records

  campaign.buyItem({playerName: 'Medea', itemId: 5});
  campaign.buyItem({playerName: 'Medea', itemId: 34});
  campaign.buyItem({playerName: 'Medea', itemId: 31});

  campaign.makeDonation({playerName: 'Psycho'});

  campaign.resolveRoadEvent({eventId: 10, rewards: {addCityEvents: [71]}, discard: true});

  campaign.completeScenario({
    scenarioId: 14,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 7, g: 20, t: 2} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 19, g: 0, t: 1} },
      { playerName: 'Medea', playerResults: {xp: 8, g: 12, t: 1} },
      { playerName: 'Psycho', playerResults: {xp: 7, g: 36} },
    ],
    rewards: {globalAchievement: 'The Power of Enhancement'},
  });

  campaign.resolveCityEvent({eventId: 2, playersResults: [
    { playerName: 'Psycho', playerResults: {g: -10} },
  ], discard: true});

  campaign.makeDonation({playerName: 'Psycho'});

  // Solo Scenario: P: 23xp, 9g (10xp, ítem 139)
  campaign.completeSoloScenario({
    level: 3,
    playersResults: [
      { playerName: 'Psycho', playerResults: {xp: 23, g: 9} },
    ]
  });

  // Solo Scenario: F: 11xp, 3g, 1t (10xp, ítem 135)
  campaign.completeSoloScenario({
    level: 3,
    playersResults: [
      { playerName: 'Farts Like Thunder', playerResults: {xp: 11, g: 3, t: 1} },
    ]
  });

  // Solo Scenario: D: 12xp, 0g, 2t (10xp, ítem 147)
  campaign.completeSoloScenario({
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 12, g: 0, t: 2} },
    ]
  });

  campaign.resolveRoadEvent({eventId: 7, playersResults: [
    { playerName: 'Divayth Fyr', playerResults: {xp: 5, t: -1} },
    { playerName: 'Farts Like Thunder', playerResults: {xp: 5, t: -1} },
    { playerName: 'Medea', playerResults: {xp: 5, t: -1} },
    { playerName: 'Psycho', playerResults: {xp: 5, t: -1} },
  ], discard: true});

  // TODO: ítem 98 para Psycho
  campaign.completeScenario({
    scenarioId: 43,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 17, g: 0, t: 1} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 7, g: 21, t: 2} },
      { playerName: 'Medea', playerResults: {xp: 18, g: 9, t: 1} },
      { playerName: 'Psycho', playerResults: {xp: 12, g: 3, t: 1} },
    ],
    rewards: {globalAchievement: 'Water Breath'},
  });

  campaign.buyItem({playerName: 'Medea', itemId: 27});
  campaign.buyItem({playerName: 'Farts Like Thunder', itemId: 34});

  campaign.resolveCityEvent({eventId: 10, playersResults: [
    { playerName: 'Divayth Fyr', playerResults: {g: -5} },
    { playerName: 'Farts Like Thunder', playerResults: {g: -5} },
    { playerName: 'Psycho', playerResults: {g: -5} },
  ], discard: true});

  campaign.makeDonation({playerName: 'Psycho'});

  campaign.sellItem({playerName: 'Psycho', itemId: 98});
  campaign.buyItem({playerName: 'Psycho', itemId: 27});

  campaign.resolveRoadEvent({eventId: 15, discard: false});

  campaign.completeScenario({
    scenarioId: 55,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 5, g: 5, t: 1} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 15, g: 6, t: 2} },
      { playerName: 'Medea', playerResults: {xp: 5, g: 13, t: 0} },
      { playerName: 'Psycho', playerResults: {xp: 14, g: 3, t: 1} },
    ],
  });

  campaign.makeDonation({playerName: 'Psycho'});

  campaign.resolveCityEvent({eventId: 9, rewards: {prosperity: 1}, discard: false});

  campaign.buyItem({playerName: 'Medea', itemId: 12});

  // Enhancement: Divayth Fyr: Fresh Kill, +1 Range (-30g)
  campaign.enhanceAbility({playerName: 'Divayth Fyr', gold: 30});

  campaign.resolveRoadEvent({eventId: 18, discard: false});

  campaign.completeScenario({
    scenarioId: 56,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 11, g: 10, t: 2} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 8, g: 25, t: 1} },
      { playerName: 'Medea', playerResults: {xp: 12, g: 22, t: 2} },
      { playerName: 'Psycho', playerResults: {xp: 13, g: 19, t: 1} },
    ],
    rewards: {reputation: 2}
  });

  campaign.makeDonation({playerName: 'Psycho'});

  campaign.resolveCityEvent({eventId: 10, playersResults: [
    { playerName: 'Divayth Fyr', playerResults: {g: -3} },
    { playerName: 'Farts Like Thunder', playerResults: {g: -3} },
    { playerName: 'Medea', playerResults: {g: -3} },
    { playerName: 'Psycho', playerResults: {g: -3} },
  ], discard: false});

  campaign.retireCharacter({name: 'Psycho', cityEventsToAdd: [47], roadEventsToAdd: [47]});
  // TODO:
  // - Random Item 076 Chain Hood
  // - Random Map 68 Toxic Moor

  campaign.createCharacter({
    playerId: players[3].uid,
    characterClass: Brute,
    name: 'Einar',
    personalQuest: PERSONAL_QUESTS[527]
  });

  campaign.buyItem({playerName: 'Medea', itemId: 1});
  campaign.buyItem({playerName: 'Einar', itemId: 74});
  campaign.buyItem({playerName: 'Einar', itemId: 7});
  campaign.buyItem({playerName: 'Einar', itemId: 34});

  campaign.resolveRoadEvent({eventId: 19, rewards: {reputation: 1} ,discard: true});

  campaign.completeScenario({
    scenarioId: 24,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 6, g: 6} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 10, g: 3} },
      { playerName: 'Medea', playerResults: {xp: 6, g: 12, t: 2} },
      { playerName: 'Einar', playerResults: {xp: 5, g: 12} },
    ],
    rewards: {partyAchievement: 'The Voice’s Command'}
  });

  campaign.resolveCityEvent({eventId: 19, playersResults: [
    { playerName: 'Divayth Fyr', playerResults: {g: -5} },
    { playerName: 'Farts Like Thunder', playerResults: {g: -5} },
    { playerName: 'Medea', playerResults: {g: -5} },
    { playerName: 'Einar', playerResults: {g: -5} },
  ], discard: true});

  campaign.resolveRoadEvent({eventId: 14, discard: false});

  campaign.completeScenario({
    scenarioId: 30,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 7, g: 3, t: 1} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 7, g: 0} },
      { playerName: 'Medea', playerResults: {xp: 5, g: 6, t: 2} },
      { playerName: 'Einar', playerResults: {xp: 7, g: 0, t: 1} },
    ],
    rewards: {partyAchievement: 'The Scepter and the Voice', gold: 10}
  });

  campaign.resolveCityEvent({eventId: 7, playersResults: [
    { playerName: 'Divayth Fyr', playerResults: {g: 5} },
    { playerName: 'Farts Like Thunder', playerResults: {g: 5} },
    { playerName: 'Medea', playerResults: {g: 5} },
    { playerName: 'Einar', playerResults: {g: 5} },
  ], discard: true});

  campaign.resolveRoadEvent({eventId: 12, rewards: {reputation: 1}, discard: true});

  // TODO: Lost Party Achievement: The Voice's Command,
  campaign.completeScenario({
    scenarioId: 42,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 5, g: 3, t: 3} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 13} },
      { playerName: 'Medea', playerResults: {xp: 6, g: 6, t: 2} },
      { playerName: 'Einar', playerResults: {xp: 9, t: 1} },
    ],
    rewards: {globalAchievement: `The Voice's Silenced`}
  });

  // THE CREATOR HAS MADE A REQUEST FOR OUR SPOILS

  campaign.resolveCityEvent({eventId: 1, rewards: {reputation: 1}, discard: false});

  campaign.unblockCharacter({name: 'Sunkeeper', cityEventsToAdd: [31], roadEventsToAdd: [31]});

  campaign.resolveRoadEvent({eventId: 30, rewards: {reputation: 1}, discard: true});

  // TODO: Item 108 para Divayth Fyr
  campaign.failScenario({
    scenarioId: 25,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 7, g: 3} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 6, g: 3} },
      { playerName: 'Medea', playerResults: {xp: 7, g: 15} },
      { playerName: 'Einar', playerResults: {xp: 12, g: 6} },
    ]
  });

  campaign.resolveCityEvent({eventId: 12, rewards: {reputation: -1}, discard: true});

  campaign.resolveRoadEvent({eventId: 29, discard: true});

  campaign.completeScenario({
    scenarioId: 25,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 7, g: 3, t: 2} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 8, g: 6} },
      { playerName: 'Medea', playerResults: {xp: 11, g: 0, t: 1} },
      { playerName: 'Einar', playerResults: {xp: 11, g: 15, t: 1} },
    ],
    rewards: {partyAchievement: `The Drake's Command`}
  });

  campaign.resolveCityEvent({eventId: 45, rewards: {addCityEvents: [62]}, discard: true});

  campaign.buyItem({playerName: 'Farts Like Thunder', itemId: 35});

  campaign.resolveRoadEvent({eventId: 38, rewards: {prosperity: 1}, discard: true});

    // TODO: 5 forest imps
  campaign.failScenario({
    scenarioId: 72,
    level: 4,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 9, g: 12} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 0, g: 0} },
      { playerName: 'Medea', playerResults: {xp: 13, g: 8} },
      { playerName: 'Einar', playerResults: {xp: 9, g: 12} },
    ]
  });

  campaign.sellItem({playerName: 'Farts Like Thunder', itemId: 125});
  campaign.buyItem({playerName: 'Einar', itemId: 27});

  campaign.makeDonation({playerName: 'Divayth Fyr'});
  campaign.makeDonation({playerName: 'Farts Like Thunder'});
  campaign.makeDonation({playerName: 'Medea'});
  campaign.makeDonation({playerName: 'Einar'});

  campaign.resolveCityEvent({eventId: 30, playersResults: [
    { playerName: 'Divayth Fyr', playerResults: {g: -5} },
    { playerName: 'Farts Like Thunder', playerResults: {g: -5} },
    { playerName: 'Medea', playerResults: {g: -5} },
    { playerName: 'Einar', playerResults: {g: -5} },
  ], discard: false});

  campaign.resolveRoadEvent({eventId: 15, discard: false});

  // TODO: 3 forest imps
  campaign.completeScenario({
    scenarioId: 72,
    level: 4,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 6, g: 0} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 0, g: 4} },
      { playerName: 'Medea', playerResults: {xp: 19, g: 16, t: 1} },
      { playerName: 'Einar', playerResults: {xp: 16, g: 20, t: 1} },
    ],
    rewards: {prosperity: 1, reputation: 1}
  });

  // Por el Town Records
  campaign.addCityEvent(80);

  campaign.sellItem({playerName: 'Divayth Fyr', itemId: 147});
  campaign.buyItem({playerName: 'Einar', itemId: 20});

  // Aquí va 1 de prosperity automático ya contemplado
  campaign.makeDonation({playerName: 'Farts Like Thunder'});

  // Enhancement: Divayth Fyr: XXXXXXX, Bless (-50g)
  campaign.enhanceAbility({playerName: 'Divayth Fyr', gold: 50});
  // Enhancement: Medea: Impaling Eruption, +1 Range (-60g)
  campaign.enhanceAbility({playerName: 'Medea', gold: 60});

  campaign.resolveCityEvent({eventId: 38, rewards: {
    prosperity: 1,
    reputation: -1
  }, discard: true});

  campaign.resolveRoadEvent({eventId: 27, discard: true});

  campaign.completeScenario({
    scenarioId: 59,
    level: 4,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 9, g: 24, t: 2} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 0, g: 8} },
      { playerName: 'Medea', playerResults: {xp: 8, g: 20, t: 1} },
      { playerName: 'Einar', playerResults: {xp: 5, g: 28, t: 1} },
    ],
    scenariosUnblocked: [60]
  });

  campaign.makeDonation({playerName: 'Farts Like Thunder'});

  campaign.resolveCityEvent({eventId: 71, playersResults: [
    { playerName: 'Einar', playerResults: {t: -1} },
  ], discard: false});

  campaign.completeScenario({
    scenarioId: 60,
    level: 4,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 5, g: 0} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 0, g: 0} },
      { playerName: 'Medea', playerResults: {xp: 12, g: 4, t: 2} },
      { playerName: 'Einar', playerResults: {xp: 9, g: 4, t: 1} },
    ],
    rewards: {prosperity: 1}
  });

  campaign.makeDonation({playerName: 'Farts Like Thunder'});
  campaign.makeDonation({playerName: 'Medea'});

  // Random Item 077, Random Map 65
  campaign.retireCharacter({name: 'Farts Like Thunder', cityEventsToAdd: [43], roadEventsToAdd: [43]});

  campaign.createCharacter({
    playerId: players[1].uid,
    characterClass: Sunkeeper,
    name: 'Lux Lucitana',
    personalQuest: PERSONAL_QUESTS[533]
  });

  campaign.buyItem({playerName: 'Einar', itemId: 36});
  campaign.buyItem({playerName: 'Lux Lucitana', itemId: 74});
  campaign.buyItem({playerName: 'Lux Lucitana', itemId: 38});
  campaign.buyItem({playerName: 'Lux Lucitana', itemId: 2});
  campaign.buyItem({playerName: 'Lux Lucitana', itemId: 20});

  campaign.resolveCityEvent({eventId: 20, playersResults: [
    { playerName: 'Lux Lucitana', playerResults: {g: 4} },
    { playerName: 'Einar', playerResults: {g: 3} },
    { playerName: 'Divayth Fyr', playerResults: {g: 3} },
  ], discard: false});

  campaign.resolveRoadEvent({eventId: 1, discard: false});

  campaign.completeScenario({
    scenarioId: 68,
    level: 4,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 4, g: 8} },
      { playerName: 'Lux Lucitana', playerResults: {xp: 10, g: 16} },
      { playerName: 'Medea', playerResults: {xp: 20, g: 8} },
      { playerName: 'Einar', playerResults: {xp: 11, g: 28, t: 1} },
    ]
  });

  campaign.makeDonation({playerName: 'Medea'});

  campaign.resolveCityEvent({eventId: 22, rewards: {
    reputation: 2
  }, discard: false});

  campaign.retireCharacter({name: 'Medea', cityEventsToAdd: [44], roadEventsToAdd: [44]});
  campaign.unblockCharacter({name: 'Elementalist', cityEventsToAdd: [40], roadEventsToAdd: [40]});

  campaign.createCharacter({
    playerId: players[2].uid,
    characterClass: Elementalist,
    name: 'El Alquimista',
    personalQuest: PERSONAL_QUESTS[525]
  });

  campaign.buyItem({playerName: 'El Alquimista', itemId: 2});
  campaign.buyItem({playerName: 'El Alquimista', itemId: 5});
  campaign.buyItem({playerName: 'El Alquimista', itemId: 6});
  campaign.buyItem({playerName: 'El Alquimista', itemId: 34});

  campaign.sellItem({playerName: 'Divayth Fyr', itemId: 19});
  campaign.buyItem({playerName: 'Divayth Fyr', itemId: 33});

  campaign.resolveRoadEvent({eventId: 7, playersResults: [
    { playerName: 'Einar', playerResults: {xp: 5} },
    { playerName: 'Divayth Fyr', playerResults: {xp: 5} },
    { playerName: 'El Alquimista', playerResults: {xp: 5} },
  ], discard: true});

  campaign.completeScenario({
    scenarioId: 65,
    level: 3,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 8, g: 24} },
      { playerName: 'El Alquimista', playerResults: {xp: 6, g: 24, t: 1} },
      { playerName: 'Einar', playerResults: {xp: 6, g: 15, t: 1} },
    ]
  });

  campaign.buyItem({playerName: 'Einar', itemId: 18});
  campaign.buyItem({playerName: 'Einar', itemId: 28});
  campaign.buyItem({playerName: 'Einar', itemId: 25});
  campaign.buyItem({playerName: 'Lux Lucitana', itemId: 13});

  campaign.makeDonation({playerName: 'El Alquimista'});

  // TODO: Unlock Scenario 84
  campaign.resolveCityEvent({eventId: 73, playersResults: [
    { playerName: 'Lux Lucitana', playerResults: {g: -1} },
    { playerName: 'Einar', playerResults: {g: -2} },
    { playerName: 'Divayth Fyr', playerResults: {g: -1} },
    { playerName: 'El Alquimista', playerResults: {g: -1} },
  ], discard: true});

  campaign.resolveRoadEvent({eventId: 3, discard: false});

  // TODO: Item 103 para Divayth Fyr
  campaign.completeScenario({
    scenarioId: 34,
    level: 4,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 5, g: 12} },
      { playerName: 'Lux Lucitana', playerResults: {xp: 7, g: 12} },
      { playerName: 'El Alquimista', playerResults: {xp: 6, g: 4, t: 1} },
      { playerName: 'Einar', playerResults: {xp: 10, g: 0} },
    ], rewards: {gold: 20, reputation: 2, prosperity: 1}
  });

  campaign.sellItem({playerName: 'Divayth Fyr', itemId: 103});
  campaign.buyItem({playerName: 'El Alquimista', itemId: 14});

  campaign.makeDonation({playerName: 'El Alquimista'});

  campaign.resolveCityEvent({eventId: 71, rewards: {addCityEvents: [72]}, discard: true});
  campaign.resolveRoadEvent({eventId: 14, discard: false});

  // TODO: Item design 123
  campaign.completeScenario({
    scenarioId: 4,
    level: 4,
    playersResults: [
      { playerName: 'Divayth Fyr', playerResults: {xp: 8, g: 16} },
      { playerName: 'Lux Lucitana', playerResults: {xp: 12, g: 24, t: 2} },
      { playerName: 'El Alquimista', playerResults: {xp: 7, g: 16, t: 2} },
      { playerName: 'Einar', playerResults: {xp: 12, g: 16, t: 1} },
    ]
  });

  return campaign.getStatus();
}
