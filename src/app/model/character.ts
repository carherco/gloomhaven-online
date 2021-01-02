import { CharacterClass } from './character-class';
import { Player } from './player';

export interface Character {
  owner: Player;
  name: string;
  characterClass: CharacterClass;
  personalQuest: {
    id: number;
    title: string;
    progress: number;
    total: number;
  };
  level: number;
  hitPoints: number;
  experience: number;
  gold: number;
  perkTicks: number;
  ownedAbilityCards: any[];
  ownedItems: number[];
  scenarioAbilityCards: any[];
  scenarioItems: any[];
  perks: string[];
}
