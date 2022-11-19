import { Modifier } from './modifier';

export interface Perk {
  id: string,
  title: string,
  addModifiers: Modifier[],
  removeModifiers: Modifier[]
}

export interface CharacterClass {
  id: string;
  key: string;
  race: string;
  className: string;
  handCardSize: number;
  image: string;
  hitPoints: number[];
  levelXCards: any[];
  level1Cards: any[];
  level2Cards: any[];
  level3Cards: any[];
  level4Cards: any[];
  level5Cards: any[];
  level6Cards: any[];
  level7Cards: any[];
  level8Cards: any[];
  level9Cards: any[];
  perks: Perk[];
}
