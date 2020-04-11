import { Character } from './character';

export interface Player {
  name: string;
  character: Character;
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
  ownedItems: any[];
  scenarioAbilityCards: any[];
  scenarioItems: any[];
  attacModifierCards: any[];
}
