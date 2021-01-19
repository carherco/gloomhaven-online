import { Player } from '../model/player';
import { Cragheart, Tinkerer } from '../data/charactersDef';
import { PERSONAL_QUESTS } from '../data/personal-quests';
import { CreateCharacterPayload, GainGlobalAchievementPayload, GainPartyAchievementPayload, CompleteScenarioPayload, BuyItemPayload, SellItemPayload, MakeDonationPayload, ResolveCityEventPayload, ResolveRoadEventPayload } from '../data/actions';
import { INITIAL_STATUS, CampaignStatusService } from '../services/campaign-status.service';

console.log(1, INITIAL_STATUS);

const players: Player[] = [
  {uid: 'uuid1', email: 'email1@gmail.com', displayName: 'carherco', photoURL: '', emailVerified: true },
  {uid: 'uuid2', email: 'email2@gmail.com', displayName: 'otro', photoURL: '', emailVerified: true },
  {uid: 'uuid3', email: 'email3@gmail.com', displayName: 'otro3', photoURL: '', emailVerified: true },
  {uid: 'uuid4', email: 'email4@gmail.com', displayName: 'otro4', photoURL: '', emailVerified: true },
];

describe('Creación de campaña', () => {
  console.log(2, INITIAL_STATUS);
  let campaign: CampaignStatusService;

  beforeEach(() => {
    campaign = new CampaignStatusService();
  });

  it('Con dos jugadores', () => {
    console.log(3, INITIAL_STATUS);
    // Act
    campaign.createCampaign('Equipo Fantástico', players);

    // Asserts
    const status = campaign.getStatus();
    expect(status.party.name).toEqual('Equipo Fantástico');
    expect(status.players).toEqual(players);
  });
});

describe('Creación de characters al inicio', () => {
  let campaign: CampaignStatusService;

  beforeEach(() => {
    campaign = new CampaignStatusService();
  });

  it('character creation al inicio', () => {
    console.log(4, INITIAL_STATUS);
    // Setup
    const initialStatus = {...INITIAL_STATUS};
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

describe('Creación de characters after retirement', () => {
  let campaign: CampaignStatusService;

  beforeEach(() => {
    console.log(5, INITIAL_STATUS);
    campaign = new CampaignStatusService();
  });

  it('character creation after retirement', () => {
    console.log(6, INITIAL_STATUS);
    // Setup
    const initialStatus = {...INITIAL_STATUS};
    initialStatus.party.name = 'Dummy Name';
    initialStatus.players = players;
    initialStatus.city.prosperityLevel = 3;
    //console.log(initialStatus);

    //console.log(campaign.getStatus());
    campaign.loadStatus(initialStatus);
    //console.log(campaign.getStatus());

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
    expect(status.characters[0].gold).toEqual(60);
  });
});

describe('Global Achievement', () => {
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

describe('Party Achievement', () => {
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

describe('Scenarios', () => {
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
        partyAchievement: 'First Steps',
        prosperity: 1,
        reputation: 1
      },
      scenariosUnblocked: [2]
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

describe('Shop', () => {
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
    expect(status.characters[2].ownedItems.includes(2)).toBeTrue;
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
    expect(status.characters[2].ownedItems.includes(2)).toBeFalse;
  });
});

describe('Donations to the Sanctuary of the Great Oak', () => {
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

describe('City Events', () => {
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
    // Los personajes han sido creados con los 30 de oro iniciales
    // La donación cuesta 10
    const status = campaign.getStatus();
    expect(status.party.reputation).toEqual(1);
    expect(status.cityEventsDeck.includes(1)).toBeTrue;
  });
});

describe('Road Events', () => {
  it('Resolve Road Event', () => {
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
    const payload: ResolveRoadEventPayload = {
      eventId: 8,
      discard: true
    };
    campaign.resolveCityEvent(payload);

    // Asserts
    // Los personajes han sido creados con los 30 de oro iniciales
    // La donación cuesta 10
    const status = campaign.getStatus();
    expect(status.party.reputation).toEqual(1);
    expect(status.roadEventsDeck.includes(8)).toBeFalse;
  });
});




