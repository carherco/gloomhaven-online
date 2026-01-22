import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITEMS } from '../data/items';
import { PERSONAL_QUESTS } from '../data/personal-quests';
import { CreateCharacterPayload, RetireCharacterPayload, GainGlobalAchievementPayload, GainPartyAchievementPayload, CompleteScenarioPayload, CompleteSoloScenarioPayload, FailScenarioPayload, BuyItemPayload, SellItemPayload, MakeDonationPayload, ResolveCityEventPayload, ResolveRoadEventPayload, EnhanceAbilityPayload, UnblockCharacterPayload, GainPerkPayload, GainAbilityPayload, AdvancePersonalQuestProgressPayload } from '../model/actions';
import { Character } from '../model/character';
import { Player } from '../model/player';

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
  shop: {
    items: number[];
    oneCopyItems: number[];
    priceModifier: number;
  };
  amountGoldDonated: number;
  cityEventsDeck: number[];
  roadEventsDeck: number[];
  completedScenarios: number[];
  unlockedScenarios: number[];
  treasuresLooted: number[];
  treasuresUnlooted: number[];
  decipheredMessages: string[];
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
  shop: {
    items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    oneCopyItems: [],
    priceModifier: 0,
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
  completedScenarios: [],
  unlockedScenarios: [],
  treasuresLooted: [],
  treasuresUnlooted: [],
  decipheredMessages: [],
};

const EXPERIENCE_MILESTONES = [0, 45, 95, 150, 210, 275, 345, 420, 500];
const PROSPERITY_MILESTONES = [4, 9, 15, 22, 30, 39];
const DONATIONS_MILESTONES = [100, 150, 200, 250, 300, 350, 400, 450, 500, 600, 700, 800, 900, 1000];
const PRICE_MODIFIER_MAP = [
  -5, -5, -4, -4, -4, -4, -3, -3, -3, -3, -2, -2, -2, -2, -1, -1, -1, -1,
  0, 0, 0, 0, 0,
  1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5
];
const PROSPERITY_LEVEL_ITEMS = [
  [], // dummy level 0
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], // level 1 items
  [15, 16, 17, 18, 19, 20, 21], // level 2 items
  [22, 23, 24, 25, 26, 27, 28], // level 3 items
  [29, 30, 31, 32, 33, 34, 35], // level 4 items
  [36, 37, 38, 39, 40, 41, 42], // level 5 items
  [43, 44, 45, 46, 47, 48, 49], // level 6 items
  [50, 51, 52, 53, 54, 55, 56], // level 7 items
];

@Injectable({
  providedIn: 'root'
})
export class CampaignStatusService {

  private status: CampaignStatus = {...INITIAL_STATUS};
  private status$ = new BehaviorSubject<CampaignStatus>(this.status);

  constructor() {
    this.status = this.cloneStatus();
  }

  getStatus(): CampaignStatus {
    return {...this.status};
  }

  getStatus$(): Observable<CampaignStatus> {
    return this.status$.asObservable();
  }

  setStatus(status: CampaignStatus): void {
    this.status = {...status};
    this.emitStatus();
  }

  emitStatus(): void {
    this.status$.next(this.getStatus());
  }

  loadStatus(status: CampaignStatus): void {
    this.status = {...status};
    this.status = this.cloneStatus();
  }

  cloneStatus(): CampaignStatus {
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
      shop: {
        items: [...this.status.shop.items],
        oneCopyItems: [...this.status.shop.oneCopyItems],
        priceModifier: this.status.shop.priceModifier
      },
      amountGoldDonated: this.status.amountGoldDonated,
      cityEventsDeck: [...this.status.cityEventsDeck],
      roadEventsDeck: [...this.status.roadEventsDeck],
      completedScenarios: [...this.status.completedScenarios],
      unlockedScenarios: [...this.status.unlockedScenarios],
      treasuresLooted: [...this.status.treasuresLooted],
      treasuresUnlooted: [...this.status.treasuresUnlooted],
      decipheredMessages: [...this.status.decipheredMessages],
    };
  }

  createCampaign(partyName: string, players: Player[]) {
    const newStatus = {...this.status};
    newStatus.party.name = partyName;
    newStatus.players = players;
    this.status = newStatus;
    this.unlockScenario({scenariosUnlocked: [1]});
  }

  createCharacter(payload: CreateCharacterPayload): void {
    const owner = this.findPlayerByUid(payload.playerId);
    const level = this.status.city.prosperityLevel;

    const newCharacter: Character = {
      owner,
      name: payload.name,
      characterClass: payload.characterClass,
      personalQuest: {...payload.personalQuest, progress: 0},
      level,
      hitPoints: 0,
      experience: EXPERIENCE_MILESTONES[level - 1],
      gold: 15 * level + 15,
      perkTicks: 0,
      ownedAbilityCards: [ // TODO: añadir/elegir cartas del nivel
        ...payload.characterClass.levelXCards,
        ...payload.characterClass.level1Cards,
        ...payload.characterClass.level2Cards,
        ...payload.characterClass.level3Cards,
        ...payload.characterClass.level4Cards,
        ...payload.characterClass.level5Cards,
        ...payload.characterClass.level6Cards,
        ...payload.characterClass.level7Cards,
      ],
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
    character.ownedItems.forEach(item => this.addItemToShop(item));
    this.gainProsperity();
    payload.cityEventsToAdd.forEach( eventId => this.addCityEvent(eventId));
    payload.roadEventsToAdd.forEach( eventId => this.addRoadEvent(eventId));
    if (payload.scenariosUnlocked) {this.status.unlockedScenarios = this.status.unlockedScenarios.concat(payload.scenariosUnlocked); }
    if (payload.itemDesigns) {
      payload.itemDesigns.forEach( itemId => this.addItemDesignToShop(itemId));
    }
  }

  private findPlayerByUid(uid: string): Player {
    return this.status.players.find( p => p.uid === uid)!;
  }

  private findCharacterByName(name: string): Character {
    return this.status.characters.find( c => c.name === name)!;
  }

  gainGlobalAchievement(payload: GainGlobalAchievementPayload) {
    this.status = this.cloneStatus();
    this.status.city.achievements.push(payload.name);
  }

  gainPartyAchievement(payload: GainPartyAchievementPayload) {
    this.status = this.cloneStatus();
    this.status.party.achievements.push(payload.name);
  }

  looseGlobalAchievement(payload: GainGlobalAchievementPayload) {
    this.status = this.cloneStatus();
    this.status.city.achievements = this.status.city.achievements.filter( item => item !== payload.name );
  }

  loosePartyAchievement(payload: GainPartyAchievementPayload) {
    this.status = this.cloneStatus();
    this.status.party.achievements = this.status.party.achievements.filter( item => item !== payload.name );
  }

  gainReputation(amount: number = 1) {
    this.status = this.cloneStatus();
    this.status.party.reputation += amount;
    const index = Math.max(0, Math.min(PRICE_MODIFIER_MAP.length - 1, 20 - this.status.party.reputation));
    this.status.shop.priceModifier = PRICE_MODIFIER_MAP[index];
  }

  gainProsperity(amount: number = 1) {
    this.status = this.cloneStatus();
    this.status.city.prosperityPoints += amount;
    if (this.status.city.prosperityPoints >= PROSPERITY_MILESTONES[this.status.city.prosperityLevel - 1]) {
      this.levelUpCityProsperityLevel();
    }
  }

  levelUpCityProsperityLevel() {
    this.status = this.cloneStatus();
    this.status.city.prosperityLevel += 1;
    const newItems = PROSPERITY_LEVEL_ITEMS[this.status.city.prosperityLevel];
    // Quitar ítems repetidos y ya puestos, ordenar ítems
    this.status.shop.items = Array.from(new Set(this.status.shop.items.concat(newItems))).sort((a, b) => a - b);
    // Quitar items de this.status.shop.oneCopyItems si ya han aparecido en la tienda por nivel de prosperidad
    this.status.shop.oneCopyItems = this.status.shop.oneCopyItems.filter( item => !this.status.shop.items.includes(item));
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
    this.status.completedScenarios.push(payload.scenarioId);

    // Player Results
    payload.playersResults.forEach(
      player => {
        const character = this.findCharacterByName(player.playerName);
        character.experience += bonusExperience + player.playerResults.xp + (payload.rewards?.xp ?? 0);
        character.gold += (player.playerResults.g ?? 0) + (payload.rewards?.gold ?? 0);
        character.perkTicks += (player.playerResults.t ?? 0) + (payload.rewards?.t ?? 0);
        character.personalQuest.progress += player.playerResults.pq ?? 0;
        character.ownedItems = character.ownedItems.concat(player.playerResults.items ?? []);
        // if (player.playerResults.items) {
        //   player.playerResults.items.forEach( itemId => this.addItemToShop(itemId));
        // }
      }
    );

    // Other Rewards
    if (payload.rewards?.prosperity) { this.gainProsperity(payload.rewards.prosperity); }
    if (payload.rewards?.reputation) { this.gainReputation(payload.rewards.reputation); }
    if (payload.scenariosUnlocked) {this.status.unlockedScenarios = this.status.unlockedScenarios.concat(payload.scenariosUnlocked); }
    if (payload.rewards?.globalAchievements) {
      payload.rewards?.globalAchievements.forEach( achievement => this.gainGlobalAchievement({type: 'todo-type', name: achievement}));
    }
    if (payload.rewards?.partyAchievements) {
      payload.rewards?.partyAchievements.forEach( achievement => this.gainPartyAchievement({name: achievement}));
    }
    if (payload.rewards?.looseGlobalAchievements) {
      payload.rewards?.looseGlobalAchievements.forEach( achievement => this.looseGlobalAchievement({type: 'todo-type', name: achievement}));
    }
    if (payload.rewards?.loosePartyAchievements) {
      payload.rewards?.loosePartyAchievements.forEach( achievement => this.loosePartyAchievement({name: achievement}));
    }
    if (payload.rewards?.itemDesigns) {
      payload.rewards?.itemDesigns.forEach( itemId => this.addItemDesignToShop(itemId));
    }

    // Treasures
    if (payload.treasuresLooted) {
      this.status.treasuresLooted = this.status.treasuresLooted.concat(payload.treasuresLooted);
    }

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
        character.ownedItems = character.ownedItems.concat(player.playerResults.items ?? []);
        // if (player.playerResults.items) {
        //   player.playerResults.items.forEach( itemId => this.addItemToShop(itemId));
        // }
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
        character.personalQuest.progress += player.playerResults.pq ?? 0;
        character.ownedItems = character.ownedItems.concat(player.playerResults.items ?? []);
        // if (player.playerResults.items) {
        //   player.playerResults.items.forEach( itemId => this.addItemToShop(itemId));
        // }
      }
    );

    // Other Rewards (por tesoros)
    if (payload.rewards?.prosperity) { this.gainProsperity(payload.rewards.prosperity); }
    if (payload.rewards?.reputation) { this.gainReputation(payload.rewards.reputation); }
    if (payload.rewards?.itemDesigns) {
      payload.rewards?.itemDesigns.forEach( itemId => this.addItemDesignToShop(itemId));
    }

    // Treasures
    if (payload.treasuresLooted) {
      this.status.treasuresLooted = this.status.treasuresLooted.concat(payload.treasuresLooted);
    }

    // Check if any player has leveled up
    this.checkLevelUps();
  }

  buyItem(payload: BuyItemPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);
    const itemIndex = payload.itemId - 1;
    const item = ITEMS[itemIndex];
    const priceModifier = this.status.shop.priceModifier;
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

    this.addItemToShop(payload.itemId);
  }

  makeDonation(payload: MakeDonationPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);
    character.gold -= 10;
    this.status.amountGoldDonated += 10;
    if (character.personalQuest.id === PERSONAL_QUESTS[525].id) {
      character.personalQuest.progress += 10;
    }
    if (DONATIONS_MILESTONES.includes(this.status.amountGoldDonated)) {
      this.gainProsperity(1);
    }

  }

  gainPerk(payload: GainPerkPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);
    const perk = character.characterClass.perks.find( perk => perk.id === payload.perkId);
    character.perks.push(perk!);
  }

  resolveCityEvent(payload: ResolveCityEventPayload) {
    this.status = this.cloneStatus();

    // Player Results
    if (payload.playersResults) {
      payload.playersResults.forEach(
        player => {
          const character = this.findCharacterByName(player.playerName);
          character.experience += player.playerResults.xp ?? 0;
          character.gold += player.playerResults.g ?? 0;
          character.perkTicks += player.playerResults.t ?? 0;
          character.ownedItems = character.ownedItems.concat(player.playerResults.items ?? []);
          // if (player.playerResults.items) {
          //   player.playerResults.items.forEach( itemId => this.addItemToShop(itemId));
          // }
        }
      );
    }

    // Other Rewards
    if (payload.rewards?.prosperity) { this.gainProsperity(payload.rewards.prosperity); }
    if (payload.rewards?.reputation) { this.gainReputation(payload.rewards.reputation); }
    if (payload.rewards?.addCityEvents) { payload.rewards?.addCityEvents.forEach( eventId => this.addCityEvent(eventId) ); }
    if (payload.rewards?.addRoadEvents) { payload.rewards?.addRoadEvents.forEach( eventId => this.addRoadEvent(eventId) ); }

    if (payload.rewards?.globalAchievements) {
      payload.rewards?.globalAchievements.forEach( achievement => this.gainGlobalAchievement({type: 'todo-type', name: achievement}));
    }
    if (payload.rewards?.partyAchievements) {
      payload.rewards?.partyAchievements.forEach( achievement => this.gainPartyAchievement({name: achievement}));
    }
    if (payload.rewards?.itemDesigns) {
      payload.rewards?.itemDesigns.forEach( itemId => this.addItemDesignToShop(itemId));
    }

    if (payload.rewards?.scenariosUnlocked) {
      this.status.unlockedScenarios = this.status.unlockedScenarios.concat(payload.rewards?.scenariosUnlocked);
    }

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
    if (payload.playersResults) {
      payload.playersResults.forEach(
        player => {
          const character = this.findCharacterByName(player.playerName);
          character.experience += player.playerResults.xp ?? 0;
          character.gold += player.playerResults.g ?? 0;
          character.perkTicks += player.playerResults.t ?? 0;
          character.ownedItems = character.ownedItems.concat(player.playerResults.items ?? []);
          // if (player.playerResults.items) {
          //   player.playerResults.items.forEach( itemId => this.addItemToShop(itemId));
          // }
        }
      );
    }

    // Other Rewards
    if (payload.rewards?.prosperity) { this.gainProsperity(payload.rewards.prosperity); }
    if (payload.rewards?.reputation) { this.gainReputation(payload.rewards.reputation); }
    if (payload.rewards?.addCityEvents) { payload.rewards?.addCityEvents.forEach( eventId => this.addCityEvent(eventId) ); }
    if (payload.rewards?.addRoadEvents) { payload.rewards?.addRoadEvents.forEach( eventId => this.addRoadEvent(eventId) ); }

    if (payload.rewards?.globalAchievements) {
      payload.rewards?.globalAchievements.forEach( achievement => this.gainGlobalAchievement({type: 'todo-type', name: achievement}));
    }
    if (payload.rewards?.partyAchievements) {
      payload.rewards?.partyAchievements.forEach( achievement => this.gainPartyAchievement({name: achievement}));
    }
    if (payload.rewards?.itemDesigns) {
      payload.rewards?.itemDesigns.forEach( itemId => this.addItemDesignToShop(itemId));
    }

    if (payload.rewards?.scenariosUnlocked) {
      this.status.unlockedScenarios = this.status.unlockedScenarios.concat(payload.rewards?.scenariosUnlocked);
    }

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
    //this.status = this.cloneStatus();
    this.status.cityEventsDeck.push(eventId);
  }

  addRoadEvent(eventId: number) {
    this.status = this.cloneStatus();
    this.status.roadEventsDeck.push(eventId);
  }

  gainAbility(payload: GainAbilityPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);
    character.ownedAbilityCards.push(payload.ability);
  }

  enhanceAbility(payload: EnhanceAbilityPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);
    character.gold -= payload.gold;
    if (character.personalQuest.id === PERSONAL_QUESTS[530].id) {
      character.personalQuest.progress += 1;
    }
  }

  unblockCharacter(payload: UnblockCharacterPayload) {
    this.status = this.cloneStatus();
    payload.cityEventsToAdd.forEach( eventId => this.addCityEvent(eventId));
    payload.roadEventsToAdd.forEach( eventId => this.addRoadEvent(eventId));
  }

  addItemToShop(itemId: number) {
    this.status = this.cloneStatus();
    if (!this.status.shop.items.includes(itemId)) {
      this.status.shop.oneCopyItems.push(itemId);
    }

    // Quitar ítems repetidos y ya puestos, ordenar ítems
    this.status.shop.oneCopyItems = Array.from(new Set(this.status.shop.oneCopyItems)).sort((a: number, b: number) => a - b);
  }

  addItemDesignToShop(itemId: number) {
    this.status = this.cloneStatus();
    this.status.shop.items.push(itemId);

    // Quitar ítems repetidos y ya puestos, ordenar ítems
    this.status.shop.items = Array.from(new Set(this.status.shop.items)).sort((a: number, b: number) => a - b);
  }

  decipherMessage(payload: {message: string}) {
    this.status.decipheredMessages.push(payload.message);
  }

  unlockScenario(payload: {scenariosUnlocked: number[]}) {
    this.status.unlockedScenarios = this.status.unlockedScenarios.concat(payload.scenariosUnlocked);
  }

  advancePersonalQuestProgress(payload: AdvancePersonalQuestProgressPayload) {
    this.status = this.cloneStatus();
    const character = this.findCharacterByName(payload.playerName);

    character.personalQuest.progress += 1;
  }

  levelUpCharacterToCityLevel(payload: { playerName: string; }) {
    const character = this.findCharacterByName(payload.playerName);
    console.log(character);
    if ( character.experience < EXPERIENCE_MILESTONES[this.status.city.prosperityLevel-1]) {
      character.experience = EXPERIENCE_MILESTONES[this.status.city.prosperityLevel-1];
      character.level = this.status.city.prosperityLevel;
      console.log(character);
    }

  }

  openEnvelopeX() {
    this.decipherMessage({message: 'We call from de dust. From the aged bones of those you have killed. Speak our name into his web and we will be free. 10 clues you must find. -10 letters to our name-. Here is our first: B.'});
    let lastMessage = this.status.decipheredMessages.pop();
    this.status.decipheredMessages.unshift(lastMessage!);
  }
}
