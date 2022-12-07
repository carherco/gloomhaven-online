import * as ACHIEVEMENTS from './achievements';
import * as PARTY from './achievements';

export type Scenario = {
  title: string,
  globalAchievementsRequired: string[],
  globalAchievementsRequiredIncomplete: string[],
  partyAchievementsRequired: string[],
  onlyOneAchievementRequired?: true
};

export type ScenarioStatus = 'Unavailable'|'Available'|'Completed'|'Blocked';
export type ScenarioWithStatus = Scenario & {id: number, status: ScenarioStatus};

export const SCENARIOS: Scenario[] = [
  {
    title: 'dummy',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  }, // dummy scenario 0, just to make indexing by scenario number easier - eg. scenarios[1] refers to scenario number 1
  {
    title: 'Black Barrow',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Barrow Lair',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.FIRST_STEPS]
  },
  {
    title: 'Inox Encampment',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    partyAchievementsRequired: []
  },
  {
    title: 'Crypt of the Damned',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Ruinous Crypt',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Decaying Crypt',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Vibrant Grotto',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Gloomhaven Warehouse',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_DEAD_INVADE],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.JEKSERAHS_PLANS]
  },
  {
    title: 'Diamond Mine',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    partyAchievementsRequired: []
  },
  {
    title: 'Plane of Elemental Power',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: []
  },
  {
    title: 'Gloomhaven Square A',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    partyAchievementsRequired: []
  },
  {
    title: 'Gloomhaven Square B',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION],
    partyAchievementsRequired: []
  },
  {
    title: 'Temple of the Seer',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Frozen Hollow',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Shrine of Strength',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Mountain Pass',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Lost Island',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Abandoned Sewers',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Forgotten Crypt',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Necromancer\'s Sanctum',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_MERCHANT_FLEES],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Infernal Throne',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: []
  },
  {
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: 'Temple of the Elements',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND, PARTY.PARTY_ACHIEVEMENTS.FOLLOWING_CLUES],
    onlyOneAchievementRequired: true
  },
  {
    title: 'Deep Ruins',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Echo Chamber',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Icecrag Ascent',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: 'Ancient Cistern',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THROUGH_THE_RUINS],
    onlyOneAchievementRequired: true
  },
  {
    title: 'Ruinous Rift',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.ARTIFACT_LOST],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.STONEBREAKERS_CENSER]
  },
  {
    title: 'Outer Ritual Chamber',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.DARK_BOUNTY]
  },
  {
    title: 'Sanctuary of Gloom',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.AN_INVITATION]
  },
  {
    title: 'Shrine of the Depths',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND]
  },
  {
    title: 'Plane of Night',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.ARTIFACT_RECOVERED],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Decrepit Wood',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND]
  },
  {
    // note this scenario requires special handling because the party needs EITHER ONE of these achievements as a prerequisite
    title: 'Savvas Armory',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY.PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND],
    onlyOneAchievementRequired: true
  },
  {
    title: 'Scorched Summit',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_DRAKE_AIDED],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND]
  },
  {
    title: 'Gloomhaven Battlements A',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND]
  },
  {
    title: 'Gloomhaven Battlements B',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_RIFT_NEUTRALIZED],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND]
  },
  {
    title: 'Doom Trench',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Slave Pens',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Treacherous Divide',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Ancient Defense Network',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND, PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_TREASURE]
  },
  {
    title: 'Timeworn Tomb',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND]
  },
  {
    title: 'Realm of the Voice',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_SCEPTER_AND_THE_VOICE]
  },
  {
    title: 'Drake Nest',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Tribal Assault',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.REDTHORNS_AID]
  },
  {
    title: 'Rebel Swamp',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Nightmare Peak',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.ACROSS_THE_DIVIDE]
  },
  {
    title: 'Lair of the Unseeing Eye',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THROUGH_THE_TRENCH]
  },
  {
    title: 'Shadow Weald',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.REDTHORNS_AID]
  },
  {
    title: 'Rebel\'s Stand',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Ghost Fortress',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.CITY_RULE_DEMONIC],
    globalAchievementsRequiredIncomplete: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.ANNIHILATION_OF_THE_ORDER],
    partyAchievementsRequired: []
  },
  {
    title: 'The Void',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_1, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_2, ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.END_OF_CORRUPTION_3],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Noxious Cellar',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Crypt Basement',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Palace of Ice',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Foggy Thicket',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Bandit\'s Wood',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Investigation',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Bloody Shack',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Forgotten Grove',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Alchemy Lab',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Fading Lighthouse',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Pit of Souls',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Magma Pit',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Underwater Lagoon',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Sulfur Mine',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Clockwork Cove',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Arcane Library',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Toxic Moor',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Well of the Unfortunate',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Chained Isle',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Windswept Highlands',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Oozing Grove',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Rockslide Ridge',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Merchant Ship',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.HIGH_SEA_ESCORT]
  },
  {
    title: 'Overgrown Graveyard',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.GRAVE_JOB]
  },
  {
    title: 'Harrower Mine',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Vault of Secrets',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Sacrifice Pit',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Lost Temple',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.FISHS_AID]
  },
  {
    title: 'Vigil Keep',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Temple of the Eclipse',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Burning Mountain',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Shadows Within',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.BAD_BUSINESS]
  },
  {
    title: 'Crystalline Cave',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.TREMORS]
  },
  {
    title: 'Sun Temple',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Harried Village',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Corrupted Cove',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THE_POISONS_SOURCE]
  },
  {
    title: 'Plane of Water',
    globalAchievementsRequired: [ACHIEVEMENTS.GLOBAL_ACHIEVEMENTS.WATER_BREATHING],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.WATER_STAFF]
  },
  {
    title: 'Syndicate Hideout',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.SIN_RA]
  },
  {
    title: 'Demonic Rift',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Wild Melee',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Back Alley Brawl',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.DEBT_COLLECTION]
  },
  {
    title: 'Sunken Vessel',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.A_MAP_TO_TREASURE]
  },
  {
    title: 'Vermling Nest',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Payment Due',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: [PARTY.PARTY_ACHIEVEMENTS.THROUGH_THE_NEST]
  },
  // KICKSTARTER SCENARIOS
  {
    title: 'Just Another Night',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'A Quatryl Scorned',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Unreliable Medicine',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Unlikely Allies',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'The Sun Spire',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'A Ship in a Storm',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Arrival in Chains',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'The Doctor\'s Lab',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Skewed Perspective',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Panic Room',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  // SOLO SCENARIOS
  {
    title: 'Return to the Black Barrow',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'An Unfortunate Intrusion',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Corrupted Laboratory',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Armory Heist',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Stone Defense',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Rodent Liberation',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Caravan Escort',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Unnatural Insults',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Storage Fees',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Plane of the Wild Beasts',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Harvesting the Night',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Plagued Crypt',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Battle of the Bards',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Corrupted Hunt',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Aftermath',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'Elemental Secrets',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
  {
    title: 'The Caged Bear',
    globalAchievementsRequired: [],
    globalAchievementsRequiredIncomplete: [],
    partyAchievementsRequired: []
  },
];
