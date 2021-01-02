import { Injectable } from '@angular/core';
import { Player } from '../model/player';
import { CharacterClass } from '../model/character-class';
import { Character } from '../model/character';
import { PersonalQuestDef } from '../data/personal-quests';

export interface CampaignStatus {
  party: {
    name: string;
    reputation: number;
    achievements: [];
  };
  players: Player[];
  characters: Character[];
  retiredCharacters: Character[];
  city: {
    prosperityPoints: number;
    prosperityLevel: number;
    achievements: [];
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
    prosperityPoints: 1,
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

@Injectable({
  providedIn: 'root'
})
export class CampaignStatusService {

  private status: CampaignStatus = INITIAL_STATUS;

  constructor() { }

  createCampaign(partyName: string, players: Player[]) {
    const newStatus = {...this.status};
    newStatus.party.name = partyName;
    newStatus.players = players;
    this.status = newStatus;
  }

  getStatus(): CampaignStatus {
    return this.status;
  }

  loadStatus(status: CampaignStatus): void {
    this.status = {...this.status};
  }

  createCharacter(payload: CreateCharacterPayload): void {

  }
}
