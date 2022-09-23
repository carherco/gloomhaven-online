import { PARTY_ACHIEVEMENTS, GLOBAL_ACHIEVEMENTS } from '../data/achievements';
import { Cragheart, Tinkerer, Spellweaver, Mindthief, Doomstalker, Brute, Sunkeeper, Elementalist, Scoundrel } from '../data/charactersDef';
import { PERSONAL_QUESTS } from '../data/personal-quests';
import { Player } from '../model/player';
import { CampaignStatus, CampaignStatusService } from '../services/campaign-status.service';

export function loadCampaing(): CampaignStatus {

  const players: Player[] = [
    {uid: 'uuid1', email: 'email1@gmail.com', displayName: 'Beatriz', photoURL: '', emailVerified: true },
    {uid: 'uuid2', email: 'email2@gmail.com', displayName: 'Jose Luis', photoURL: '', emailVerified: true },
    {uid: 'uuid3', email: 'email3@gmail.com', displayName: 'Carlos', photoURL: '', emailVerified: true },
    {uid: 'uuid4', email: 'email4@gmail.com', displayName: 'Isabel', photoURL: '', emailVerified: true },
  ];

  const campaign = new CampaignStatusService();
  campaign.createCampaign('Envelope openers', players);

  campaign.createCharacter({
    playerId: players[0].uid,
    characterClass: Scoundrel,
    name: 'Neyra',
    personalQuest: PERSONAL_QUESTS[518]
  });

  campaign.buyItem({playerName: 'Neyra', itemId: 4});
  campaign.buyItem({playerName: 'Neyra', itemId: 13});

  campaign.createCharacter({
    playerId: players[1].uid,
    characterClass: Tinkerer,
    name: 'Cachivacher',
    personalQuest: PERSONAL_QUESTS[523]
  });

  campaign.buyItem({playerName: 'Cachivacher', itemId: 6});

  campaign.createCharacter({
    playerId: players[2].uid,
    characterClass: Spellweaver,
    name: 'Morgana',
    personalQuest: PERSONAL_QUESTS[520]
  });

  campaign.buyItem({playerName: 'Morgana', itemId: 4});
  campaign.buyItem({playerName: 'Morgana', itemId: 14});

  campaign.createCharacter({
    playerId: players[3].uid,
    characterClass: Mindthief,
    name: 'Titiritero',
    personalQuest: PERSONAL_QUESTS[510]
  });

  campaign.buyItem({playerName: 'Titiritero', itemId: 11});
  campaign.buyItem({playerName: 'Titiritero', itemId: 13});

  campaign.resolveRoadEvent({eventId: 14, discard: false});

  campaign.completeScenario({
    scenarioId: 1,
    level: 1,
    playersResults: [
      { playerName: 'Neyra', playerResults: {xp: 11, g: 10, t: 2, pq: 1} },
      { playerName: 'Cachivacher', playerResults: {xp: 6, g: 8, t: 0} },
      { playerName: 'Morgana', playerResults: {xp: 4, g: 4, t: 1} },
      { playerName: 'Titiritero', playerResults: {xp: 9, g: 4, t: 1} },
    ],
    rewards: {
      partyAchievements: [PARTY_ACHIEVEMENTS.FIRST_STEPS],
    },
    scenariosUnlocked: [2]
  });

  return campaign.getStatus();
}
