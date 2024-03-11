import * as ACHIEVEMENTS from './achievements';
import * as PARTY from './achievements';

export type Scenario = {
  title: string,
  location: ScenarioLoctaion,
  globalAchievementsRequired: string[],
  globalAchievementsRequiredIncomplete: string[],
  partyAchievementsRequired: string[],
  onlyOneAchievementRequired?: true
};

export type ScenarioLoctaion = 'Gloomhaven'|'Dagger Forest'|'Misty Sea'|'Watcher Mountains'|'Lingering Swamp'|'Copperneck Mountains'|'Other';
export type ScenarioStatus = 'Unavailable'|'Available'|'Completed'|'Blocked';
export type ScenarioWithStatus = Scenario & {id: number, status: ScenarioStatus};

export const SCENARIOS: Scenario[] = [
  {
    title: 'dummy',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  }, // dummy scenario 0, just to make indexing by scenario number easier - eg. scenarios[1] refers to scenario number 1
  {
    title: 'Black Barrow',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Barrow Lair',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.FIRST_STEPS]
  },
  {
    title: 'Inox Encampment',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    partyAchievementsRequired: []
  },
  {
    title: 'Crypt of the Damned',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Ruinous Crypt',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Decaying Crypt',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Vibrant Grotto',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Gloomhaven Warehouse',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_DEAD_INVADE],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.JEKSERAHS_PLANS]
  },
  {
    title: 'Diamond Mine',
    location: 'Watcher Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    partyAchievementsRequired: []
  },
  {
    title: 'Plane of Elemental Power',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: []
  },
  {
    title: 'Gloomhaven Square A',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    partyAchievementsRequired: []
  },
  {
    title: 'Gloomhaven Square B',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    partyAchievementsRequired: []
  },
  {
    title: 'Temple of the Seer',
    location: 'Watcher Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Frozen Hollow',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Shrine of Strength',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Mountain Pass',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Lost Island',
    location: 'Misty Sea',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Abandoned Sewers',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Forgotten Crypt',
    location: 'Lingering Swamp',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Necromancer\'s Sanctum',
    location: 'Other',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Infernal Throne',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: []
  },
  {
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: 'Temple of the Elements',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND, PARTY.PARTY_ACHIEVEMENTS.FOLLOWING_CLUES],
    onlyOneAchievementRequired: true
  },
  {
    title: 'Deep Ruins',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Echo Chamber',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Icecrag Ascent',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: 'Ancient Cistern',
    location: 'Gloomhaven',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THROUGH_THE_RUINS],
    onlyOneAchievementRequired: true
  },
  {
    title: 'Ruinous Rift',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.ARTIFACT_LOST],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.STONEBREAKERS_CENSER]
  },
  {
    title: 'Outer Ritual Chamber',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.DARK_BOUNTY]
  },
  {
    title: 'Sanctuary of Gloom',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.AN_INVITATION]
  },
  {
    title: 'Shrine of the Depths',
    location: 'Misty Sea',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND]
  },
  {
    title: 'Plane of Night',
    location: 'Gloomhaven',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.ARTIFACT_RECOVERED],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Decrepit Wood',
    location: 'Lingering Swamp',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND]
  },
  {
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: 'Savvas Armory',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY.PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND],
    onlyOneAchievementRequired: true
  },
  {
    title: 'Scorched Summit',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_DRAKE_AIDED],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND]
  },
  {
    title: 'Gloomhaven Battlements A',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND]
  },
  {
    title: 'Gloomhaven Battlements B',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND]
  },
  {
    title: 'Doom Trench',
    location: 'Misty Sea',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Slave Pens',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Treacherous Divide',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Ancient Defense Network',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_TREASURE]
  },
  {
    title: 'Timeworn Tomb',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND]
  },
  {
    title: 'Realm of the Voice',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_VOICE_FREED],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_SCEPTER_AND_THE_VOICE]
  },
  {
    title: 'Drake Nest',
    location: 'Dagger Forest',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Tribal Assault',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.REDTHORNS_AID]
  },
  {
    title: 'Rebel Swamp',
    location: 'Lingering Swamp',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Nightmare Peak',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.ACROSS_THE_DIVIDE]
  },
  {
    title: 'Lair of the Unseeing Eye',
    location: 'Misty Sea',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THROUGH_THE_TRENCH]
  },
  {
    title: 'Shadow Weald',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.REDTHORNS_AID]
  },
  {
    title: 'Rebel\'s Stand',
    location: 'Lingering Swamp',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Ghost Fortress',
    location: 'Gloomhaven',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.ANNIHILATION_OF_THE_ORDER],
    partyAchievementsRequired: []
  },
  {
    title: 'The Void',
    location: 'Gloomhaven',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_1, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_2, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_3],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Noxious Cellar',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Crypt Basement',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Palace of Ice',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Foggy Thicket',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Bandit\'s Wood',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Investigation',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Bloody Shack',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Forgotten Grove',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Alchemy Lab',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Fading Lighthouse',
    location: 'Lingering Swamp',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Pit of Souls',
    location: 'Lingering Swamp',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Magma Pit',
    location: 'Watcher Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Underwater Lagoon',
    location: 'Misty Sea',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Sulfur Mine',
    location: 'Watcher Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Clockwork Cove',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Arcane Library',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Toxic Moor',
    location: 'Lingering Swamp',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Well of the Unfortunate',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Chained Isle',
    location: 'Misty Sea',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Windswept Highlands',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Oozing Grove',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Rockslide Ridge',
    location: 'Watcher Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Merchant Ship',
    location: 'Misty Sea',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.HIGH_SEA_ESCORT]
  },
  {
    title: 'Overgrown Graveyard',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.GRAVE_JOB]
  },
  {
    title: 'Harrower Hive',
    location: 'Watcher Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Vault of Secrets',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Sacrifice Pit',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Lost Temple',
    location: 'Lingering Swamp',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.FISHS_AID]
  },
  {
    title: 'Vigil Keep',
    location: 'Watcher Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Temple of the Eclipse',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Burning Mountain',
    location: 'Watcher Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Shadows Within',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.BAD_BUSINESS]
  },
  {
    title: 'Crystalline Cave',
    location: 'Copperneck Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.TREMORS]
  },
  {
    title: 'Sun Temple',
    location: 'Watcher Mountains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Harried Village',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Corrupted Cove',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_POISONS_SOURCE]
  },
  {
    title: 'Plane of Water',
    location: 'Gloomhaven',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.WATER_STAFF]
  },
  {
    title: 'Syndicate Hideout',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.SIN_RA]
  },
  {
    title: 'Demonic Rift',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Wild Melee',
    location: 'Dagger Forest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Back Alley Brawl',
    location: 'Gloomhaven',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.DEBT_COLLECTION]
  },
  {
    title: 'Sunken Vessel',
    location: 'Misty Sea',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_MAP_TO_TREASURE]
  },
  {
    title: 'Vermling Nest',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Payment Due',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THROUGH_THE_NEST]
  },
  // KICKSTARTER SCENARIOS
  {
    title: 'Just Another Night',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'A Quatryl Scorned',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Unreliable Medicine',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Unlikely Allies',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'The Sun Spire',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'A Ship in a Storm',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Arrival in Chains',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'The Doctor\'s Lab',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Skewed Perspective',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Panic Room',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  // SOLO SCENARIOS
  {
    title: 'Return to the Black Barrow',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'An Unfortunate Intrusion',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Corrupted Laboratory',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Armory Heist',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Stone Defense',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Rodent Liberation',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Caravan Escort',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Unnatural Insults',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Storage Fees',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Plane of the Wild Beasts',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Harvesting the Night',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Plagued Crypt',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Battle of the Bards',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Corrupted Hunt',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Aftermath',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Elemental Secrets',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'The Caged Bear',
    location: 'Other',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
];
