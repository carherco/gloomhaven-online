import { CharacterClass } from '../model/character-class';
import { Player } from '../model/player';
import { CampaignStatus, CampaignStatusService } from '../services/campaign-status.service';
import { Cragheart, Mindthief, Spellweaver, Tinkerer } from './charactersDef';
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
  };
  scenariosUnblocked?: number[];
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
    reputation?: number
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
    reputation?: number
  };
  discard: boolean;
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

  campaign.sellItem({playerName: 'Nightmare', itemId: 23});
  campaign.buyItem({playerName: 'Nightmare', itemId: 11});
  campaign.buyItem({playerName: 'Nightmare', itemId: 8});
  campaign.buyItem({playerName: 'Psycho', itemId: 8});

  campaign.resolveCityEvent({eventId: 16, playersResults: [
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
  ], rewards: {reputation: 1}, discard: false});

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

  // TODO: Añadir city event 73
  campaign.resolveRoadEvent({eventId: 11, rewards: {}, discard: true});

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

  // TODO: Open Envelope

  // TODO: +1 prosperity

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

  // TODO: reward de 10 xp para todos además del bonus de 8
  campaign.completeScenario({
    scenarioId: 81,
    level: 2,
    playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 4, g: 0, t: 1} },
      { playerName: 'Farts Like Thunder', playerResults: {xp: 5, g: 9, t: 1} },
      { playerName: 'Nightmare', playerResults: {xp: 4, g: 6, t: 2} },
      { playerName: 'Psycho', playerResults: {xp: 10, g: 3, t: 1} },
    ]
  });

  // TODO: Subir +1 prosperity cada 5 donaciones
  campaign.makeDonation({playerName: 'Lorkham'});
  campaign.makeDonation({playerName: 'Psycho'});
  campaign.makeDonation({playerName: 'Farts Like Thunder'});

  // RETIREMENT: LORKHAM
  return campaign.getStatus();
}
