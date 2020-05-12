import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GameManagerService } from '../services/game-manager.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerSelectedGuard implements CanActivate {
  constructor(private game: GameManagerService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.game.isPlayerSelected() ? true : this.router.createUrlTree(['/select-player']);
  }

}
