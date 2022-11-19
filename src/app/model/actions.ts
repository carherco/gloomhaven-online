import { PersonalQuestDef } from '../data/personal-quests';
import { CharacterClass } from './character-class';

export type ACTION_TYPES = 'GAME_START' | 'ITEM_DESIGN' |
'CAMPAIGN_CREATE' | 'PARTY_ACHIEVEMENT' | 'GLOBAL_ACHIEVEMENT' | 'PARTY_GAIN_REPUTATION' | 'PARTY_LOSE_REPUTATION' |
'CHARACTER_CREATE' | 'CHARACTER_RETIRE' | 'CHARACTER_UNLOCK' | 'CHARACTER_LEVEL_UP' | 'CHARACTER_BUY_ITEM' | 'CHARACTER_SELL_ITEM' |
'CHARACTER_GAIN_XP' | 'CHARACTER_GAIN_GOLD' | 'CHARACTER_PAY_GOLD' | 'CHARACTER_GAIN_TICK' | 'CHARACTER_LOSE_TICK' | 'CHARACTER_GAIN_PERK' |
'CHARACTER_MAKE_DONATION' | 'CHARACTER_GAIN_ITEM' |
'SCENARIO_UNLOCK' | 'SCENARIO_COMPLETE' | 'SCENARIO_FAIL' |
'CITY_PROSPERITY_ADD' | 'CITY_LEVEL_UP' |
'CITY_EVENT_PLAY' | 'CITY_EVENT_DISCARD' | 'CITY_EVENT_ADD' | 'CITY_EVENT_SHUFFLE' |
'ROAD_EVENT_PLAY' | 'ROAD_EVENT_DISCARD' | 'ROAD_EVENT_ADD' | 'ROAD_EVENT_SHUFFLE'
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
  scenariosUnlocked?: number[];
  itemDesigns?: number[];
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
  playersResults: {playerName: string, playerResults: {xp: number, g?: number, t?: number, pq?: number, items?: number[] }}[];
  rewards?: {
    partyAchievements?: string[],
    globalAchievements?: string[],
    prosperity?: number,
    reputation?: number,
    gold?: number,
    xp?: number,
    itemDesigns?: number[],
    loosePartyAchievements?: string[],
    looseGlobalAchievements?: string[],
  };
  scenariosUnlocked?: number[];
  treasuresLooted?: number[];
}

export interface CompleteSoloScenarioPayload {
  level: number;
  playersResults: {playerName: string, playerResults: {xp: number, g?: number, t?: number, items?: number[]}}[];
}

export interface FailScenarioPayload {
  scenarioId: number;
  level: number;
  playersResults: {playerName: string, playerResults: {xp: number, g?: number, pq?: number, items?: number[]}}[];
  rewards?: { // Puede haber premios en tesoros
    prosperity?: number,
    reputation?: number,
    gold?: number,
    xp?: number,
    itemDesigns?: number[],
  };
  treasuresLooted?: number[];
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

export interface GainPerkPayload {
  playerName: string;
  perkId: string;
}

export interface ResolveCityEventPayload {
  eventId: number;
  playersResults?: {playerName: string, playerResults: {xp?: number, g?: number, t?: number, items?: number[]}}[];
  rewards?: {
    partyAchievements?: string[],
    globalAchievements?: string[],
    prosperity?: number,
    reputation?: number,
    addCityEvents?: number[],
    addRoadEvents?: number[],
    itemDesigns?: number[],
    scenariosUnlocked?: number[]
  };
  discard: boolean;
}

export interface ResolveRoadEventPayload {
  eventId: number;
  playersResults?: {playerName: string, playerResults: {xp?: number, g?: number, t?: number, items?: number[]}}[];
  rewards?: {
    partyAchievements?: string[],
    globalAchievements?: string[],
    prosperity?: number,
    reputation?: number,
    addCityEvents?: number[],
    addRoadEvents?: number[],
    itemDesigns?: number[],
    scenariosUnlocked?: number[]
  };
  discard: boolean;
}

export interface GainAbilityPayload {
  playerName: string;
  ability: string;
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
