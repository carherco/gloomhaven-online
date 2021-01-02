import { Component, OnInit } from '@angular/core';
import { CharacterClass } from 'src/app/model/character-class';
import { AvailableCharacters } from 'src/app/data/charactersDef';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-class',
  templateUrl: './select-class.component.html',
  styleUrls: ['./select-class.component.css']
})
export class SelectClassComponent implements OnInit {

  characterSelected: CharacterClass = null;
  characters: CharacterClass[] = AvailableCharacters;
  level = 1;
  constructor(private router: Router) { }

  ngOnInit(): void { }

  select(character: CharacterClass) {
    this.characterSelected = character;
  }

  levelDown() {
    this.level -= 1;
  }

  levelUp() {
    this.level += 1;
  }

  confirmCharacter() {
    this.router.navigate(['/perks']);
  }

}
