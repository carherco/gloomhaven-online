import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectCharacterPageComponent } from './pages/select-character-page/select-character-page.component';
import { SelectPerksPageComponent } from './pages/select-perks-page/select-perks-page.component';
import { SelectHandPageComponent } from './pages/select-hand-page/select-hand-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
  { path: '', component: SelectCharacterPageComponent },
  { path: 'perks', component: SelectPerksPageComponent },
  { path: 'hand', component: SelectHandPageComponent },
  { path: 'play', component: GamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
