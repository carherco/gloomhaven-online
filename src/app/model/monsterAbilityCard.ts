import { Stats } from '../data/enemiesDefs';

export interface MonsterAbilityCardFront {
  name: string;
  initiative: number;
  mustShuffle: boolean;
  points?: number;
  image: string;
  xws?: string;
}

export interface MonsterAbilityCardBack {
  name: string;
  points?: number;
  image: string;
  xws?: string;
}

export interface EnemyTracker {
  id: string;
  src: string;
  type: 'player'|'enemy';
  cardsId: string;
  cardBack: MonsterAbilityCardBack;
  cards: MonsterAbilityCardFront[];
  deckCards: MonsterAbilityCardFront[];
  drawnCards: MonsterAbilityCardFront[];
  currentCard: MonsterAbilityCardFront | null;
  currentInitiative: number | null;
}
