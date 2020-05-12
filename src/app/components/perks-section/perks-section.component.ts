import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/model/character';
import { Brute, Cragheart } from './../../data/charactersDef';
import { Player } from 'src/app/model/player';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perks-section',
  templateUrl: './perks-section.component.html',
  styleUrls: ['./perks-section.component.css']
})
export class PerksSectionComponent implements OnInit {

  @Input() perks = [];
  @Input() selectedPerks = [];
  perksList = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.perksList = this.perks.map( p => { p.checked = false; return p; });

    this.selectedPerks.forEach( sp => {
      let selectedPerk = this.perksList.find( p => p.id === sp );
      selectedPerk.checked = true;
    });
  }

  confirmPerks() {
    this.router.navigate(['/hand']);
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
