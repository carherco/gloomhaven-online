export type ItemType = 'all'|'head'|'body'|'legs'|'one-hand'|'two-hands'|'small-item';
export type ItemAction = 'spend'|'consume'|'permanent';

export interface ItemDef {
  name: string;
  image: string;
  type: ItemType;
  use: ItemAction;
  price: number;
  amount: number;
  points?: number;
  xws?: string;
}

export interface ItemInPlay extends ItemDef {
  spent?: boolean;
  consumed?: boolean;
  flipped?: boolean;
}
