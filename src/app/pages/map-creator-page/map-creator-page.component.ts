import { Component, DoCheck } from '@angular/core';
import { Map16Matrix, Map16Tokens } from 'src/app/data/mapsDef';
import { ScenarioCreatorService } from 'src/app/services/scenario-creator.service';
import { Token } from 'src/app/model/token';

@Component({
  selector: 'app-map-creator-page',
  templateUrl: './map-creator-page.component.html',
  styleUrls: ['./map-creator-page.component.css']
})
export class MapCreatorPageComponent implements DoCheck {

  originalMatrix = Map16Matrix;
  availableTokens: Token[] = Map16Tokens;
  textAreaValue: string;

  scenarioId: number;
  currentMatrix: Token[][][];

  prueba: string;

  constructor(private scenarioCreator: ScenarioCreatorService) {
    this.currentMatrix = this.scenarioCreator.createFromMatrix(this.originalMatrix);
    this.textAreaValue = this.fromStringMatrix2TextArea(this.originalMatrix);
  }

  ngDoCheck(): void {
    this.currentMatrix = this.scenarioCreator.createFromMatrix(this.fromTextAreaToStringMatrix(this.textAreaValue));
  }

  fromStringMatrix2TextArea(matrix: string[][]): string {
    return JSON.stringify(matrix)
    .replace(/\[|,/g, '')
    .replace(/\"/g, ' ')
    .split(']')
    .join('\n')
    ;
  }

  fromTextAreaToStringMatrix(text: string): string[][] {
    let salida = '';
    for (const char of text) {
      switch (char) {
        case '\n':
          salida += '],[';
          break;
        case ' ':
          break;
        default:
          salida += '"' + char + '",';
      }
    }
    salida = salida.replace(/,\]/g, ']');
    return JSON.parse('[[' + salida + ']]');
  }
}
