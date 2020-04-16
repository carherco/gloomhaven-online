import { Token } from './token';

export interface ScenarioDef {
  id: number;
  name: string;
  initialMatrix: string[][];
}

export interface ScenarioSnapshot {
  id?: string;
  scenarioId: number;
  currentMatrix: string; // JSON.stringify(Token[][][])
}
