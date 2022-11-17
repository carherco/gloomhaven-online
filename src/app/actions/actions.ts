import { PARTY_ACHIEVEMENTS, GLOBAL_ACHIEVEMENTS } from '../data/achievements';
import { Cragheart, Tinkerer, Spellweaver, Mindthief, Doomstalker, Brute, Sunkeeper, Elementalist } from '../data/charactersDef';
import { PERSONAL_QUESTS } from '../data/personal-quests';
import { Player } from '../model/player';
import { CampaignStatus, CampaignStatusService } from '../services/campaign-status.service';

export function loadCampaing(): CampaignStatus {

  const players: Player[] = [
    {uid: 'uuid1', email: 'email1@gmail.com', displayName: 'carherco', photoURL: '', emailVerified: true },
    {uid: 'uuid2', email: 'email2@gmail.com', displayName: 'otro', photoURL: '', emailVerified: true },
    {uid: 'uuid3', email: 'email3@gmail.com', displayName: 'otro3', photoURL: '', emailVerified: true },
    {uid: 'uuid4', email: 'email4@gmail.com', displayName: 'otro4', photoURL: '', emailVerified: true },
  ];

  const campaign = new CampaignStatusService();
  campaign.createCampaign('XXXXXXX', players);

  campaign.createCharacter({
    playerId: players[0].uid,
    characterClass: Mindthief,
    name: 'Raticate',
    personalQuest: PERSONAL_QUESTS[532]
  });

  campaign.buyItem({playerName: 'Raticate', itemId: 11});
  campaign.buyItem({playerName: 'Raticate', itemId: 13});

  campaign.createCharacter({
    playerId: players[1].uid,
    characterClass: Brute,
    name: 'Ostiónix',
    personalQuest: PERSONAL_QUESTS[524]
  });

  campaign.buyItem({playerName: 'Ostiónix', itemId: 1});
  campaign.buyItem({playerName: 'Ostiónix', itemId: 12});

  campaign.createCharacter({
    playerId: players[2].uid,
    characterClass: Spellweaver,
    name: 'Maléfica',
    personalQuest: PERSONAL_QUESTS[516]
  });

  campaign.buyItem({playerName: 'Maléfica', itemId: 5});
  campaign.buyItem({playerName: 'Maléfica', itemId: 14});

  campaign.createCharacter({
    playerId: players[3].uid,
    characterClass: Tinkerer,
    name: 'Brad',
    personalQuest: PERSONAL_QUESTS[531]
  });

  campaign.buyItem({playerName: 'Brad', itemId: 6});

  campaign.resolveCityEvent({eventId: 29, discard: false});
  campaign.resolveRoadEvent({eventId: 4, playersResults: [
    { playerName: 'Raticate', playerResults: {g: 2} },
    { playerName: 'Ostiónix', playerResults: {g: 2} },
    { playerName: 'Maléfica', playerResults: {g: 2} },
    { playerName: 'Brad', playerResults: {g: 2} },
  ], discard: true});

  campaign.completeScenario({
    scenarioId: 1,
    level: 1,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 10, g: 18, t: 1} },
      { playerName: 'Ostiónix', playerResults: {xp: 14, g: 8, t: 1, pq: 1} },
      { playerName: 'Maléfica', playerResults: {xp: 12, g: 0, t: 2} },
      { playerName: 'Brad', playerResults: {xp: 10, g: 4, t: 2} },
    ],
    treasuresLooted: [7],
    rewards: {
      partyAchievements: [PARTY_ACHIEVEMENTS.FIRST_STEPS],
    },
    scenariosUnlocked: [2, 65]
  });

  campaign.completeScenario({
    scenarioId: 2,
    level: 1,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 3, g: 20, t: 2} },
      { playerName: 'Ostiónix', playerResults: {xp: 12, g: 6, t: 1, pq: 1} },
      { playerName: 'Maléfica', playerResults: {xp: 11, g: 12, t: 1} },
      { playerName: 'Brad', playerResults: {xp: 10, g: 16, t: 1} },
    ],
    treasuresLooted: [67],
    rewards: {
      prosperity: 1,
      gold: 10
    },
    scenariosUnlocked: [3, 4]
  });

  campaign.buyItem({playerName: 'Ostiónix', itemId: 8});
  campaign.buyItem({playerName: 'Brad', itemId: 9});
  campaign.buyItem({playerName: 'Raticate', itemId: 2});
  campaign.buyItem({playerName: 'Raticate', itemId: 5});
  campaign.buyItem({playerName: 'Raticate', itemId: 7});
  campaign.buyItem({playerName: 'Maléfica', itemId: 13});

  campaign.resolveCityEvent({eventId: 19, playersResults: [
    { playerName: 'Ostiónix', playerResults: {g: -6} },
    { playerName: 'Maléfica', playerResults: {g: -12} },
    { playerName: 'Brad', playerResults: {g: -2} },
  ], discard: true});

  campaign.resolveRoadEvent({eventId: 1, discard: false});

  campaign.completeScenario({
    scenarioId: 3,
    level: 1,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 15, g: 16, t: 1} },
      { playerName: 'Ostiónix', playerResults: {xp: 15, g: 6, t: 1} },
      { playerName: 'Maléfica', playerResults: {xp: 17, g: 4} },
      { playerName: 'Brad', playerResults: {xp: 9, g: 8, t: 2, pq: 1} },
    ],
    rewards: {
      prosperity: 1,
      gold: 15,
      partyAchievements: [PARTY_ACHIEVEMENTS.JEKSERAHS_PLANS]
    },
    scenariosUnlocked: [9, 8]
  });

  campaign.buyItem({playerName: 'Ostiónix', itemId: 3});
  campaign.buyItem({playerName: 'Ostiónix', itemId: 7});
  campaign.buyItem({playerName: 'Raticate', itemId: 8});


  // Raticate: Hostile Takeover / Add three rolling muddle cards / Add two rolling +1 cards
  // Ostiónix: Juggernaut / Ignore negative item effects and add one +1 card / Replace one -1 with one +1 card
  // Maléfica: Icy Blast / Add one +1 wound card / Add two +1 cards
  // Brad: Stamina Booster / Remove two -1 cards / Remove two -1 cards

  campaign.resolveCityEvent({eventId: 15, playersResults: [
    { playerName: 'Raticate', playerResults: {g: -11} },
    { playerName: 'Brad', playerResults: {g: -4} },
  ], discard: true});

  campaign.resolveRoadEvent({eventId: 20, playersResults: [
    { playerName: 'Raticate', playerResults: {xp: 3} },
    { playerName: 'Brad', playerResults: {xp: 3} },
    { playerName: 'Ostiónix', playerResults: {xp: 3} },
    { playerName: 'Maléfica', playerResults: {xp: 3} },
  ], discard: true});

  campaign.completeScenario({
    scenarioId: 9,
    level: 1,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 11, g: 6, t: 2} },
      { playerName: 'Ostiónix', playerResults: {xp: 6, g: 10, t: 1, pq: 4} },
      { playerName: 'Maléfica', playerResults: {xp: 6, g: 10, t:1, pq: 6} },
      { playerName: 'Brad', playerResults: {xp: 14, g: 12, t: 1, pq: 1} },
    ],
    rewards: {
      prosperity: 1,
      gold: 20,
      globalAchievements: [GLOBAL_ACHIEVEMENTS.THE_DEAD_INVADE]
    },
    scenariosUnlocked: [9, 8]
  });

  // Raticate: Add two rolling +1 cards
  // Brad: Ignore Negative Scenario Effects

  return campaign.getStatus();
}
