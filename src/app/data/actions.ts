export type ACTION_TYPES = 'GAME_START' | 'GLOBAL_ACHIEVEMENT' | 'ITEM_DESIGN' |
'PARTY_CREATE' | 'PARTY_ACHIEVEMENT' | 'GLOBAL_ACHIEVEMENT' | 'PARTY_GAIN_REPUTATION' | 'PARTY_LOSE_REPUTATION' |
'CHARACTER_CREATE' | 'CHARACTER_RETIRE' | 'CHARACTER_UNLOCK' | 'CHARACTER_LEVEL_UP' | 'CHARACTER_BUY_ITEM' | 'CHARACTER_SELL_ITEM' |
'CHARACTER_GAIN_XP' | 'CHARACTER_GAIN_GOLD' | 'CHARACTER_PAY_GOLD' | 'CHARACTER_GAIN_TICK' | 'CHARACTER_LOSE_TICK' | 'CHARACTER_GAIN_PERK' |
'CHARACTER_MAKE_DONATION' | 'CHARACTER_GAIN_ITEM' |
'SCENARIO_UNLOCK' | 'SCENARIO_COMPLETE' | 'SCENARIO_FAIL' |
'CITY_PROSPERITY_ADD' | 'CITY_LEVEL_UP' |
'CITY_EVENT_PLAY' | 'CITY_EVENT_PLAY' | 'CITY_EVENT_DISCARD' | 'CITY_EVENT_ADD' | 'CITY_EVENT_SHUFFLE' |
'ROAD_EVENT_PLAY' | 'ROAD_EVENT_PLAY' | 'ROAD_EVENT_DISCARD' | 'ROAD_EVENT_ADD' | 'ROAD_EVENT_SHUFFLE'
;

export interface PAYLOAD {
  name?: string;
  character?: string;
  actions?: ACTION_TYPES[];
  level?: number,
  personalQuest?: any;
};

export interface Action {
  type: ACTION_TYPES;
  payload: PAYLOAD;
}

export const ACTIONS: Action[] = [
  {
    type: 'PARTY_CREATE',
    payload: {name: 'Envelope Openers'}
  },
  {
    type: 'CHARACTER_CREATE',
    payload: {
      name: 'Lorkham',
      character: 'Cragheart',
      personalQuest: {
        id: 528,
        title: 'Goliath Toppler',
      }
    }
  },
  {
    type: 'CHARACTER_CREATE',
    payload: {
      name: 'Farts like Thunder',
      character: 'Tinkerer',
      personalQuest: {
        id: 513,
        title: 'Finding the Cure',
      }
    }
  },
  {
    type: 'CHARACTER_CREATE',
    payload: {
      name: 'Nightmare',
      character: 'Scoundrel',
      personalQuest: {
        id: 526,
        title: 'Vengeance',
      }
    }
  },
  {
    type: 'CHARACTER_CREATE',
    payload: {
      name: 'Psycho',
      character: 'Mindthief',
      personalQuest: {
        id: 521,
        title: 'Take Back the Trees',
      }
    }
  },
];
