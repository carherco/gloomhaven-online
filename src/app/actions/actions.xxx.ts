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
    name: 'Bruto',
    personalQuest: PERSONAL_QUESTS[524]
  });

  campaign.buyItem({playerName: 'Bruto', itemId: 1});
  campaign.buyItem({playerName: 'Bruto', itemId: 12});

  campaign.createCharacter({
    playerId: players[2].uid,
    characterClass: Spellweaver,
    name: 'Maga',
    personalQuest: PERSONAL_QUESTS[516]
  });

  campaign.buyItem({playerName: 'Maga', itemId: 5});
  campaign.buyItem({playerName: 'Maga', itemId: 14});

  campaign.createCharacter({
    playerId: players[3].uid,
    characterClass: Tinkerer,
    name: 'Carlos',
    personalQuest: PERSONAL_QUESTS[531]
  });

  campaign.buyItem({playerName: 'Carlos', itemId: 6});

  campaign.resolveCityEvent({eventId: 29, discard: false});
  campaign.resolveRoadEvent({eventId: 4, playersResults: [
    { playerName: 'Raticate', playerResults: {g: 2} },
    { playerName: 'Bruto', playerResults: {g: 2} },
    { playerName: 'Maga', playerResults: {g: 2} },
    { playerName: 'Carlos', playerResults: {g: 2} },
  ], discard: true});

  campaign.completeScenario({
    scenarioId: 1,
    level: 1,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 10, g: 8, t: 1} },
      { playerName: 'Bruto', playerResults: {xp: 14, g: 8, t: 1, pq: 1} },
      { playerName: 'Maga', playerResults: {xp: 12, g: 0, t: 2} },
      { playerName: 'Carlos', playerResults: {xp: 10, g: 4, t: 2} },
    ],
    rewards: {
      partyAchievements: [PARTY_ACHIEVEMENTS.FIRST_STEPS],
    },
    scenariosUnlocked: [2]
  });

  campaign.completeScenario({
    scenarioId: 2,
    level: 1,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 3, g: 14, t: 2} },
      { playerName: 'Bruto', playerResults: {xp: 12, g: 6, t: 1, pq: 1} },
      { playerName: 'Maga', playerResults: {xp: 11, g: 12, t: 1} },
      { playerName: 'Carlos', playerResults: {xp: 10, g: 16, t: 1} },
    ],
    rewards: {
      prosperity: 1,
      gold: 10
    },
    scenariosUnlocked: [3, 4]
  });

  return campaign.getStatus();
}
