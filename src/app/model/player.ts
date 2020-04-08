import { Character } from './character';

export interface Player {
  name: string;
  character: Character;
  level: number;
  hitPoints: number;
  experience: number;
  ownedAbilityCards: any[];
  ownedItems: any[];
  scenarioAbilityCards: any[];
  scenarioItems: any[];
  attacModifierCards: any[];
}
