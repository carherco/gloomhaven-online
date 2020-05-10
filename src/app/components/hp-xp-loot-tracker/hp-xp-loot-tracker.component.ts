import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hp-xp-loot-tracker',
  templateUrl: './hp-xp-loot-tracker.component.html',
  styleUrls: ['./hp-xp-loot-tracker.component.css']
})
export class HpXpLootTrackerComponent implements OnInit {

  @Input() maxHealth = 0;
  @Input() health = 0;
  @Input() experience = 0;
  @Input() loot = 0;

  @Input() status = {
    poisoned: false,
    wounded: false,
    immobilized: false,
    disarmed: false,
    stunned: false,
    invisible: false,
    muddled: false,
    strengthened: false
  };

  constructor() { }

  ngOnInit(): void {
  }

  healButtonClick = () => {
    if (!this.status.poisoned) {
      this.health++;
    }
    this.status.wounded = false;
    this.status.poisoned = false;
  }

  damageButtonClick = () => {
    if (this.health > 0) {
      this.health--;
    }
  }

  xpUpClick = () => {
    this.experience++;
  }

  xpDownClick = () => {
    if (this.experience > 0) {
      this.experience--;
    }
  }

  lootUpClick = () => {
    this.loot++;
  }

  lootDownClick = () => {
    if (this.loot > 0) {
      this.loot--;
    }
  }

}
