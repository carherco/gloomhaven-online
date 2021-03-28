import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { CharacterClass } from '../model/character-class';
import { Character } from '../model/character';
import { PersonalQuestDef } from '../data/personal-quests';
import { ITEMS } from '../data/items';
import { CreateCharacterPayload, GainGlobalAchievementPayload, GainPartyAchievementPayload, CompleteScenarioPayload, BuyItemPayload, SellItemPayload, MakeDonationPayload, ResolveCityEventPayload, ResolveRoadEventPayload, FailScenarioPayload, RetireCharacterPayload, EnhanceAbilityPayload, CompleteSoloScenarioPayload, UnblockCharacterPayload } from '../data/actions';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

export interface CampaignStatus {
  party: {
    name: string;
    reputation: number;
    achievements: string[];
  };
  players: Player[];
  characters: Character[];
  retiredCharacters: Character[];
  city: {
    prosperityPoints: number;
    prosperityLevel: number;
    achievements: string[];
  };
  amountGoldDonated: number;
  cityEventsDeck: number[];
  roadEventsDeck: number[];
}

export const INITIAL_STATUS: CampaignStatus = {
  party: {
    name: '',
    reputation: 0,
    achievements: []
  },
  players: [],
  characters: [],
  retiredCharacters: [],
  city: {
    prosperityPoints: 0,
    prosperityLevel: 1,
    achievements: []
  },
  amountGoldDonated: 0,
  cityEventsDeck: [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ],
  roadEventsDeck: [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
  ],
};

const EXPERIENCE_MILESTONES = [0, 45, 95, 150, 210, 275, 345, 420, 500];
const PROSPERITY_MILESTONES = [4, 9, 15, 22, 30, 39];
const DONATIONS_MILESTONES = [100, 150, 200, 250, 300, 350, 400, 450, 500];
const PRICE_MODIFIER_MAP = [
  -5, -5, -4, -4, -4, -4, -3, -3, -3, -3, -2, -2, -2, -2, -1, -1, -1, -1,
  0, 0, 0, 0, 0,
  1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5
];

@Injectable({
  providedIn: 'root'
})
export class CampaignStatusService {

  private status: CampaignStatus;
  // private status$ = new ReplaySubject();

  constructor() {
    this.status = {...INITIAL_STATUS};
    this.status = this.cloneStatus();
  }

  getStatus(): CampaignStatus {
    return {...this.status};
  }

  loadStatus(status: CampaignStatus): void {
    this.status = {...status};
    this.status = this.cloneStatus();
  }

  cloneStatus() {
    // console.log('Prosperity: ' + this.status.city.prosperityPoints);
    // console.log('Reputation: ' + this.status.party.reputation);
    // console.log('E: ' + this.findCharacterByName('Einar')?.gold);

    return {
      party: {
        name: this.status.party.name,
        reputation: this.status.party.reputation,
        achievements: [...this.status.party.achievements]
      },
      players: [...this.status.players],
      characters: [...this.status.characters],
      retiredCharacters: [...this.status.retiredCharacters],
      city: {
        prosperityPoints: this.status.city.prosperityPoints,
        prosperityLevel: this.status.city.prosperityLevel,
        achievements: [...this.status.city.achievements]
      },
      amountGoldDonated: this.status.amountGoldDonated,
      cityEventsDeck: [...this.status.cityEventsDeck],
      roadEventsDeck: [...this.status.roadEventsDeck],
    };
  }

  createCampaign(partyName: string, players: Player[]) {
    const newStatus = {...this.status};
    newStatus.party.name = partyName;
    newStatus.players = players;
    this.status = newStatus;
  }

  createCharacter(payload: CreateCharacterPayload): void {
    const owner = this.findPlayerByUid(payload.playerId);
    const level = this.status.city.prosperityLevel;

    const newCharacter: Character = {
      owner,
      name: payload.name,
      characterClass: payload.characterClass,
      personalQuest: {...payload.personalQuest, progress: 0},
      level: level,
      hitPoints: 0,
      experience: EXPERIENCE_MILESTONES[level - 1],
      gold: 15 * level + 15,
      perkTicks: 0,
      ownedAbilityCards: [],
      ownedItems: [],
      scenarioAbilityCards: [],
      scenarioItems: [],
      perks: []
    };

    this.status = this.cloneStatus();
    this.status.characters.push(newCharacter);
  }

  retireCharacter(payload: RetireCharacterPayload): void {
    this.status = this.cloneStatus();

    const character = this.findCharacterByName(payload.name);
    this.status.retiredCharacters.push(character);
    this.status.characters = this.status.characters.filter(
      c => c.name !== payload.name
    );
    this.gainProsperity();
  }

  private findPlayerByUid(uid: string): Player {
    return this.status.players.find( p => p.uid === uid);
  }

  private findCharacterByName(name: string): Character {
    return this.status.characters.find( c => c.name === name);
  }

  gainGlobalAchievement(payload: GainGlobalAchievementPayload) {
    this.status = this.cloneStatus();
    this.status.city.achievements.push(payload.name);
  }

  gainPartyAchievement(payload: GainPartyAchievementPayload) {
    this.status = this.cloneStatus();
    this.status.party.achievements.push(payload.name);
  }

  gainProsperity(amount: number = 1) {
    this.status = this.cloneStatus();
    this.status.city.prosperityPoints += amount;
    if (this.status.city.prosperityPoints >= PROSPERITY_MILESTONES[this.status.city.prosperityLevel - 1]) {
      this.status.city.prosperityLevel += 1;
    }
  }

  private checkLevelUps() {
    this.status.characters = this.status.characters.map(
      character => {
        const currentLevel = character.level;
        if ( character.experience >= EXPERIENCE_MILESTONES[currentLevel]) {
          character.level += 1;
        }
        return character;
      }
    );
  }

  completeScenario(payload: CompleteScenarioPayload) {
    this.status = this.cloneStatus();
    const bonusExperience = 4 + 2 * payload.level;

    // Player Results
    payload.playersResults.forEach(
      player => {
        const character = this.findCharacterByName(player.playerName);
        character.experience += bonusExperience + player.playerResults.xp + (payload.rewards?.xp ?? 0);
        character.gold += (player.playerResults.g ?? 0) + (payload.rewards?.gold ?? 0);
        character.perkTicks += player.playerResults.t ?? 0;
      }
    );

    // Other Rewards
    if (payload.rewards?.prosperity) { this.gainProsperity(payload.rewards.prosperity); }
    this.status.party.reputation += payload.rewards?.reputation ?? 0;

    // Check if any player has leveled up
    this.checkLevelUps();
  }

  completeSoloScenario(payload: CompleteSoloScenarioPayload) {
    this.status = this.cloneStatus();
    const bonusExperience = 4 + 2 * payload.level;

    // Player Results
    payload.playersResults.forEach(
      player => {
        const character = this.findCharacterByName(player.playerName);
        character.experience += bonusExperience + player.playerResults.xp;
        character.gold += (player.playerResults.g ?? 0);
        character.perkTicks += player.playerResults.t ?? 0;
      }
    );

    // Check if any player has leveled up
    this.checkLevelUps();
  }

  failScenario(payload: FailScenarioPayload) {
    this.status = this.cloneStatus();

    // Player Results
    payload.playersResults.forEach(
      player => {
        const character = this.findCharacterByName(player.playerName);
        character.experience +=  player.playerResults.xp;
        character.gold += (player.playerResults.g ?? 0);
      }
    );

    // Check if any player has leveled up
    this.checkLevelUps();
  }

  buyItem(payload: BuyItemPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);
    const itemIndex = payload.itemId - 1;
    const item = ITEMS[itemIndex];
    const priceModifier = PRICE_MODIFIER_MAP[20 - this.status.party.reputation];
    character.gold -= (item.price + priceModifier);
    character.ownedItems.push(payload.itemId);
  }

  sellItem(payload: SellItemPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);
    const itemIndex = payload.itemId - 1;
    const item = ITEMS[itemIndex];

    character.gold += Math.floor(item.price / 2);
    character.ownedItems = character.ownedItems.filter(
      id => id !== payload.itemId
    );

  }

  makeDonation(payload: MakeDonationPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);
    character.gold -= 10;
    this.status.amountGoldDonated += 10;
    if (DONATIONS_MILESTONES.includes(this.status.amountGoldDonated)) {
      this.gainProsperity(1);
    }
  }

  resolveCityEvent(payload: ResolveCityEventPayload) {
    this.status = this.cloneStatus();

    // Player Results
    if(payload.playersResults) {
      payload.playersResults.forEach(
        player => {
          const character = this.findCharacterByName(player.playerName);
          character.experience += player.playerResults.xp ?? 0;
          character.gold += player.playerResults.g ?? 0;
          character.perkTicks += player.playerResults.t ?? 0;
        }
      );
    }

    // Other Rewards
    if (payload.rewards?.prosperity) { this.gainProsperity(payload.rewards.prosperity); }
    this.status.party.reputation += payload.rewards?.reputation ?? 0;
    if (payload.rewards?.addCityEvents) { payload.rewards?.addCityEvents.forEach( eventId => this.addCityEvent(eventId) ); }
    if (payload.rewards?.addRoadEvents) { payload.rewards?.addRoadEvents.forEach( eventId => this.addRoadEvent(eventId) ); }

    // Discard or not
    if (payload.discard) {
      this.status.cityEventsDeck = this.status.cityEventsDeck.filter(
        id => id !== payload.eventId
      );
    } else {
      // Poner al final del mazo
    }

    // Check if any player has leveled up
    this.checkLevelUps();
  }

  resolveRoadEvent(payload: ResolveRoadEventPayload) {
    this.status = this.cloneStatus();

    // Player Results
    if(payload.playersResults) {
      payload.playersResults.forEach(
        player => {
          const character = this.findCharacterByName(player.playerName);
          character.experience += player.playerResults.xp ?? 0;
          character.gold += player.playerResults.g ?? 0;
          character.perkTicks += player.playerResults.t ?? 0;
        }
      );
    }

    // Other Rewards
    if (payload.rewards?.prosperity) { this.gainProsperity(payload.rewards.prosperity); }
    this.status.party.reputation += payload.rewards?.reputation ?? 0;
    if (payload.rewards?.addCityEvents) { payload.rewards?.addCityEvents.forEach( eventId => this.addCityEvent(eventId) ); }
    if (payload.rewards?.addRoadEvents) { payload.rewards?.addRoadEvents.forEach( eventId => this.addRoadEvent(eventId) ); }

    // Discard or not
    if (payload.discard) {
      this.status.roadEventsDeck = this.status.roadEventsDeck.filter(
        id => id !== payload.eventId
      );
    } else {
      // Poner al final del mazo
    }

    // Check if any player has leveled up
    this.checkLevelUps();
  }

  addCityEvent(eventId: number) {
    this.status = this.cloneStatus();
    this.status.cityEventsDeck.push(eventId);
  }

  addRoadEvent(eventId: number) {
    this.status = this.cloneStatus();
    this.status.roadEventsDeck.push(eventId);
  }

  enhanceAbility(payload: EnhanceAbilityPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);
    character.gold -= payload.gold;
  }

  unblockCharacter(payload: UnblockCharacterPayload) {
    this.status = this.cloneStatus();
    payload.cityEventsToAdd.forEach( eventId => this.addCityEvent(eventId));
    payload.roadEventsToAdd.forEach( eventId => this.addRoadEvent(eventId));
  }
}
