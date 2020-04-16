export interface Token {
  id: string;
  type: 'terrain'|'difficult-terrain'|'player'|'enemy'|'enemy elite'|'summon_player'|'loot'|'door'|'trap';
  src: string;
  name?: string;
  maxHealth?: number;
  health?: number;
  shield?: number;
  move?: number;
  attack?: number;
  range?: number;
  status?: any;
  extraInfo?: string;
}
