import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectPerksPageComponent } from './pages/select-perks-page/select-perks-page.component';
import { SelectHandPageComponent } from './pages/select-hand-page/select-hand-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { LogPageComponent } from './pages/log-page/log-page.component';
import { MapCreatorPageComponent } from './pages/map-creator-page/map-creator-page.component';
import { PlayerSelectedGuard } from './guards/player-selected.guard';
import { SelectPlayerPageComponent } from './pages/select-player-page/select-player-page.component';
import { ScenarioPageComponent } from './pages/scenario-page/scenario-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ScenariosPageComponent } from './pages/scenarios-page/scenarios-page.component';
import { PlayerCampaignsPageComponent } from './pages/player-campaigns-page/player-campaigns-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'players', component: PlayersPageComponent },
  { path: 'shop', component: ShopPageComponent },
  { path: 'maps', component: ScenariosPageComponent},
  { path: 'map/:id', component: ScenarioPageComponent },
  { path: 'play', component: GamePageComponent, canActivate: [PlayerSelectedGuard] },
  { path: 'select-player', component: SelectPlayerPageComponent },
  { path: 'select-hand', component: SelectHandPageComponent },
  { path: 'select-perks', component: SelectPerksPageComponent },
  { path: 'select-hand', component: SelectHandPageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: 'log', component: LogPageComponent },
  { path: 'map-creator', component: MapCreatorPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'campaigns', component: PlayerCampaignsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
