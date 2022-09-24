import { Component, OnInit, Input } from '@angular/core';
import { CharacterClass } from 'src/app/model/character-class';
import { Brute, Cragheart } from './../../data/charactersDef';
import { Character } from 'src/app/model/character';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perks-section',
  templateUrl: './perks-section.component.html',
  styleUrls: ['./perks-section.component.css']
})
export class PerksSectionComponent implements OnInit {

  @Input() perks: {id: any, title: string, checked: boolean}[] = [];
  @Input() selectedPerks: string[] = [];
  perksList: {id: any, title: string, checked: boolean}[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.perksList = this.perks.map( p => { p.checked = false; return p; });

    this.selectedPerks.forEach( sp => {
      let selectedPerk = this.perksList.find( p => p.id === sp )!;
      selectedPerk.checked = true;
    });
  }

  confirmPerks() {
    this.router.navigate(['/select-hand']);
  }

  goBack() {
    this.router.navigate(['/select-player']);
  }

}
