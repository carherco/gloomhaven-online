import { Component, OnInit, Input } from '@angular/core';
import { Token } from 'src/app/model/token';

@Component({
  selector: 'app-modal-token-stats',
  templateUrl: './modal-token-stats.component.html',
  styleUrls: ['./modal-token-stats.component.css']
})
export class ModalTokenStatsComponent implements OnInit {
  @Input() token: Token;
  constructor() { }

  ngOnInit(): void {
  }

  damageButtonClick() {
    this.token.stats.h--;
  }

  healButtonClick() {
    this.token.stats.h++;
  }

}
