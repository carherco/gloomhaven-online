import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectCharacterPageComponent } from './pages/select-character-page/select-character-page.component';
import { SelectPerksPageComponent } from './pages/select-perks-page/select-perks-page.component';
import { SelectHandPageComponent } from './pages/select-hand-page/select-hand-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { Hex3dPageComponent } from './pages/hex3d-page/hex3d-page.component';
import { HexResponsivePageComponent } from './pages/hex-responsive-page/hex-responsive-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'perks', component: SelectPerksPageComponent },
  { path: 'hand', component: SelectHandPageComponent },
  { path: 'play', component: GamePageComponent },
  { path: 'players', component: PlayersPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'hex3d', component: Hex3dPageComponent },
  { path: 'map', component: HexResponsivePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
