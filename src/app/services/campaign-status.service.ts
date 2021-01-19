import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { CharacterClass } from '../model/character-class';
import { Character } from '../model/character';
import { PersonalQuestDef } from '../data/personal-quests';
import { ITEMS } from '../data/items';
import { CreateCharacterPayload, GainGlobalAchievementPayload, GainPartyAchievementPayload, CompleteScenarioPayload, BuyItemPayload, SellItemPayload, MakeDonationPayload, ResolveCityEventPayload, ResolveRoadEventPayload, FailScenarioPayload } from '../data/actions';

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

@Injectable({
  providedIn: 'root'
})
export class CampaignStatusService {

  private status: CampaignStatus;

  constructor() {
    console.log('constructorx', INITIAL_STATUS);
    this.status = {...INITIAL_STATUS};
  }

  createCampaign(partyName: string, players: Player[]) {
    const newStatus = {...this.status};
    newStatus.party.name = partyName;
    newStatus.players = players;
    this.status = newStatus;
  }

  getStatus(): CampaignStatus {
    return {...this.status};
  }

  loadStatus(status: CampaignStatus): void {
    //console.log(status);
    this.status = {...status};
  }

  createCharacter(payload: CreateCharacterPayload): void {
    const owner = this.findPlayerByUid(payload.playerId);

    const newCharacter: Character = {
      owner,
      name: payload.name,
      characterClass: payload.characterClass,
      personalQuest: {...payload.personalQuest, progress: 0},
      level: this.status.city.prosperityLevel,
      hitPoints: 0,
      experience: 0,
      gold: 15 * this.status.city.prosperityLevel + 15,
      perkTicks: 0,
      ownedAbilityCards: [],
      ownedItems: [],
      scenarioAbilityCards: [],
      scenarioItems: [],
      perks: []
    };

    this.status = {...this.status};
    this.status.characters.push(newCharacter);
  }

  private findPlayerByUid(uid: string): Player {
    return this.status.players.find( p => p.uid === uid);
  }

  private findCharacterByName(name: string): Character {
    return this.status.characters.find( c => c.name === name);
  }

  gainGlobalAchievement(payload: GainGlobalAchievementPayload) {
    this.status = {...this.status};
    this.status.city.achievements.push(payload.name);
  }

  gainPartyAchievement(payload: GainPartyAchievementPayload) {
    this.status = {...this.status};
    this.status.party.achievements.push(payload.name);
  }

  completeScenario(payload: CompleteScenarioPayload) {
    this.status = {...this.status};
    const bonusExperience = 4 + 2 * payload.level;

    // Player Results
    payload.playersResults.forEach(
      player => {
        const character = this.findCharacterByName(player.playerName);
        character.experience += bonusExperience + player.playerResults.xp;
        character.gold += (player.playerResults.g ?? 0) + (payload.rewards?.gold ?? 0);
        character.perkTicks += player.playerResults.t ?? 0;
      }
    );

    // Other Rewards
    this.status.city.prosperityPoints += payload.rewards?.prosperity ?? 0;
    this.status.party.reputation += payload.rewards?.reputation ?? 0;
  }

  failScenario(payload: FailScenarioPayload) {
    this.status = {...this.status};

    // Player Results
    payload.playersResults.forEach(
      player => {
        const character = this.findCharacterByName(player.playerName);
        character.experience +=  player.playerResults.xp;
        character.gold += (player.playerResults.g ?? 0);
      }
    );
  }

  buyItem(payload: BuyItemPayload) {
    this.status = {...this.status};
    const character = this.findCharacterByName(payload.playerName);
    const itemIndex = payload.itemId - 1;
    const item = ITEMS[itemIndex];
    character.gold -= item.price;
    character.ownedItems.push(payload.itemId);
  }

  sellItem(payload: SellItemPayload) {
    this.status = {...this.status};
    const character = this.findCharacterByName(payload.playerName);
    const itemIndex = payload.itemId - 1;
    const item = ITEMS[itemIndex];

    character.gold += Math.floor(item.price / 2);
    character.ownedItems = character.ownedItems.filter(
      id => id !== payload.itemId
    );

  }

  makeDonation(payload: MakeDonationPayload) {
    this.status = {...this.status};
    const character = this.findCharacterByName(payload.playerName);
    character.gold -= 10;
    this.status.amountGoldDonated += 10;
  }

  resolveCityEvent(payload: ResolveCityEventPayload) {
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
    this.status.city.prosperityPoints += payload.rewards?.prosperity ?? 0;
    this.status.party.reputation += payload.rewards?.reputation ?? 0;

    // Discard or not
    if (payload.discard) {
      this.status.cityEventsDeck = this.status.cityEventsDeck.filter(
        id => id !== payload.eventId
      );
    } else {
      // Poner al final del mazo
    }
  }

  resolveRoadEvent(payload: ResolveRoadEventPayload) {
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
    this.status.city.prosperityPoints += payload.rewards?.prosperity ?? 0;
    this.status.party.reputation += payload.rewards?.reputation ?? 0;

    // Discard or not
    if (payload.discard) {
      this.status.roadEventsDeck = this.status.roadEventsDeck.filter(
        id => id !== payload.eventId
      );
    } else {
      // Poner al final del mazo
    }
  }
}
