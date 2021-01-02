import { Player } from '../model/player';
import { CampaignStatusService, INITIAL_STATUS, CreateCharacterPayload } from '../services/campaign-status.service';
import { Cragheart, Tinkerer } from '../data/charactersDef';
import { PERSONAL_QUESTS } from '../data/personal-quests';

const players: Player[] = [
  {uid: 'uuid1', email: 'email1@gmail.com', displayName: 'carherco', photoURL: '', emailVerified: true },
  {uid: 'uuid2', email: 'email2@gmail.com', displayName: 'otro', photoURL: '', emailVerified: true },
];

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
  // Setup
  const initialStatus = INITIAL_STATUS;
  initialStatus.party.name = 'Dummy Name';
  initialStatus.players = players;

  const campaign = new CampaignStatusService();
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
});

fdescribe('Creación de characters after retirement', () => {

  it('character creation after retirement', () => {
    // Setup
    const initialStatus = INITIAL_STATUS;
    initialStatus.party.name = 'Dummy Name';
    initialStatus.players = players;
    initialStatus.city.prosperityLevel = 3;

    const campaign = new CampaignStatusService();
    campaign.loadStatus(initialStatus);

    // Act
    const payload: CreateCharacterPayload = {
      playerId: players[1].uid,
      characterClass: Tinkerer,
      name: 'Fats Like Thunder',
      personalQuest: PERSONAL_QUESTS[513]
    };
    campaign.createCharacter(payload);

    // Asserts
    const status = campaign.getStatus();
    expect(status.characters[1].owner.uid).toEqual(payload.playerId);
    expect(status.characters[1].characterClass.className).toEqual('Tinkerer');
    expect(status.characters[1].level).toEqual(3);
  });
});
