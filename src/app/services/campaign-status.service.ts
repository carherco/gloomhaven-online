import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { CharacterClass } from '../model/character-class';
import { Character } from '../model/character';
import { PersonalQuestDef } from '../data/personal-quests';

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
  amountGoldDonated: 0
};

export interface CreateCharacterPayload {
  playerId: string;
  characterClass: CharacterClass;
  name: string;
  personalQuest: PersonalQuestDef;
}

export interface GainGlobalAchievementPayload {
  type: string;
  name: string;
}

export interface GainPartyAchievementPayload {
  name: string;
}

export interface CompleteScenarioPayload {
  scenarioId: number;
  level: number;
  playersResults: {playerName: string, playerResults: {xp: number, g?: number, t?: number}}[];
  rewards?: {
    partyAchievement?: string,
    globalAchievement?: string,
    prosperity?: number,
    reputation?: number
  };
  scenariosUnblocked?: number[];
}

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
        character.gold += player.playerResults.g ?? 0;
        character.perkTicks += player.playerResults.t ?? 0;
      }
    );

    // Other Rewards
    this.status.city.prosperityPoints += payload.rewards.prosperity ?? 0;
    this.status.party.reputation += payload.rewards.reputation ?? 0;
  }
}
