import { Injectable } from '@angular/core';
import { Players } from 'src/app/data/players';
import { Player } from 'src/app/model/player';

@Injectable({
  providedIn: 'root'
})
export class CampaignManagerService {

  constructor() { }

  getPlayers(): Player[] {
    return Players;
  }
}
