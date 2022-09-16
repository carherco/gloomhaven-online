import { Cragheart, Tinkerer } from '../data/charactersDef';
import { PERSONAL_QUESTS } from '../data/personal-quests';
import { CreateCharacterPayload, GainGlobalAchievementPayload, GainPartyAchievementPayload, CompleteScenarioPayload, BuyItemPayload, SellItemPayload, MakeDonationPayload, ResolveCityEventPayload, ResolveRoadEventPayload } from '../model/actions';
import { Player } from '../model/player';
import { CampaignStatus, INITIAL_STATUS, CampaignStatusService } from '../services/campaign-status.service';

const players: Player[] = [
  {uid: 'uuid1', email: 'email1@gmail.com', displayName: 'carherco', photoURL: '', emailVerified: true },
  {uid: 'uuid2', email: 'email2@gmail.com', displayName: 'otro', photoURL: '', emailVerified: true },
  {uid: 'uuid3', email: 'email3@gmail.com', displayName: 'otro3', photoURL: '', emailVerified: true },
  {uid: 'uuid4', email: 'email4@gmail.com', displayName: 'otro4', photoURL: '', emailVerified: true },
];

function getClonedInitialStatus(): CampaignStatus {
  return {
    party: {
      name: INITIAL_STATUS.party.name,
      reputation: 0,
      achievements: [...INITIAL_STATUS.party.achievements]
    },
    players: [...INITIAL_STATUS.players],
    characters: [...INITIAL_STATUS.characters],
    retiredCharacters: [...INITIAL_STATUS.retiredCharacters],
    city: {
      prosperityPoints: INITIAL_STATUS.city.prosperityPoints,
      prosperityLevel: INITIAL_STATUS.city.prosperityLevel,
      achievements: [...INITIAL_STATUS.city.achievements]
    },
    shop: {
      items: [...INITIAL_STATUS.shop.items],
      priceModifier: INITIAL_STATUS.shop.priceModifier
    },
    amountGoldDonated: INITIAL_STATUS.amountGoldDonated,
    cityEventsDeck: [...INITIAL_STATUS.cityEventsDeck],
    roadEventsDeck: [...INITIAL_STATUS.roadEventsDeck],
    completedScenarios: [...INITIAL_STATUS.completedScenarios],
    unlockedScenarios: [...INITIAL_STATUS.unlockedScenarios],
  };
}

fdescribe('Creación de campaña', () => {
  let campaign: CampaignStatusService;

  beforeEach(() => {
    campaign = new CampaignStatusService();
  });

  it('Con dos jugadores', () => {
    // Act
    campaign.createCampaign('Equipo Fantástico', players);

    // Asserts
    const status = campaign.getStatus();
    expect(status.party.name).toEqual('Equipo Fantástico');
    expect(status.players).toEqual(players);
  });
});

fdescribe('Creación de characters al inicio', () => {
  let campaign: CampaignStatusService;

  beforeEach(() => {
    campaign = new CampaignStatusService();
  });

  it('character creation al inicio', () => {
    // Setup
    const initialStatus = getClonedInitialStatus();
    initialStatus.party.name = 'Dummy Name';
    initialStatus.players = players;

    campaign.loadStatus(initialStatus);

    // Act
    const payload: CreateCharacterPayload = {
      playerId: players[0].uid,
      characterClass: Cragheart,
      name: 'Lorkham',
      personalQuest: PERSONAL_QUESTS[528]
    };
    campaign.createCharacter(payload);

    // Asserts
    const status = campaign.getStatus();
    expect(status.characters[0].owner.uid).toEqual(payload.playerId);
    expect(status.characters[0].characterClass.className).toEqual('Cragheart');
    expect(status.characters[0].level).toEqual(1);
    expect(status.characters[0].gold).toEqual(30);
  });
});

fdescribe('Creación de characters after retirement', () => {
  let campaign: CampaignStatusService;

  beforeEach(() => {
    campaign = new CampaignStatusService();
  });

  it('character creation after retirement', () => {
    // Setup
    const initialStatus = getClonedInitialStatus();
    initialStatus.party.name = 'Dummy Name';
    initialStatus.players = players;
    initialStatus.city.prosperityLevel = 3;

    campaign.loadStatus(initialStatus);

    // Act
    const payload: CreateCharacterPayload = {
      playerId: players[1].uid,
      characterClass: Tinkerer,
      name: 'Farts Like Thunder',
      personalQuest: PERSONAL_QUESTS[513]
    };
    campaign.createCharacter(payload);

    // Asserts
    const status = campaign.getStatus();
    expect(status.characters[0].owner.uid).toEqual(payload.playerId);
    expect(status.characters[0].characterClass.className).toEqual('Tinkerer');
    expect(status.characters[0].level).toEqual(3);
    expect(status.characters[0].experience).toEqual(95);
    expect(status.characters[0].gold).toEqual(60);
  });
});

fdescribe('Level Up', () => {
  let campaign: CampaignStatusService;

  beforeEach(() => {
    campaign = new CampaignStatusService();
  });

  it('Level up to level 2', () => {
    // Act
    campaign.createCampaign('Equipo Fantástico', players);

    const payload: CreateCharacterPayload = {
      playerId: players[0].uid,
      characterClass: Cragheart,
      name: 'Lorkham',
      personalQuest: PERSONAL_QUESTS[528]
    };
    campaign.createCharacter(payload); // xp = 0

    campaign.completeScenario({
      scenarioId: 1, level: 3, // Bonus xp = 10
      playersResults: [
        { playerName: 'Lorkham', playerResults: {xp: 10} },
      ]
    });

    campaign.completeScenario({
      scenarioId: 2, level: 5, // Bonus xp = 14
      playersResults: [
        { playerName: 'Lorkham', playerResults: {xp: 6} },
      ]
    });

    campaign.resolveCityEvent({eventId: 25, playersResults: [
      { playerName: 'Lorkham', playerResults: {xp: 5} },
    ], discard: true});

    // Asserts (xp = 20 + 20 + 5 = 45)
    const status = campaign.getStatus();
    expect(status.characters[0].experience).toEqual(45);
    expect(status.characters[0].level).toEqual(2);
  });

  it('Level up to level 5', () => {
    // Setup
    const initialStatus = getClonedInitialStatus();
    initialStatus.party.name = 'Dummy Name';
    initialStatus.players = players;
    initialStatus.city.prosperityLevel = 4;

    campaign.loadStatus(initialStatus);

    const payload: CreateCharacterPayload = {
      playerId: players[1].uid,
      characterClass: Tinkerer,
      name: 'Farts Like Thunder',
      personalQuest: PERSONAL_QUESTS[513]
    };
    campaign.createCharacter(payload); // xp = 150

    // Act
    campaign.completeScenario({
      scenarioId: 5, level: 8, // Bonus xp = 20
      playersResults: [
        { playerName: 'Farts Like Thunder', playerResults: {xp: 30} },
      ]
    });

    campaign.resolveCityEvent({eventId: 5, playersResults: [
      { playerName: 'Farts Like Thunder', playerResults: {xp: 5} },
    ], discard: true});

    campaign.resolveRoadEvent({eventId: 15, playersResults: [
      { playerName: 'Farts Like Thunder', playerResults: {xp: 5} },
    ], discard: true});

    // Asserts (xp = 150 + 50 + 5 + 5 = 210)
    const status = campaign.getStatus();
    expect(status.characters[0].experience).toEqual(210);
    expect(status.characters[0].level).toEqual(5);
  });
});

fdescribe('Global Achievement', () => {
  it('Gain Global Achievement', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    // Act
    const payload: GainGlobalAchievementPayload = {
      type: 'City Rule',
      name: 'City Rule: Militaristic',
    };
    campaign.gainGlobalAchievement(payload);

    // Asserts
    const status = campaign.getStatus();
    expect(status.city.achievements[0]).toEqual('City Rule: Militaristic');
  });
});

fdescribe('Party Achievement', () => {
  it('Gain Party Achievement', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    // Act
    const payload: GainPartyAchievementPayload = {
      name: 'Water Breath',
    };
    campaign.gainPartyAchievement(payload);

    // Asserts
    const status = campaign.getStatus();
    expect(status.party.achievements[0]).toEqual('Water Breath');
  });
});

fdescribe('Scenarios', () => {
  it('Complete Scenario', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    campaign.createCharacter({
      playerId: players[0].uid,
      characterClass: Cragheart,
      name: 'Lorkham',
      personalQuest: PERSONAL_QUESTS[528]
    });

    campaign.createCharacter({
      playerId: players[1].uid,
      characterClass: Tinkerer,
      name: 'Farts Like Thunder',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[2].uid,
      characterClass: Tinkerer,
      name: 'Nightmare',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[3].uid,
      characterClass: Tinkerer,
      name: 'Psycho',
      personalQuest: PERSONAL_QUESTS[513]
    });

    // Act
    const payload: CompleteScenarioPayload = {
      scenarioId: 1,
      level: 1, // Bonus XP = 6
      playersResults: [
        { playerName: 'Lorkham', playerResults: {xp: 4, g: 4} },
        { playerName: 'Farts Like Thunder', playerResults: {xp: 18, g: 14, t: 1} },
        { playerName: 'Nightmare', playerResults: {xp: 8, g: 4, t: 2} },
        { playerName: 'Psycho', playerResults: {xp: 8, g: 4} },
      ],
      rewards: {
        partyAchievements: ['First Steps'],
        prosperity: 1,
        reputation: 1
      },
      scenariosUnlocked: [2]
    };
    campaign.completeScenario(payload);

    // Asserts (Los personajes han sido creados con los 30 de oro iniciales)
    const status = campaign.getStatus();
    expect(status.characters[0].experience).toEqual(10);
    expect(status.characters[0].gold).toEqual(34);
    expect(status.characters[0].perkTicks).toEqual(0);

    expect(status.characters[1].experience).toEqual(24);
    expect(status.characters[1].gold).toEqual(44);
    expect(status.characters[1].perkTicks).toEqual(1);

    expect(status.characters[2].experience).toEqual(14);
    expect(status.characters[2].gold).toEqual(34);
    expect(status.characters[2].perkTicks).toEqual(2);

    expect(status.characters[3].experience).toEqual(14);
    expect(status.characters[3].gold).toEqual(34);
    expect(status.characters[3].perkTicks).toEqual(0);

    expect(status.city.prosperityPoints).toEqual(1);
    expect(status.city.prosperityLevel).toEqual(1);
    expect(status.party.reputation).toEqual(1);
  });
});

fdescribe('Shop', () => {
  it('Buy Item', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    campaign.createCharacter({
      playerId: players[0].uid,
      characterClass: Cragheart,
      name: 'Lorkham',
      personalQuest: PERSONAL_QUESTS[528]
    });

    campaign.createCharacter({
      playerId: players[1].uid,
      characterClass: Tinkerer,
      name: 'Farts Like Thunder',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[2].uid,
      characterClass: Tinkerer,
      name: 'Nightmare',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[3].uid,
      characterClass: Tinkerer,
      name: 'Psycho',
      personalQuest: PERSONAL_QUESTS[513]
    });

    // Act
    const payload: BuyItemPayload = {
      playerName: 'Nightmare',
      itemId: 2
    };
    campaign.buyItem(payload);

    // Asserts
    // Los personajes han sido creados con los 30 de oro iniciales
    // El ítem vale 20
    const status = campaign.getStatus();
    expect(status.characters[2].gold).toEqual(10);
    expect(status.characters[2].ownedItems.includes(2)).toBeTrue();
  });

  it('Sell Item', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    campaign.createCharacter({
      playerId: players[0].uid,
      characterClass: Cragheart,
      name: 'Lorkham',
      personalQuest: PERSONAL_QUESTS[528]
    });

    campaign.createCharacter({
      playerId: players[1].uid,
      characterClass: Tinkerer,
      name: 'Farts Like Thunder',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[2].uid,
      characterClass: Tinkerer,
      name: 'Nightmare',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[3].uid,
      characterClass: Tinkerer,
      name: 'Psycho',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.buyItem({
      playerName: 'Nightmare',
      itemId: 2
    });

    // Act
    const payload: SellItemPayload = {
      playerName: 'Nightmare',
      itemId: 2
    };
    campaign.sellItem(payload);

    // Asserts
    // Los personajes han sido creados con los 30 de oro iniciales
    // El ítem vale 20
    const status = campaign.getStatus();
    expect(status.characters[2].gold).toEqual(20);
    expect(status.characters[2].ownedItems.includes(2)).toBeFalse();
  });
});

fdescribe('Donations to the Sanctuary of the Great Oak', () => {
  it('Make donation', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    campaign.createCharacter({
      playerId: players[0].uid,
      characterClass: Cragheart,
      name: 'Lorkham',
      personalQuest: PERSONAL_QUESTS[528]
    });

    campaign.createCharacter({
      playerId: players[1].uid,
      characterClass: Tinkerer,
      name: 'Farts Like Thunder',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[2].uid,
      characterClass: Tinkerer,
      name: 'Nightmare',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[3].uid,
      characterClass: Tinkerer,
      name: 'Psycho',
      personalQuest: PERSONAL_QUESTS[513]
    });

    // Act
    const payload: MakeDonationPayload = {
      playerName: 'Nightmare',
    };
    campaign.makeDonation(payload);

    // Asserts
    // Los personajes han sido creados con los 30 de oro iniciales
    // La donación cuesta 10
    const status = campaign.getStatus();
    expect(status.characters[2].gold).toEqual(20);
    expect(status.amountGoldDonated).toEqual(10);
  });
});

fdescribe('City Events', () => {
  it('Resolve City Event', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    campaign.createCharacter({
      playerId: players[0].uid,
      characterClass: Cragheart,
      name: 'Lorkham',
      personalQuest: PERSONAL_QUESTS[528]
    });

    campaign.createCharacter({
      playerId: players[1].uid,
      characterClass: Tinkerer,
      name: 'Farts Like Thunder',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[2].uid,
      characterClass: Tinkerer,
      name: 'Nightmare',
      personalQuest: PERSONAL_QUESTS[513]
    });

    campaign.createCharacter({
      playerId: players[3].uid,
      characterClass: Tinkerer,
      name: 'Psycho',
      personalQuest: PERSONAL_QUESTS[513]
    });

    // Act
    const payload: ResolveCityEventPayload = {
      eventId: 1,
      rewards: { reputation: 1 },
      discard: false
    };
    campaign.resolveCityEvent(payload);

    // Asserts
    const status = campaign.getStatus();
    expect(status.party.reputation).toEqual(1);
    expect(status.cityEventsDeck.includes(1)).toBeTrue();
  });
});

fdescribe('Road Events', () => {
  it('Resolve Road Event', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    // Act
    const payload: ResolveRoadEventPayload = {
      eventId: 8,
      rewards: {reputation: 1},
      discard: true
    };
    campaign.resolveRoadEvent(payload);

    // Asserts
    const status = campaign.getStatus();
    expect(status.party.reputation).toEqual(1);
    expect(status.roadEventsDeck.includes(8)).toBeFalse();
  });
});

fdescribe('Prosperity', () => {
  it('Gain Prosperity Points', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    // Act
    campaign.gainProsperity();
    campaign.gainProsperity(2);

    // Asserts
    const status = campaign.getStatus();
    expect(status.city.prosperityPoints).toEqual(3);
    expect(status.city.prosperityLevel).toEqual(1);
  });

  it('Gain Prosperity Points to Level 2', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    // Act
    campaign.gainProsperity(4);

    // Asserts
    const status = campaign.getStatus();
    expect(status.city.prosperityPoints).toEqual(4);
    expect(status.city.prosperityLevel).toEqual(2);
  });

  it('Gain Prosperity Points to Level 3', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    // Act
    campaign.gainProsperity(4);
    campaign.gainProsperity(4);

    // Asserts
    let status = campaign.getStatus();
    expect(status.city.prosperityPoints).toEqual(8);
    expect(status.city.prosperityLevel).toEqual(2);

    campaign.gainProsperity();

    status = campaign.getStatus();
    expect(status.city.prosperityPoints).toEqual(9);
    expect(status.city.prosperityLevel).toEqual(3);
  });

  it('Gain Prosperity Points to Level 4', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    // Act
    campaign.gainProsperity(4);
    campaign.gainProsperity(5);
    campaign.gainProsperity(5);

    // Asserts
    let status = campaign.getStatus();
    expect(status.city.prosperityPoints).toEqual(14);
    expect(status.city.prosperityLevel).toEqual(3);

    campaign.gainProsperity();

    status = campaign.getStatus();
    expect(status.city.prosperityPoints).toEqual(15);
    expect(status.city.prosperityLevel).toEqual(4);
  });

  it('Gain Prosperity Points to Level 2 bypassing milestone', () => {
    // Setup
    let campaign: CampaignStatusService;
    campaign = new CampaignStatusService();

    // Act
    campaign.gainProsperity(3);
    campaign.gainProsperity(2);

    // Asserts
    const status = campaign.getStatus();
    expect(status.city.prosperityPoints).toEqual(5);
    expect(status.city.prosperityLevel).toEqual(2);
  });
});




