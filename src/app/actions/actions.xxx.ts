import { PARTY_ACHIEVEMENTS, GLOBAL_ACHIEVEMENTS } from '../data/achievements';
import { Cragheart, Tinkerer, Spellweaver, Mindthief, Doomstalker, Brute, Sunkeeper, Elementalist, Berserker, BeastTyrant, Soothsinger, Quartermaster, Summoner, Scoundrel, Plagueherald } from '../data/charactersDef';
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
    name: 'Mystic',
    personalQuest: PERSONAL_QUESTS[518]
  });

  campaign.gainAbility({playerName: 'Mystic', ability: 'reckless-offensive'});
  campaign.gainPerk({playerName: 'Mystic', perkId: 'bePerk8'});
  campaign.gainPerk({playerName: 'Mystic', perkId: 'bePerk1'});

  campaign.buyItem({playerName: 'Mystic', itemId: 1});
  campaign.buyItem({playerName: 'Mystic', itemId: 12});
  campaign.buyItem({playerName: 'Ostiónix', itemId: 112});
  campaign.buyItem({playerName: 'Brad', itemId: 16});
  campaign.buyItem({playerName: 'Brad', itemId: 13});

  campaign.resolveCityEvent({eventId: 26, rewards: {reputation: 2}, discard: true});

  campaign.completeScenario({
    scenarioId: 11,
    level: 1,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 15, g: 6, t: 0} },
      { playerName: 'Ostiónix', playerResults: {xp: 19, g: 4, t: 0, pq: 4} },
      { playerName: 'Brad', playerResults: {xp: 12, g: 2, t: 1, pq: 1, items: [23]} },
      { playerName: 'Mystic', playerResults: {xp: 11, g: 10, t:1, pq: 1} },
    ],
    rewards: {
      gold: 15,
      reputation: -2,
      prosperity: 2,
      itemDesigns: [113],
      globalAchievements: [GLOBAL_ACHIEVEMENTS.END_OF_THE_INVASION, GLOBAL_ACHIEVEMENTS.CITY_RULE_ECONOMIC]
    },
    scenariosUnlocked: [16, 18]
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
  campaign.buyItem({playerName: 'Mystic', itemId: 4});
  campaign.buyItem({playerName: 'Mystic', itemId: 11});
  campaign.buyItem({playerName: 'Ostiónix', itemId: 13});
  campaign.buyItem({playerName: 'Ostiónix', itemId: 23});
  campaign.buyItem({playerName: 'Raticate', itemId: 17});
  campaign.buyItem({playerName: 'Brad', itemId: 20});
  campaign.buyItem({playerName: 'Brad', itemId: 12});

  campaign.resolveCityEvent({eventId: 24, playersResults: [
    { playerName: 'Raticate', playerResults: {xp: 10} },
    { playerName: 'Brad', playerResults: {xp: 10} },
    { playerName: 'Ostiónix', playerResults: {xp: 10} },
    { playerName: 'Mystic', playerResults: {xp: 10} },
  ], discard: false});

  campaign.resolveRoadEvent({eventId: 13, discard: true});

  campaign.completeScenario({
    scenarioId: 16,
    level: 2,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 12, g: 9, t: 1} },
      { playerName: 'Ostiónix', playerResults: {xp: 14, g: 3, t: 1, pq: 2} },
      { playerName: 'Brad',     playerResults: {xp: 9, g: 9, t: 1, pq: 1} },
      { playerName: 'Mystic', playerResults: {xp: 8, g: 15, t:1, pq: 1} },
    ],
    rewards: {
      itemDesigns: [71]
    },
    scenariosUnlocked: [24, 25],
    treasuresLooted: [1]
  });

  campaign.gainPerk({playerName: 'Ostiónix', perkId: 'brPerk4'});
  campaign.gainPerk({playerName: 'Brad', perkId: 'tiPerk7-1'});

  campaign.completeScenario({
    scenarioId: 24,
    level: 2,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 10, g: 6, t: 1} },
      { playerName: 'Ostiónix', playerResults: {xp: 9, g: 3, t: 2, pq: 4} },
      { playerName: 'Brad',     playerResults: {xp: 18, g: 9, t: 1} },
      { playerName: 'Mystic', playerResults: {xp: 7, g: 18, t:2, pq: 1} },
    ],
    rewards: {partyAchievements: [PARTY_ACHIEVEMENTS.THE_VOICES_COMMAND]},
    scenariosUnlocked: [30, 32, 67],
    treasuresLooted: [70]
  });

  campaign.gainAbility({playerName: 'Ostiónix', ability: 'unstoppable-charge'});
  campaign.gainPerk({playerName: 'Ostiónix', perkId: 'brPerk3-1'});

  campaign.gainAbility({playerName: 'Raticate', ability: 'cranium-overload'});
  campaign.gainPerk({playerName: 'Raticate', perkId: 'mtPerk4'});
  campaign.gainPerk({playerName: 'Raticate', perkId: 'mtPerk5-1'});

  campaign.gainAbility({playerName: 'Brad', ability: 'micro-bots'});
  campaign.gainPerk({playerName: 'Brad', perkId: 'tiPerk2'});

  campaign.gainAbility({playerName: 'Mystic', ability: 'fatal-fury'});
  campaign.gainPerk({playerName: 'Mystic', perkId: 'bePerk2'});
  campaign.gainPerk({playerName: 'Mystic', perkId: 'bePerk10'});

  campaign.resolveCityEvent({eventId: 5, discard: true,
    playersResults: [
      { playerName: 'Ostiónix', playerResults: {t: -1} },
      { playerName: 'Brad',     playerResults: {t: -1} },
      { playerName: 'Mystic', playerResults: {t: -1} },
    ],
    rewards: {prosperity: 1, reputation: 1}
  });

  campaign.makeDonation({playerName: 'Raticate'});
  campaign.makeDonation({playerName: 'Ostiónix'});
  campaign.makeDonation({playerName: 'Brad'});

  campaign.resolveRoadEvent({eventId: 2, discard: false});

  campaign.completeScenario({
    scenarioId: 30,
    level: 2,
    playersResults: [
      { playerName: 'Raticate', playerResults: {xp: 5, g: 6, t: 1, pq: 1} },
      { playerName: 'Ostiónix', playerResults: {xp: 10, g: 0, t: 1, pq: 2} },
      { playerName: 'Brad',     playerResults: {xp: 10, g: 6, t: 1, pq: 1} },
      { playerName: 'Mystic', playerResults: {xp: 4, g: 3, t:2, pq: 1} },
    ],
    rewards: {gold: 10, partyAchievements: [PARTY_ACHIEVEMENTS.THE_SCEPTER_AND_THE_VOICE]},
    scenariosUnlocked: [42]
  });

  campaign.makeDonation({playerName: 'Raticate'});
  campaign.makeDonation({playerName: 'Ostiónix'});
  campaign.makeDonation({playerName: 'Brad'});

  campaign.retireCharacter({name: 'Ostiónix', cityEventsToAdd: [42, 41], roadEventsToAdd: [42, 41]});
  campaign.retireCharacter({name: 'Raticate', cityEventsToAdd: [47, 37], roadEventsToAdd: [47, 37]});

  campaign.createCharacter({
    playerId: players[1].uid,
    characterClass: BeastTyrant,
    name: 'Adolfo',
    personalQuest: PERSONAL_QUESTS[521]
  });

  campaign.gainAbility({playerName: 'Adolfo', ability: 'energizing-strike'});
  campaign.gainAbility({playerName: 'Adolfo', ability: 'vicious-ally'});
  campaign.gainPerk({playerName: 'Adolfo', perkId: 'btPerk1'});
  campaign.gainPerk({playerName: 'Adolfo', perkId: 'btPerk6-1'});
  campaign.gainPerk({playerName: 'Adolfo', perkId: 'btPerk6-2'});

  campaign.buyItem({playerName: 'Adolfo', itemId: 1});
  campaign.buyItem({playerName: 'Adolfo', itemId: 13});
  campaign.buyItem({playerName: 'Adolfo', itemId: 27});

  campaign.createCharacter({
    playerId: players[0].uid,
    characterClass: Soothsinger,
    name: 'Sona',
    personalQuest: PERSONAL_QUESTS[511]
  });

  campaign.gainAbility({ playerName: 'Sona', ability: 'soothing-lullaby' });
  campaign.gainAbility({ playerName: 'Sona', ability: 'echoing-aria' });
  campaign.gainPerk({playerName: 'Sona', perkId: 'ssPerk12-1'});
  campaign.gainPerk({playerName: 'Sona', perkId: 'ssPerk12-2'});
  campaign.gainPerk({playerName: 'Sona', perkId: 'ssPerk11'});

  campaign.buyItem({playerName: 'Sona', itemId: 13});
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});
  campaign.buyItem({playerName: 'Sona', itemId: 17});
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});

  campaign.resolveCityEvent({eventId: 44, discard: true,
    rewards: {reputation: 1}
  });

  campaign.resolveRoadEvent({eventId: 15, discard: false});

  campaign.completeScenario({
    scenarioId: 32,
    level: 2,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 22, g: 12, t: 2} },
      { playerName: 'Adolfo', playerResults: {xp: 15, g: 9, t: 1} },
      { playerName: 'Brad',     playerResults: {xp: 11, g: 9, t: 1, pq: 1} },
      { playerName: 'Mystic', playerResults: {xp: 12, g: 15, t:1, pq: 1} },
    ],
    scenariosUnlocked: [33, 40]
  });

  campaign.gainPerk({playerName: 'Mystic', perkId: 'bePerk3-1'});

  campaign.makeDonation({playerName: 'Brad'});

  campaign.retireCharacter({name: 'Brad', cityEventsToAdd: [43, 40], roadEventsToAdd: [43, 40]});

  campaign.createCharacter({
    playerId: players[1].uid,
    characterClass: Elementalist,
    name: 'Víctor',
    personalQuest: PERSONAL_QUESTS[529]
  });

  campaign.gainAbility({ playerName: 'Víctor', ability: 'crystallizing-blast' });
  campaign.gainAbility({ playerName: 'Víctor', ability: 'chain-lightning' });
  campaign.gainPerk({playerName: 'Víctor', perkId: 'elPerk1-1'});
  campaign.gainPerk({playerName: 'Víctor', perkId: 'elPerk1-2'});
  campaign.gainPerk({playerName: 'Víctor', perkId: 'elPerk8'});

  campaign.sellItem({playerName: 'Mystic', itemId: 1});
  campaign.buyItem({playerName: 'Mystic', itemId: 71});
  campaign.buyItem({playerName: 'Mystic', itemId: 23});

  campaign.buyItem({playerName: 'Víctor', itemId: 71});
  campaign.buyItem({playerName: 'Víctor', itemId: 13});

  campaign.resolveCityEvent({eventId: 24, discard: false,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 10} },
      { playerName: 'Adolfo', playerResults: {xp: 10} },
      { playerName: 'Víctor', playerResults: {xp: 10} },
      { playerName: 'Mystic', playerResults: {xp: 10} },
    ]
  });

  campaign.resolveRoadEvent({eventId: 7, discard: true});

  campaign.failScenario({
    scenarioId: 4,
    level: 2,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 19, g: 15} },
      { playerName: 'Adolfo', playerResults: {xp: 13, g: 0} },
      { playerName: 'Víctor', playerResults: {xp: 9, g: 15} },
    ],
    treasuresLooted: [46, 38],
    rewards: {itemDesigns: [123]}
  });

  campaign.gainAbility({ playerName: 'Sona', ability: 'disorienting-dirge' });
  campaign.gainPerk({playerName: 'Sona', perkId: 'ssPerk10'});

  campaign.buyItem({playerName: 'Víctor', itemId: 20});
  campaign.buyItem({playerName: 'Sona', itemId: 1});
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});
  campaign.buyItem({playerName: 'Sona', itemId: 20});
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});

  campaign.resolveCityEvent({eventId: 13, discard: false,
    playersResults: [
      { playerName: 'Sona', playerResults: {g: -2} },
      { playerName: 'Adolfo', playerResults: {g: -3} },
      { playerName: 'Víctor', playerResults: {g: -3} },
      { playerName: 'Mystic', playerResults: {g: -1} },
    ]
  });

  campaign.resolveRoadEvent({eventId: 11, discard: false});

  campaign.completeScenario({
    scenarioId: 33,
    level: 2,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 24, g: 12} },
      { playerName: 'Adolfo', playerResults: {xp: 19, g: 0, t: 1} },
      { playerName: 'Víctor', playerResults: {xp: 9, g: 0, t: 1} },
      { playerName: 'Mystic', playerResults: {xp: 7, g: 12, pq: 1} },
    ],
    rewards: {partyAchievements: [PARTY_ACHIEVEMENTS.THE_VOICES_TREASURE, PARTY_ACHIEVEMENTS.THE_DRAKES_TREASURE]}
  });

  campaign.gainAbility({ playerName: 'Mystic', ability: 'flurry-of-axes' });
  campaign.gainPerk({ playerName: 'Mystic', perkId: 'bePerk3-2' });

  campaign.gainAbility({ playerName: 'Adolfo', ability: 'punch-through' });
  campaign.gainPerk({ playerName: 'Adolfo', perkId: 'btPerk6-3' });

  campaign.resolveCityEvent({eventId: 36, discard: true,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 5} },
      { playerName: 'Adolfo', playerResults: {xp: 5} },
      { playerName: 'Víctor', playerResults: {xp: 5} },
      { playerName: 'Mystic', playerResults: {xp: 5} },
    ],
    rewards: {reputation: -2}
  });

  campaign.resolveRoadEvent({eventId: 5, discard: true,
    playersResults: [
      { playerName: 'Mystic', playerResults: {items: [106]} },
    ]
  });

  campaign.completeScenario({
    scenarioId: 40,
    level: 2,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 7, g: 6, t: 1} },
      { playerName: 'Adolfo', playerResults: {xp: 6, g: 3} },
      { playerName: 'Víctor', playerResults: {xp: 4, g: 3} },
      { playerName: 'Mystic', playerResults: {xp: 5, g: 6, pq: 1, items: [104]} },
    ],
    treasuresLooted: [47],
    rewards: {globalAchievements: [GLOBAL_ACHIEVEMENTS.ANCIENT_TECHNOLOGY_2]},
    scenariosUnlocked: [41]
  });

  campaign.resolveCityEvent({eventId: 3, discard: true,
    playersResults: [
      { playerName: 'Sona', playerResults: {g: -3, items: [125]} },
      { playerName: 'Víctor', playerResults: {g: -5} },
      { playerName: 'Mystic', playerResults: {g: -2} },
    ],
    rewards: {globalAchievements: [GLOBAL_ACHIEVEMENTS.ANCIENT_TECHNOLOGY_3]}
  });
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});

  campaign.resolveRoadEvent({eventId: 2, discard: false});

  campaign.completeScenario({
    scenarioId: 4,
    level: 2,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 16, g: 15} },
      { playerName: 'Víctor', playerResults: {xp: 12, g: 12, t: 1} },
      { playerName: 'Mystic', playerResults: {xp: 8, g: 21, t: 1, pq: 1} },
    ],
    scenariosUnlocked: [5, 6]
  });

  campaign.gainAbility({ playerName: 'Sona', ability: 'melody-and-harmony' });
  campaign.gainPerk({ playerName: 'Sona', perkId: 'ssPerk2' });

  campaign.gainAbility({ playerName: 'Víctor', ability: 'primal-duality' });
  campaign.gainPerk({ playerName: 'Víctor', perkId: 'elPerk9' });

  campaign.resolveCityEvent({eventId: 21, discard: true});

  campaign.resolveRoadEvent({eventId: 28,
    playersResults: [{ playerName: 'Adolfo', playerResults: {g: 10} }],
    discard: true
  });

  campaign.buyItem({playerName: 'Sona', itemId: 5});
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});
  campaign.buyItem({playerName: 'Sona', itemId: 7});
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});
  campaign.buyItem({playerName: 'Mystic', itemId: 27});

  campaign.completeScenario({
    scenarioId: 41,
    level: 3,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 21, g: 0, t: 2} },
      { playerName: 'Adolfo', playerResults: {xp: 7, g: 0} },
      { playerName: 'Víctor', playerResults: {xp: 3, g: 9, t: 1} },
      { playerName: 'Mystic', playerResults: {xp: 6, g: 9, t: 2, pq: 1} },
    ],
    rewards: {gold: 50, xp: 25, prosperity: 2, t: 2, globalAchievements: [GLOBAL_ACHIEVEMENTS.THE_VOICE_FREED]},
    treasuresLooted: [24],
  });

  campaign.decipherMessage({message: 'The creator has made a request for our spoils. The tweelfth letter holds the key.'});

  campaign.buyItem({playerName: 'Mystic', itemId: 13});

  campaign.gainAbility({ playerName: 'Sona', ability: 'pull-the-strings' });
  campaign.gainPerk({ playerName: 'Sona', perkId: 'ssPerk1-1' });
  campaign.gainPerk({ playerName: 'Sona', perkId: 'ssPerk1-2' });

  campaign.gainAbility({ playerName: 'Mystic', ability: 'shiny-distraction' });
  campaign.gainPerk({ playerName: 'Mystic', perkId: 'bePerk4-1' });
  campaign.gainPerk({ playerName: 'Mystic', perkId: 'bePerk5-1' });

  campaign.gainAbility({ playerName: 'Adolfo', ability: 'rampage' });
  campaign.gainPerk({ playerName: 'Adolfo', perkId: 'btPerk2-1' });
  campaign.gainPerk({ playerName: 'Adolfo', perkId: 'btPerk2-2' });

  campaign.gainPerk({ playerName: 'Víctor', perkId: 'elPerk4' });

  campaign.buyItem({ playerName: 'Sona', itemId: 8 });
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});

  campaign.resolveCityEvent({eventId: 10, discard: true,
    rewards: {reputation: 1}
  });

  campaign.makeDonation({playerName: 'Adolfo'});
  campaign.makeDonation({playerName: 'Víctor'});

  // TODO: Open envelope B

  campaign.resolveRoadEvent({eventId: 6, discard: false});

  campaign.completeScenario({
    scenarioId: 25,
    level: 3,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 14, g: 18, t: 1} },
      { playerName: 'Adolfo', playerResults: {xp: 11, g: 9, t: 1} },
      { playerName: 'Víctor', playerResults: {xp: 11, g: 9, items: [108]} },
      { playerName: 'Mystic', playerResults: {xp: 5, g: 15, t: 2, pq: 1} },
    ],
    rewards: {partyAchievements: [PARTY_ACHIEVEMENTS.THE_DRAKES_COMMAND]},
    treasuresLooted: [58],
    scenariosUnlocked: [33, 34]
  });

  campaign.gainGlobalAchievement({
    type: '',
    name: GLOBAL_ACHIEVEMENTS.THE_DRAKE_AIDED
  });

  campaign.addCityEvent(75);
  campaign.addRoadEvent(66);

  campaign.gainPerk({ playerName: 'Mystic', perkId: 'bePerk4-2' });
  campaign.gainAbility({ playerName: 'Víctor', ability: 'winters-edge' });
  campaign.gainPerk({ playerName: 'Víctor', perkId: 'elPerk5' });

  // Open envelope "When you deserve it"
  campaign.unlockScenario({scenariosUnlocked: [76]})

  campaign.makeDonation({playerName: 'Adolfo'});
  campaign.makeDonation({playerName: 'Mystic'});

  campaign.resolveCityEvent({eventId: 4,
    playersResults: [
      { playerName: 'Sona', playerResults: {t: -1} },
      { playerName: 'Adolfo', playerResults: {t: -1} },
      { playerName: 'Víctor', playerResults: {t: -1} },
      { playerName: 'Mystic', playerResults: {t: -1} },
    ], rewards: {reputation: 1}, discard: true});

  campaign.resolveRoadEvent({eventId: 41, discard: true});

  campaign.completeScenario({
    scenarioId: 6,
    level: 3,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 15, g: 18} },
      { playerName: 'Adolfo', playerResults: {xp: 15, g: 9, t: 1} },
      { playerName: 'Víctor', playerResults: {xp: 6, g: 15} },
      { playerName: 'Mystic', playerResults: {xp: 5, g: 3, t: 1, pq: 1, items: [101]} },
    ],
    rewards: {gold: 5, partyAchievements: [PARTY_ACHIEVEMENTS.JEKSERAHS_PLANS, PARTY_ACHIEVEMENTS.DARK_BOUNTY]},
    treasuresLooted: [50],
    scenariosUnlocked: [8]
  });

  campaign.gainAbility({ playerName: 'Adolfo', ability: 'blood-hunger' });
  campaign.gainPerk({ playerName: 'Adolfo', perkId: 'btPerk3-1' });

  campaign.resolveCityEvent({eventId: 24,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 10} },
      { playerName: 'Adolfo', playerResults: {xp: 10} },
      { playerName: 'Víctor', playerResults: {xp: 10} },
      { playerName: 'Mystic', playerResults: {xp: 10} },
    ], discard: false});

  campaign.gainAbility({ playerName: 'Mystic', ability: 'devil-horns' });
  campaign.gainPerk({ playerName: 'Mystic', perkId: 'bePerk9-1' });

  campaign.gainAbility({ playerName: 'Sona', ability: 'nightmare-serenade' });
  campaign.gainPerk({ playerName: 'Sona', perkId: 'ssPerk6' });

  campaign.makeDonation({playerName: 'Adolfo'});
  campaign.makeDonation({playerName: 'Mystic'});

  campaign.sellItem({ playerName: 'Mystic', itemId: 101 });
  campaign.buyItem({ playerName: 'Adolfo', itemId: 101 });

  campaign.buyItem({ playerName: 'Sona', itemId: 3 });
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});
  campaign.buyItem({ playerName: 'Sona', itemId: 12 });
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});
  campaign.buyItem({ playerName: 'Sona', itemId: 11 });
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});
  campaign.buyItem({ playerName: 'Sona', itemId: 18 });
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});

  campaign.resolveRoadEvent({eventId: 22, rewards: {addCityEvents: [74]}, discard: true});

  campaign.completeScenario({
    scenarioId: 5,
    level: 4,
    playersResults: [
      { playerName: 'Sona', playerResults: {xp: 13, g: 8, t: 1} },
      { playerName: 'Adolfo', playerResults: {xp: 13, g: 8, t: 2} },
      { playerName: 'Víctor', playerResults: {xp: 6, g: 31, t: 1} },
      { playerName: 'Mystic', playerResults: {xp: 6, g: 31, t: 1, pq: 1} },
    ],
    treasuresLooted: [4, 28],
    scenariosUnlocked: [10, 14, 19]
  });

  campaign.sellItem({ playerName: 'Sona', itemId: 125 });
  campaign.buyItem({ playerName: 'Sona', itemId: 14 });
  campaign.buyItem({ playerName: 'Sona', itemId: 2 });
  campaign.advancePersonalQuestProgress({playerName: 'Sona'});

  campaign.makeDonation({playerName: 'Sona'});

  campaign.retireCharacter({name: 'Sona', cityEventsToAdd: [54, 32], roadEventsToAdd: [54, 32]});

  campaign.createCharacter({
    playerId: players[0].uid,
    characterClass: Quartermaster,
    name: 'Garen',
    personalQuest: PERSONAL_QUESTS[533]
  });

  campaign.gainAbility({ playerName: 'Garen', ability: 'reforge' });
  campaign.gainAbility({ playerName: 'Garen', ability: 'scroll-of-lightning' });
  campaign.gainAbility({ playerName: 'Garen', ability: 'side-pouch' });
  campaign.gainPerk({ playerName: 'Garen', perkId: 'qmPerk10' });
  campaign.gainPerk({ playerName: 'Garen', perkId: 'qmPerk1-1' });
  campaign.gainPerk({ playerName: 'Garen', perkId: 'qmPerk1-2' });
  campaign.gainPerk({ playerName: 'Garen', perkId: 'qmPerk2' });
  campaign.gainPerk({ playerName: 'Garen', perkId: 'qmPerk4-1' });

  campaign.buyItem({ playerName: 'Garen', itemId: 7 });
  campaign.buyItem({ playerName: 'Garen', itemId: 12 });
  campaign.buyItem({ playerName: 'Garen', itemId: 23 });
  campaign.buyItem({ playerName: 'Garen', itemId: 34 });

  campaign.unlockScenario({scenariosUnlocked: [72]});

  campaign.resolveCityEvent({eventId: 54, rewards: {reputation: 1}, discard: true});

  campaign.makeDonation({playerName: 'Adolfo'});
  campaign.makeDonation({playerName: 'Mystic'});

  campaign.resolveRoadEvent({eventId: 14, rewards: {reputation: 1}, discard: false});

  campaign.completeScenario({
    scenarioId: 14,
    level: 3,
    playersResults: [
      { playerName: 'Adolfo', playerResults: {xp: 14, g: 3, t: 1} },
      { playerName: 'Garen', playerResults: {xp: 4, g: 48, t: 1} },
      { playerName: 'Víctor', playerResults: {xp: 8, g: 0, t: 2} },
      { playerName: 'Mystic', playerResults: {xp: 7, g: 26, t: 1, pq: 1} },
    ],
    treasuresLooted: [26],
    rewards: {globalAchievements: [GLOBAL_ACHIEVEMENTS.THE_POWER_OF_ENHANCEMENT]},
  });

  campaign.sellItem({ playerName: 'Mystic', itemId: 23 });
  campaign.sellItem({ playerName: 'Mystic', itemId: 4 });
  campaign.gainPerk({ playerName: 'Mystic', perkId: 'bePerk6-1' });

  campaign.gainAbility({ playerName: 'Víctor', ability: 'simulacrum' });
  campaign.gainPerk({ playerName: 'Víctor', perkId: 'elPerk2' });
  campaign.gainPerk({ playerName: 'Víctor', perkId: 'elPerk3-1' });

  campaign.enhanceAbility({ playerName: 'Víctor', gold: 50 });
  campaign.buyItem({ playerName: 'Víctor', itemId: 5 });
  campaign.buyItem({ playerName: 'Víctor', itemId: 27 });

  campaign.buyItem({ playerName: 'Garen', itemId: 33 });

  campaign.enhanceAbility({ playerName: 'Mystic', gold: 50 });
  campaign.enhanceAbility({ playerName: 'Mystic', gold: 75 });

  campaign.makeDonation({playerName: 'Adolfo'});

  campaign.resolveCityEvent({eventId: 13, playersResults:[
    { playerName: 'Garen', playerResults: {g: -3} },
    { playerName: 'Adolfo', playerResults: {g: -3} },
    { playerName: 'Víctor', playerResults: {g: -3} },
    { playerName: 'Mystic', playerResults: {g: -3} },
  ], discard: false});
  campaign.resolveRoadEvent({eventId: 30, discard: true});

  campaign.completeScenario({
    scenarioId: 19,
    level: 4,
    playersResults: [
      { playerName: 'Adolfo', playerResults: {xp: 17, g: 8, t: 1} },
      { playerName: 'Garen', playerResults: {xp: 6, g: 56, t: 1} },
      { playerName: 'Víctor', playerResults: {xp: 12, g: 36, t: 1, pq: 1} },
      { playerName: 'Mystic', playerResults: {xp: 8, g: 44, t: 0, pq: 1} },
    ],
    treasuresLooted: [17],
    rewards: {prosperity: 1, partyAchievements: [PARTY_ACHIEVEMENTS.STONEBREAKERS_CENSER]},
    scenariosUnlocked: [27]
  });

  campaign.enhanceAbility({ playerName: 'Garen', gold: 50 });
  campaign.enhanceAbility({ playerName: 'Mystic', gold: 50 });
  campaign.makeDonation({playerName: 'Adolfo'});

  campaign.resolveCityEvent({eventId: 13, playersResults:[
    { playerName: 'Garen', playerResults: {g: -3} },
    { playerName: 'Adolfo', playerResults: {g: -3} },
    { playerName: 'Víctor', playerResults: {g: -3} },
    { playerName: 'Mystic', playerResults: {g: -3} },
  ], discard: false});

  campaign.resolveRoadEvent({eventId: 24, playersResults:[
    { playerName: 'Garen', playerResults: {g: 4} },
    { playerName: 'Adolfo', playerResults: {g: 3} },
    { playerName: 'Víctor', playerResults: {g: 3} },
    { playerName: 'Mystic', playerResults: {g: 0} },
  ], rewards: {scenariosUnlocked: [82]}, discard: true});

  campaign.completeScenario({
    scenarioId: 76,
    level: 4,
    playersResults: [
      { playerName: 'Adolfo', playerResults: {xp: 10, g: 20} },
      { playerName: 'Garen', playerResults: {xp: 3, g: 28, t: 1} },
      { playerName: 'Víctor', playerResults: {xp: 4, g: 28} },
      { playerName: 'Mystic', playerResults: {xp: 6, g: 0, pq: 1} },
    ],
    treasuresLooted: [75],
  });

  campaign.decipherMessage({message: 'We burrow deep but the central clue cannot be found. It is lost to us. The only thing left to do is ask the creator directly. Send him "dust" and nothing else.'});

  campaign.sellItem({ playerName: 'Mystic', itemId: 11 });
  campaign.makeDonation({playerName: 'Mystic'});
  campaign.retireCharacter({name: 'Mystic', cityEventsToAdd: [53, 33], roadEventsToAdd: [53, 33]});

  campaign.createCharacter({
    playerId: players[2].uid,
    characterClass: Summoner,
    name: 'Master of Minions',
    personalQuest: PERSONAL_QUESTS[520]
  });

  campaign.gainAbility({ playerName: 'Master of Minions', ability: 'grasping-the-void' });
  campaign.gainAbility({ playerName: 'Master of Minions', ability: 'earthen-steed' });
  campaign.gainAbility({ playerName: 'Master of Minions', ability: 'divided-mind' });
  campaign.gainPerk({ playerName: 'Master of Minions', perkId: 'suPerk10' });
  campaign.gainPerk({ playerName: 'Master of Minions', perkId: 'suPerk1' });
  campaign.gainPerk({ playerName: 'Master of Minions', perkId: 'suPerk2' });
  campaign.gainPerk({ playerName: 'Master of Minions', perkId: 'suPerk6' });
  campaign.gainPerk({ playerName: 'Master of Minions', perkId: 'suPerk7-1' });

  campaign.completeSoloScenario({
    level: 3,
    playersResults: [
      { playerName: 'Víctor', playerResults: {xp: 12, g: 15, t: 1, items: [149]} },
    ]
  });

  campaign.gainAbility({ playerName: 'Víctor', ability: 'vengeance' });
  campaign.gainPerk({ playerName: 'Víctor', perkId: 'elPerk3-2' });
  campaign.gainPerk({ playerName: 'Víctor', perkId: 'elPerk13' });

  campaign.buyItem({ playerName: 'Master of Minions', itemId: 113 });
  campaign.buyItem({ playerName: 'Master of Minions', itemId: 13 });

  campaign.resolveCityEvent({eventId: 29, rewards: {prosperity: 1}, discard: true});

  campaign.buyItem({ playerName: 'Garen', itemId: 71 });

  campaign.makeDonation({playerName: 'Adolfo'});

  campaign.resolveRoadEvent({eventId: 66, playersResults:[
    { playerName: 'Garen', playerResults: {g: 25} },
    { playerName: 'Adolfo', playerResults: {g: 25} },
    { playerName: 'Víctor', playerResults: {g: 25} },
    { playerName: 'Master of Minions', playerResults: {g: 25} },
  ], discard: true});

  campaign.completeScenario({
    scenarioId: 82,
    level: 3,
    playersResults: [
      { playerName: 'Adolfo', playerResults: {xp: 19, g: 3, t: 1} },
      { playerName: 'Garen', playerResults: {xp: 7, g: 27, t: 1, items: [115]} },
      { playerName: 'Víctor', playerResults: {xp: 9, g: 30, t: 1} },
      { playerName: 'Master of Minions', playerResults: {xp: 14, g: 12, t: 2} },
    ],
    rewards: {reputation: 1}, treasuresLooted: [62],
  });

  campaign.buyItem({ playerName: 'Víctor', itemId: 9 });
  campaign.buyItem({ playerName: 'Adolfo', itemId: 34 });
  campaign.buyItem({ playerName: 'Garen', itemId: 6 });
  campaign.buyItem({ playerName: 'Garen', itemId: 13 });
  campaign.buyItem({ playerName: 'Master of Minions', itemId: 34 });

  campaign.makeDonation({playerName: 'Adolfo'});
  campaign.makeDonation({playerName: 'Garen'});
  campaign.makeDonation({playerName: 'Víctor'});

  campaign.resolveCityEvent({eventId: 12, playersResults:[
    { playerName: 'Garen', playerResults: {g: 10, t: -1} },
    { playerName: 'Adolfo', playerResults: {g: 10, t: -1} },
    { playerName: 'Víctor', playerResults: {g: 10, t: -1} },
    { playerName: 'Master of Minions', playerResults: {g: 10, t: -1} },
  ],rewards: {reputation: 1}, discard: true});

  campaign.buyItem({ playerName: 'Master of Minions', itemId: 27 });

  campaign.resolveRoadEvent({eventId: 36, discard: true});
  campaign.decipherMessage({message: 'Record the page, the word, and the letter - 634.'});

  campaign.completeScenario({
    scenarioId: 67,
    level: 3,
    playersResults: [
      { playerName: 'Adolfo', playerResults: {xp: 11, g: 6, t: 1} },
      { playerName: 'Garen', playerResults: {xp: 8, g: 18, t: 1} },
      { playerName: 'Víctor', playerResults: {xp: 16, g: 12, t: 1} },
      { playerName: 'Master of Minions', playerResults: {xp: 15, g: 6, t: 1, items: [132]} },
    ],
    rewards: {globalAchievements: [GLOBAL_ACHIEVEMENTS.ANCIENT_TECHNOLOGY_4]}, treasuresLooted: [14],
  });

  //Buscar su sitio correcto
  campaign.gainAbility({ playerName: 'Adolfo', ability: 'storm-sigil' });
  campaign.gainPerk({ playerName: 'Adolfo', perkId: 'btPerk3-2' });
  campaign.gainPerk({ playerName: 'Adolfo', perkId: 'btPerk8' });
  //campaign.gainPerk({ playerName: 'Adolfo', perkId: 'btPerk4-1' });
  campaign.gainAbility({ playerName: 'Garen', ability: 'reinforced-steel' });
  campaign.gainPerk({ playerName: 'Garen', perkId: 'qmPerk4-2' });
  campaign.gainPerk({ playerName: 'Garen', perkId: 'qmPerk6' });

  // Última subida de nivel
  campaign.gainAbility({ playerName: 'Adolfo', ability: 'lash-out' });
  campaign.gainPerk({ playerName: 'Adolfo', perkId: 'btPerk4-1' });

  campaign.makeDonation({playerName: 'Adolfo'});
  campaign.makeDonation({playerName: 'Garen'});
  campaign.makeDonation({playerName: 'Víctor'});

  campaign.resolveCityEvent({eventId: 18, playersResults:[
    { playerName: 'Garen', playerResults: {g: 2} },
    { playerName: 'Adolfo', playerResults: {g: 2} },
    { playerName: 'Víctor', playerResults: {g: 2} },
    { playerName: 'Master of Minions', playerResults: {g: 2} },
  ], discard: false});

  campaign.resolveRoadEvent({eventId: 42, discard: true});

  campaign.failScenario({
    scenarioId: 72,
    level: 3,
    playersResults: [
      { playerName: 'Adolfo', playerResults: {xp: 0, g: 0} },
      { playerName: 'Garen', playerResults: {xp: 0, g: 0} },
      { playerName: 'Víctor', playerResults: {xp: 0, g: 0} },
      { playerName: 'Master of Minions', playerResults: {xp: 0, g: 0} },
    ]
  });

  campaign.resolveCityEvent({eventId: 47,
    rewards:{
      reputation: -1,
      scenariosUnlocked: [87],
      partyAchievements: [PARTY_ACHIEVEMENTS.THE_POISONS_SOURCE]
    }, discard: true});

  campaign.makeDonation({playerName: 'Adolfo'});
  campaign.makeDonation({playerName: 'Garen'});
  campaign.makeDonation({playerName: 'Víctor'});

  campaign.resolveRoadEvent({eventId: 37, discard: true});

  campaign.completeScenario({
    scenarioId: 72,
    level: 3,
    playersResults: [
      { playerName: 'Adolfo', playerResults: {xp: 15, g: 9} },
      { playerName: 'Garen', playerResults: {xp: 8, g: 15, t: 1, pq: 3} },
      { playerName: 'Víctor', playerResults: {xp: 6, g: 6} },
      { playerName: 'Master of Minions', playerResults: {xp: 13, g: 0, t: 2} },
    ], rewards: {reputation: 1, prosperity: 1}
  });

  campaign.addCityEvent(80);

  campaign.createCharacter({
    playerId: players[0].uid,
    characterClass: Scoundrel,
    name: 'Mandrágora',
    personalQuest: PERSONAL_QUESTS[526]
  });

  campaign.gainAbility({ playerName: 'Mandrágora', ability: 'open-wound' });
  campaign.gainAbility({ playerName: 'Mandrágora', ability: 'duelists-advance' });
  campaign.gainAbility({ playerName: 'Mandrágora', ability: 'flurry-of-blades' });
  campaign.gainAbility({ playerName: 'Mandrágora', ability: 'cull-the-weak' });
  campaign.gainPerk({ playerName: 'Mandrágora', perkId: 'scPerk1-1' });
  campaign.gainPerk({ playerName: 'Mandrágora', perkId: 'scPerk1-2' });
  campaign.gainPerk({ playerName: 'Mandrágora', perkId: 'scPerk3' });
  campaign.gainPerk({ playerName: 'Mandrágora', perkId: 'scPerk4' });
  campaign.gainPerk({ playerName: 'Mandrágora', perkId: 'scPerk5-1' });
  campaign.buyItem({ playerName: 'Mandrágora', itemId: 2 });
  campaign.buyItem({ playerName: 'Mandrágora', itemId: 12 });
  campaign.buyItem({ playerName: 'Mandrágora', itemId: 26 });
  campaign.buyItem({ playerName: 'Mandrágora', itemId: 30 });

  campaign.gainAbility({ playerName: 'Master of Minions', ability: 'strength-in-numbers' });
  campaign.gainPerk({ playerName: 'Master of Minions', perkId: 'suPerk3-1' });
  campaign.gainPerk({ playerName: 'Master of Minions', perkId: 'suPerk3-2' });

  campaign.buyItem({ playerName: 'Víctor', itemId: 41 });
  campaign.makeDonation({playerName: 'Víctor'});

  campaign.resolveCityEvent({eventId: 6, playersResults:[
    { playerName: 'Garen', playerResults: {xp: 5} },
    { playerName: 'Adolfo', playerResults: {xp: 5} },
    { playerName: 'Víctor', playerResults: {xp: 5} },
    { playerName: 'Master of Minions', playerResults: {xp: 5} },
    { playerName: 'Mandrágora', playerResults: {xp: 5} },
  ], rewards: {prosperity: 1}, discard: true});

  campaign.completeScenario({
    scenarioId: 18,
    level: 3,
    playersResults: [
      { playerName: 'Mandrágora', playerResults: {xp: 3, g: 21, t:1, pq: 1} },
      { playerName: 'Víctor', playerResults: {xp: 9, g: 24} },
      { playerName: 'Master of Minions', playerResults: {xp: 18, g: 21, t: 1} },
    ], treasuresLooted: [63], rewards: {itemDesigns: [95]},  scenariosUnlocked: [14, 23, 26, 43]
  });

  campaign.gainAbility({ playerName: 'Víctor', ability: 'pragmatic-reinforcement' });
  campaign.gainPerk({ playerName: 'Víctor', perkId: 'elPerk6' });

  campaign.makeDonation({playerName: 'Adolfo'});
  campaign.makeDonation({playerName: 'Garen'});
  campaign.makeDonation({playerName: 'Víctor'});

  campaign.resolveCityEvent({eventId: 42,
    rewards:{
      reputation: 1,
      prosperity: 1,
    }, discard: true});

  campaign.resolveRoadEvent({eventId: 26,
    rewards:{
      reputation: 1,
    }, discard: true});

  campaign.completeScenario({
    scenarioId: 43,
    level: 4,
    playersResults: [
      { playerName: 'Adolfo', playerResults: {xp: 19, g: 0, t:1, pq: 1} },
      { playerName: 'Garen', playerResults: {xp: 11, g: 32, t:1, pq: 3, items: [98]} },
      { playerName: 'Víctor', playerResults: {xp: 12, g: 20} },
      { playerName: 'Master of Minions', playerResults: {xp: 28, g: 18} },
    ], rewards: {globalAchievements: [GLOBAL_ACHIEVEMENTS.WATER_BREATHING]}, treasuresLooted: [35]
  });

  campaign.gainAbility({ playerName: 'Garen', ability: 'catastrophic-bomb' });
  campaign.gainPerk({ playerName: 'Garen', perkId: 'qmPerk3-1' });
  campaign.gainPerk({ playerName: 'Garen', perkId: 'qmPerk3-2' });

  campaign.gainAbility({ playerName: 'Master of Minions', ability: 'livinf-mountain' });
  campaign.gainPerk({ playerName: 'Master of Minions', perkId: 'suPerk3-3' });

  campaign.makeDonation({playerName: 'Garen'});
  campaign.makeDonation({playerName: 'Víctor'});

  campaign.buyItem({ playerName: 'Master of Minions', itemId: 16 });
  campaign.buyItem({ playerName: 'Master of Minions', itemId: 12 });
  campaign.buyItem({ playerName: 'Garen', itemId: 41 });

  campaign.resolveCityEvent({eventId: 41, playersResults:[
    { playerName: 'Garen', playerResults: {g: -10} },
    { playerName: 'Mandrágora', playerResults: {items: [34]} },
  ], discard: true});

  campaign.completeScenario({
    scenarioId: 87,
    level: 4,
    playersResults: [
      { playerName: 'Garen', playerResults: {xp: 9, g: 8, t:2, pq: 3} },
      { playerName: 'Víctor', playerResults: {xp: 7, g: 4, t:1} },
      { playerName: 'Master of Minions', playerResults: {xp: 12, g: 4, t:1} },
    ], rewards: {reputation: 1, prosperity: 1, itemDesigns: [89]}, treasuresLooted: [40]
  });

  campaign.gainPerk({ playerName: 'Master of Minions', perkId: 'suPerk4-1' });

  campaign.sellItem({ playerName: 'Garen', itemId: 98 });
  campaign.makeDonation({playerName: 'Garen'});
  campaign.retireCharacter({name: 'Garen', cityEventsToAdd: [49, 35], roadEventsToAdd: [49, 35]});


  campaign.createCharacter({
    playerId: players[0].uid,
    characterClass: Plagueherald,
    name: 'Epidemus',
    personalQuest: PERSONAL_QUESTS[525]
  });

  campaign.gainAbility({ playerName: 'Epidemus', ability: 'rot-maggots' });
  campaign.gainAbility({ playerName: 'Epidemus', ability: 'fetid-flurry' });
  campaign.gainAbility({ playerName: 'Epidemus', ability: 'nightmarish-affliction' });
  campaign.gainAbility({ playerName: 'Epidemus', ability: 'accelerated-end' });
  campaign.gainPerk({ playerName: 'Epidemus', perkId: 'phPerk1' });
  campaign.gainPerk({ playerName: 'Epidemus', perkId: 'phPerk2-1' });
  campaign.gainPerk({ playerName: 'Epidemus', perkId: 'phPerk2-2' });
  campaign.gainPerk({ playerName: 'Epidemus', perkId: 'phPerk6' });
  campaign.gainPerk({ playerName: 'Epidemus', perkId: 'phPerk7' });
  campaign.gainPerk({ playerName: 'Epidemus', perkId: 'phPerk9-1' });
  campaign.gainPerk({ playerName: 'Epidemus', perkId: 'phPerk10' });

  campaign.buyItem({ playerName: 'Epidemus', itemId: 1 });
  campaign.buyItem({ playerName: 'Epidemus', itemId: 12 });
  campaign.buyItem({ playerName: 'Epidemus', itemId: 13 });
  campaign.buyItem({ playerName: 'Epidemus', itemId: 34 });

  campaign.resolveCityEvent({eventId: 49, rewards: {prosperity: 1}, discard: true});

  campaign.buyItem({ playerName: 'Víctor', itemId: 16 });
  campaign.buyItem({ playerName: 'Víctor', itemId: 42 });
  campaign.buyItem({ playerName: 'Víctor', itemId: 89 });

  campaign.makeDonation({playerName: 'Epidemus'});
  campaign.makeDonation({playerName: 'Víctor'});

  campaign.completeScenario({
    scenarioId: 26,
    level: 3,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 7, g: 15} },
      { playerName: 'Víctor', playerResults: {xp: 14, g: 9} },
      { playerName: 'Master of Minions', playerResults: {xp: 7, g: 3, pq:4} },
      { playerName: 'Mandrágora', playerResults: {xp: 10, g: 15, t:1, pq: 1, items:[33]} },
    ], rewards: {gold: 10, reputation: 1, prosperity: 2, partyAchievements: [PARTY_ACHIEVEMENTS.FOLLOWING_CLUES]},
      treasuresLooted: [66], scenariosUnlocked: [22]
  });

  campaign.levelUpCharacterToCityLevel({playerName: 'Mandrágora' });
  campaign.levelUpCharacterToCityLevel({playerName: 'Epidemus' });

  campaign.unlockScenario({scenariosUnlocked: [73]});
  campaign.unblockCharacter({name: 'Sunkeeper', cityEventsToAdd: [31], roadEventsToAdd: [31]});

  // campaign.gainAbility({ playerName: 'Mandrágora', ability: 'cull-the-weak' });
  // campaign.gainPerk({ playerName: 'Mandrágora', perkId: 'scPerk1-1' });

  campaign.gainAbility({ playerName: 'Epidemus', ability: 'stinging-cloud' });
  campaign.gainPerk({ playerName: 'Epidemus', perkId: 'phPerk3-1' });

  campaign.gainAbility({ playerName: 'Víctor', ability: 'eternal-equilibrium' });
  campaign.gainPerk({ playerName: 'Víctor', perkId: 'elPerk12' });

  campaign.buyItem({ playerName: 'Víctor', itemId: 48 });
  campaign.sellItem({ playerName: 'Mandrágora', itemId: 33 });
  campaign.buyItem({ playerName: 'Mandrágora', itemId: 6 });
  campaign.buyItem({ playerName: 'Mandrágora', itemId: 14 });

  campaign.makeDonation({playerName: 'Epidemus'});
  campaign.makeDonation({playerName: 'Víctor'});

  campaign.resolveCityEvent({eventId: 17, rewards: {scenariosUnlocked: [81]}, discard: true});

  campaign.completeScenario({
    scenarioId: 23,
    level: 4,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 4, g: 8, t: 2} },
      { playerName: 'Víctor', playerResults: {xp: 6, g: 4, t: 1} },
      { playerName: 'Master of Minions', playerResults: {xp: 5, g: 4, t: 1, pq: 3} },
      { playerName: 'Mandrágora', playerResults: {xp: 9, g: 12, t: 1, pq: 1} },
    ], rewards: {itemDesigns: [116], globalAchievements: [GLOBAL_ACHIEVEMENTS.ANCIENT_TECHNOLOGY_5], partyAchievements: [PARTY_ACHIEVEMENTS.THROUGH_THE_RUINS]},
      treasuresLooted: [39, 72]
  });

  // Open envelope A
  campaign.makeDonation({playerName: 'Master of Minions'});
  campaign.retireCharacter({name: 'Master of Minions', cityEventsToAdd: [50], roadEventsToAdd: [50], scenariosUnlocked: [66], itemDesigns: [92]});

  campaign.completeSoloScenario({
    level: 4,
    playersResults: [
      { playerName: 'Adolfo', playerResults: {xp: 17, g: 4, items: [150]} },
    ]
  });

  campaign.completeSoloScenario({
    level: 4,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 9, g: 18, items: [144]} },
    ]
  });

  campaign.sellItem({ playerName: 'Víctor', itemId: 13 });
  campaign.sellItem({ playerName: 'Víctor', itemId: 149 });

  campaign.createCharacter({
    playerId: players[2].uid,
    characterClass: Sunkeeper,
    name: 'Solete',
    personalQuest: PERSONAL_QUESTS[522]
  });

  campaign.buyItem({ playerName: 'Solete', itemId: 38 });
  campaign.buyItem({ playerName: 'Solete', itemId: 71 });
  campaign.buyItem({ playerName: 'Solete', itemId: 12 });
  campaign.buyItem({ playerName: 'Solete', itemId: 13 });
  campaign.buyItem({ playerName: 'Solete', itemId: 20 });

  campaign.createCharacter({
    playerId: players[3].uid,
    characterClass: Quartermaster,
    name: 'Oswin el Previsor',
    personalQuest: PERSONAL_QUESTS[530]
  });

  campaign.gainAbility({ playerName: 'Oswin el Previsor', ability: 'reforge' });
  campaign.gainAbility({ playerName: 'Oswin el Previsor', ability: 'continual-supply' });
  campaign.gainAbility({ playerName: 'Oswin el Previsor', ability: 'side-pouch' });
  campaign.gainAbility({ playerName: 'Oswin el Previsor', ability: 'scroll-of-judgment' });
  campaign.gainAbility({ playerName: 'Oswin el Previsor', ability: 'catastrophic-bomb' });
  campaign.gainPerk({ playerName: 'Oswin el Previsor', perkId: 'qmPerk10' });
  campaign.gainPerk({ playerName: 'Oswin el Previsor', perkId: 'qmPerk1-1' });
  campaign.gainPerk({ playerName: 'Oswin el Previsor', perkId: 'qmPerk1-2' });
  campaign.gainPerk({ playerName: 'Oswin el Previsor', perkId: 'qmPerk2' });
  campaign.gainPerk({ playerName: 'Oswin el Previsor', perkId: 'qmPerk3-1' });
  campaign.gainPerk({ playerName: 'Oswin el Previsor', perkId: 'qmPerk3-2' });

  campaign.buyItem({ playerName: 'Oswin el Previsor', itemId: 36 });
  campaign.buyItem({ playerName: 'Oswin el Previsor', itemId: 12 });
  campaign.buyItem({ playerName: 'Oswin el Previsor', itemId: 13 });
  campaign.buyItem({ playerName: 'Oswin el Previsor', itemId: 95 });

  campaign.buyItem({ playerName: 'Epidemus', itemId: 5 });
  campaign.makeDonation({playerName: 'Epidemus'});

  campaign.resolveCityEvent({eventId: 53, discard: true});

  campaign.resolveRoadEvent({eventId: 21, playersResults:[
    { playerName: 'Epidemus', playerResults: {t: -1} }
  ], discard: true});

  campaign.completeScenario({
    scenarioId: 73,
    level: 3,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 11, g: 12, t: 1} },
      { playerName: 'Oswin el Previsor', playerResults: {xp: 10, g: 12} },
      { playerName: 'Solete', playerResults: {xp: 15, g: 6, pq: 1} },
    ], rewards: {reputation: 1}
  });

  campaign.makeDonation({playerName: 'Epidemus'});
  campaign.makeDonation({playerName: 'Víctor'});
  campaign.makeDonation({playerName: 'Adolfo'});

  campaign.resolveCityEvent({eventId: 8, playersResults:[
    { playerName: 'Víctor', playerResults: {g: -15} }
  ], rewards: {scenariosUnlocked: [93], partyAchievements: [PARTY_ACHIEVEMENTS.A_MAP_TO_TREASURE]}, discard: true});

  campaign.resolveRoadEvent({eventId: 9, discard: true});

  campaign.completeScenario({
    scenarioId: 81,
    level: 4,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 9, g: 12, t: 1, items: [130]} },
      { playerName: 'Víctor', playerResults: {xp: 10, g: 24, t: 1} },
      { playerName: 'Solete', playerResults: {xp: 5, g: 20, t: 2, pq: 1} },
      { playerName: 'Adolfo', playerResults: {xp: 15, g: 4, pq: 1} }
    ], rewards: {xp: 10}, treasuresLooted: [68]
  });

  campaign.makeDonation({playerName: 'Epidemus'});
  campaign.gainAbility({ playerName: 'Epidemus', ability: 'baneful-hex' });
  campaign.gainPerk({ playerName: 'Epidemus', perkId: 'phPerk9-2' });
  campaign.buyItem({playerName: 'Mandrágora', itemId: 112});

  campaign.resolveCityEvent({eventId: 25, playersResults:[
    { playerName: 'Víctor', playerResults: {g: -10} }
  ], discard: true});

  campaign.resolveRoadEvent({eventId: 17, rewards: {prosperity: 1}, discard: true});

  campaign.completeScenario({
    scenarioId: 10,
    level: 4,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 12, g: 28, t: 1} },
      { playerName: 'Oswin el Previsor', playerResults: {xp: 9, g: 24, t: 1} },
      { playerName: 'Solete', playerResults: {xp: 12, g: 20, t: 1} },
      { playerName: 'Mandrágora', playerResults: {xp: 13, g: 8} }
    ],
    rewards: {itemDesigns: [83], partyAchievements: [PARTY_ACHIEVEMENTS.A_DEMONS_ERRAND]},
    treasuresLooted: [11],
    scenariosUnlocked: [21, 22]
  });

  campaign.completeSoloScenario({
    level: 3,
    playersResults: [
      { playerName: 'Oswin el Previsor', playerResults: {xp: 6, g: 12, items: [141]} },
    ]
  });

  campaign.buyItem({ playerName: 'Oswin el Previsor', itemId: 16 });
  campaign.buyItem({ playerName: 'Oswin el Previsor', itemId: 34 });

  campaign.completeSoloScenario({
    level: 4,
    playersResults: [
      { playerName: 'Solete', playerResults: {xp: 10, g: 16, items: [140]} },
    ]
  });

  campaign.completeSoloScenario({
    level: 3,
    playersResults: [
      { playerName: 'Mandrágora', playerResults: {xp: 11, g: 15, items: [137]} },
    ]
  });

  campaign.makeDonation({playerName: 'Epidemus'});
  campaign.makeDonation({playerName: 'Mandrágora'});
  campaign.sellItem({ playerName: 'Mandrágora', itemId: 112 });
  campaign.sellItem({ playerName: 'Mandrágora', itemId: 26 });
  campaign.buyItem({ playerName: 'Mandrágora', itemId: 11 });

  campaign.resolveCityEvent({eventId: 16, playersResults:[
    { playerName: 'Víctor', playerResults: {g: -10} }
  ], rewards: {addCityEvents: [70]}, discard: true});

  campaign.resolveRoadEvent({eventId: 3, discard: false});

  campaign.completeScenario({
    scenarioId: 22,
    level: 4,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 6, g: 24, t: 1} },
      { playerName: 'Oswin el Previsor', playerResults: {xp: 16, g: 28, t: 1} },
      { playerName: 'Solete', playerResults: {xp: 9, g: 4} },
      { playerName: 'Mandrágora', playerResults: {xp: 6, g: 8, t: 2} }
    ],
    rewards: {globalAchievements: [GLOBAL_ACHIEVEMENTS.ARTIFACT_RECOVERED]},
    treasuresLooted: [21],
    scenariosUnlocked: [31, 35, 36]
  });

  campaign.gainAbility({ playerName: 'Oswin el Previsor', ability: 'scroll-of-blizzards' });
  campaign.gainPerk({ playerName: 'Oswin el Previsor', perkId: 'qmPerk9-1' });
  campaign.gainAbility({ playerName: 'Mandrágora', ability: 'stick-to-the-shadows' });
  //campaign.gainPerk({ playerName: 'Mandrágora', perkId: 'scPerk1-1' });
  //campaign.gainPerk({ playerName: 'Mandrágora', perkId: 'scPerk1-1' });

  campaign.makeDonation({playerName: 'Epidemus'});
  campaign.makeDonation({playerName: 'Mandrágora'});

  campaign.buyItem({playerName: 'Solete', itemId: 44});
  campaign.buyItem({playerName: 'Solete', itemId: 18});
  campaign.buyItem({playerName: 'Epidemus', itemId: 33});

  campaign.resolveCityEvent({eventId: 40, playersResults:[
    { playerName: 'Oswin el Previsor', playerResults: {items: [102]} }
  ], rewards: {reputation: 1}, discard: true});

  campaign.sellItem({playerName: 'Oswin el Previsor', itemId: 102});

  campaign.completeScenario({
    scenarioId: 31,
    level: 4,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 9, g: 4, t: 1, items: [100]} },
      { playerName: 'Oswin el Previsor', playerResults: {xp: 11, g: 32, t: 1} },
      { playerName: 'Solete', playerResults: {xp: 11, g: 12, t: 1} },
      { playerName: 'Mandrágora', playerResults: {xp: 22, g: 8, t: 1, pq: 1} }
    ],
    rewards: {globalAchievements: [GLOBAL_ACHIEVEMENTS.ARTIFACT_CLEANSED]},
    treasuresLooted: [69],
    scenariosUnlocked: [43, 37, 38, 39]
  });

  campaign.unlockScenario({scenariosUnlocked: [57]});

  campaign.makeDonation({playerName: 'Epidemus'});
  campaign.makeDonation({playerName: 'Mandrágora'});

  campaign.resolveCityEvent({eventId: 1, playersResults:[
      { playerName: 'Epidemus', playerResults: {xp: 10, g: -5} },
      { playerName: 'Oswin el Previsor', playerResults: {xp: 10, g: -5} },
      { playerName: 'Solete', playerResults: {xp: 10, g: -5} },
      { playerName: 'Mandrágora', playerResults: {xp: 10, g: -5} },
      { playerName: 'Adolfo', playerResults: {xp: 10, g: -5} },
      { playerName: 'Víctor', playerResults: {xp: 10, g: -5} }
  ], discard: false});

  campaign.enhanceAbility({ playerName: 'Mandrágora', gold: 30 });
  campaign.buyItem({playerName: 'Oswin el Previsor', itemId: 41});

  campaign.completeScenario({
    scenarioId: 57,
    level: 4,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 5, g: 8} },
      { playerName: 'Oswin el Previsor', playerResults: {xp: 4, g: 16, items: [44]} },
      { playerName: 'Solete', playerResults: {xp: 9, g: 4, pq: 1} },
      { playerName: 'Mandrágora', playerResults: {xp: 6, g: 8, t: 1} }
    ],
    rewards: {reputation: 1, itemDesigns: [90]},
    treasuresLooted: [22, 3],
    scenariosUnlocked: [58]
  });

  campaign.sellItem({playerName: 'Oswin el Previsor', itemId: 44});
  campaign.buyItem({playerName: 'Oswin el Previsor', itemId: 17});
  campaign.buyItem({playerName: 'Oswin el Previsor', itemId: 10});

  campaign.makeDonation({playerName: 'Epidemus'});

  campaign.resolveCityEvent({eventId: 70, rewards: {prosperity: 1}, discard: true});

  campaign.completeScenario({
    scenarioId: 58,
    level: 4,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 6, g: 0, t: 2} },
      { playerName: 'Oswin el Previsor', playerResults: {xp: 14, g: 32, t: 1} },
      { playerName: 'Solete', playerResults: {xp: 6, g: 32, t: 2, pq: 1} },
      { playerName: 'Mandrágora', playerResults: {xp: 9, g: 12, t: 1} }
    ],
    rewards: {reputation: 2}
  });

  campaign.makeDonation({playerName: 'Mandrágora'});
  campaign.retireCharacter({name: 'Mandrágora', cityEventsToAdd: [45], roadEventsToAdd: [45]});
  campaign.openEnvelopeX();

  campaign.makeDonation({playerName: 'Epidemus'});
  campaign.enhanceAbility({ playerName: 'Solete', gold: 50 });

  campaign.resolveCityEvent({eventId: 9, rewards: {prosperity: 1}, discard: true});
  campaign.resolveRoadEvent({eventId: 19, rewards: {reputation: 1}, discard: true});

  campaign.completeScenario({
    scenarioId: 38,
    level: 5,
    playersResults: [
      { playerName: 'Epidemus', playerResults: {xp: 3, g: 16, t: 0} },
      { playerName: 'Oswin el Previsor', playerResults: {xp: 14, g: 32, t: 1} },
      { playerName: 'Solete', playerResults: {xp: 7, g: 4, t: 1, items: [97]} },
      { playerName: 'Adolfo', playerResults: {xp: 10, g: 0, t: 1, pq: 1} }
    ],
    rewards: {reputation: 1, partyAchievements: [PARTY_ACHIEVEMENTS.REDTHORNS_AID]}, treasuresLooted: [29], scenariosUnlocked: [44, 48]
  });

  campaign.sellItem({playerName: 'Solete', itemId: 97});

  return campaign.getStatus();
}
