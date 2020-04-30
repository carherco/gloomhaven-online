import { Injectable } from '@angular/core';
import { Players } from 'src/app/data/players';

@Injectable({
  providedIn: 'root'
})
export class CampaignManagerService {

  constructor() { }

  getPlayers(): Player[] {
    return Players;
  }
}
