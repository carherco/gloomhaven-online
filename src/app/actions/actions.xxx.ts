import { PARTY_ACHIEVEMENTS, GLOBAL_ACHIEVEMENTS } from '../data/achievements';
import { Cragheart, Tinkerer, Spellweaver, Mindthief, Doomstalker, Brute, Sunkeeper, Elementalist, Berserker } from '../data/charactersDef';
import { PERSONAL_QUESTS } from '../data/personal-quests';
import { Player } from '../model/player';
import { CampaignStatus, CampaignStatusService } from '../services/campaign-status.service';

export function loadCampaing(): CampaignStatus {

  const players: Player[] = [
    {uid: 'uuid1', email: 'email1@gmail.com', displayName: 'Adri', photoURL: '', emailVerified: true },
    {uid: 'uuid2', email: 'email2@gmail.com', displayName: 'Álvaro', photoURL: '', emailVerified: true },
    {uid: 'uuid3', email: 'email3@gmail.com', displayName: 'Isa', photoURL: '', emailVerified: true },
    {uid: 'uuid4', email: 'email4@gmail.com', displayName: 'Carlos', photoURL: '', emailVerified: true },
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

  campaign.gainPerk({playerName: 'Brad', perkId: 'tiPerk1-1'});
  campaign.gainPerk({playerName: 'Raticate', perkId: 'mtPerk8'});
  campaign.gainPerk({playerName: 'Maléfica', perkId: 'swPerk3-1'});

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

  campaign.gainAbility({playerName: 'Ostiónix', ability: 'juggernaut'});
  campaign.gainAbility({playerName: 'Maléfica', ability: 'icy-blast'});
  campaign.gainAbility({playerName: 'Raticate', ability: 'hostile-takeover'});
  campaign.gainAbility({playerName: 'Brad', ability: 'stamina-booster'});
  campaign.gainPerk({playerName: 'Ostiónix', perkId: 'brPerk11'});
  campaign.gainPerk({playerName: 'Ostiónix', perkId: 'brPerk2'});
  campaign.gainPerk({playerName: 'Maléfica', perkId: 'swPerk5'});
  campaign.gainPerk({playerName: 'Raticate', perkId: 'mtPerk6-1'});
  campaign.gainPerk({playerName: 'Brad', perkId: 'tiPerk1-2'});

  campaign.buyItem({playerName: 'Ostiónix', itemId: 3});
  campaign.buyItem({playerName: 'Ostiónix', itemId: 7});
  campaign.buyItem({playerName: 'Raticate', itemId: 8});

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
      { playerName: 'Ostiónix', playerResults: {xp: 10, g: 10, t: 1, pq: 4} },
      { playerName: 'Maléfica', playerResults: {xp: 8, g: 10, t:1, pq: 6} },
      { playerName: 'Brad', playerResults: {xp: 14, g: 12, t: 1, pq: 1} },
    ],
    rewards: {
      prosperity: 1,
      gold: 20,
      globalAchievements: [GLOBAL_ACHIEVEMENTS.THE_DEAD_INVADE]
    },
    scenariosUnlocked: [11, 12]
  });

  campaign.gainPerk({playerName: 'Brad', perkId: 'tiPerk11'});
  campaign.gainPerk({playerName: 'Raticate', perkId: 'mtPerk6-2'});

  campaign.resolveCityEvent({
    eventId: 11,
    playersResults: [
      { playerName: 'Brad', playerResults: {g: -5} },
    ],
    rewards: {itemDesigns: [80]},
    discard: true
  });

  campaign.buyItem({playerName: 'Maléfica', itemId: 6});
  campaign.buyItem({playerName: 'Maléfica', itemId: 1});
  campaign.buyItem({playerName: 'Brad', itemId: 2});
  campaign.buyItem({playerName: 'Brad', itemId: 14});

  campaign.resolveRoadEvent({eventId: 29, discard: true});

  campaign.completeScenario({
    scenarioId: 65,
    level: 1,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 15, g: 16, t: 1, pq: 1} },
      { playerName: 'Ostiónix', playerResults: {xp: 10, g: 4, t: 1, pq: 3} },
      { playerName: 'Maléfica', playerResults: {xp: 17, g: 6, t:0, pq: 9} },
      { playerName: 'Brad', playerResults: {xp: 8, g: 16, t: 1, pq: 0} },
    ],
    rewards: {
      itemDesigns: [112],
      globalAchievements: [GLOBAL_ACHIEVEMENTS.ANCIENT_TECHNOLOGY_1]
    },
  });

  campaign.sellItem({playerName: 'Maléfica', itemId: 14});
  campaign.makeDonation({playerName: 'Maléfica'});

  campaign.retireCharacter({name: 'Maléfica', cityEventsToAdd: [44, 36], roadEventsToAdd: [44, 36]});

  campaign.createCharacter({
    playerId: players[2].uid,
    characterClass: Berserker,
    name: 'Berserker',
    personalQuest: PERSONAL_QUESTS[518]
  });

  campaign.gainAbility({playerName: 'Berserker', ability: 'reckless-offensive'});
  campaign.gainPerk({playerName: 'Berserker', perkId: 'bePerk8'});
  campaign.gainPerk({playerName: 'Berserker', perkId: 'bePerk1'});

  campaign.buyItem({playerName: 'Berserker', itemId: 1});
  campaign.buyItem({playerName: 'Berserker', itemId: 12});
  campaign.buyItem({playerName: 'Ostiónix', itemId: 112});
  campaign.buyItem({playerName: 'Brad', itemId: 16});
  campaign.buyItem({playerName: 'Brad', itemId: 13});

  campaign.resolveCityEvent({eventId: 26, rewards: {reputation: 2}, discard: true});

  campaign.completeScenario({
    scenarioId: 11,
    level: 1,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 15, g: 6, t: 0, pq: 0} },
      { playerName: 'Ostiónix', playerResults: {xp: 19, g: 4, t: 0, pq: 4} },
      { playerName: 'Brad', playerResults: {xp: 12, g: 2, t: 1, pq: 1, items: [23]} },
      { playerName: 'Berserker', playerResults: {xp: 10, g: 6, t:1, pq: 1} },
    ],
    rewards: {
      gold: 15,
      reputation: -2,
      prosperity: 2,
      itemDesigns: [113],
      globalAchievements: [GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION, GLOBAL_ACHIEVEMENTS.CITY_RULE_ECONOMIC]
    },
  });

  campaign.gainAbility({playerName: 'Ostiónix', ability: 'hook-and-chain'});
  campaign.gainAbility({playerName: 'Raticate', ability: 'brain-leech'});
  campaign.gainAbility({playerName: 'Brad', ability: 'crank-bow'});
  campaign.gainPerk({playerName: 'Ostiónix', perkId: 'brPerk1'});
  campaign.gainPerk({playerName: 'Raticate', perkId: 'mtPerk12'});
  campaign.gainPerk({playerName: 'Brad', perkId: 'tiPerk4'});

  campaign.sellItem({playerName: 'Brad', itemId: 23});
  campaign.sellItem({playerName: 'Ostiónix', itemId: 3});
  campaign.sellItem({playerName: 'Ostiónix', itemId: 8});
  campaign.sellItem({playerName: 'Raticate', itemId: 7});
  campaign.buyItem({playerName: 'Berserker', itemId: 4});
  campaign.buyItem({playerName: 'Berserker', itemId: 11});
  campaign.buyItem({playerName: 'Ostiónix', itemId: 13});
  campaign.buyItem({playerName: 'Ostiónix', itemId: 23});
  campaign.buyItem({playerName: 'Raticate', itemId: 17});
  campaign.buyItem({playerName: 'Brad', itemId: 20});
  campaign.buyItem({playerName: 'Brad', itemId: 12});

  campaign.resolveCityEvent({eventId: 24, playersResults: [
    { playerName: 'Raticate', playerResults: {xp: 10} },
    { playerName: 'Brad', playerResults: {xp: 10} },
    { playerName: 'Ostiónix', playerResults: {xp: 10} },
    { playerName: 'Berserker', playerResults: {xp: 10} },
  ], discard: false});

  campaign.resolveRoadEvent({eventId: 13, discard: true});

  return campaign.getStatus();
}
