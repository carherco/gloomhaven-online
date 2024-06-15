import { PARTY_ACHIEVEMENTS, GLOBAL_ACHIEVEMENTS } from '../data/achievements';
import { Cragheart, Tinkerer, Spellweaver, Mindthief, Doomstalker, Brute, Sunkeeper, Elementalist, Berserker, BeastTyrant, Soothsinger, Quartermaster, Summoner } from '../data/charactersDef';
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

  // TODO: Abrir sobre B

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
    playerId: players[0].uid,
    characterClass: Summoner,
    name: 'Master of Minions',
    personalQuest: PERSONAL_QUESTS[520]
  });

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
      { playerName: 'Master of Minions', playerResults: {xp: 14, g: 12, t: 1} },
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
  campaign.decipherMessage({message: 'Record the page, the word, and the letter - 834.'});

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





  return campaign.getStatus();
}
