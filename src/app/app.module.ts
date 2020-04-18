import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectClassComponent } from './components/select-class/select-class.component';
import { PerksSectionComponent } from './components/perks-section/perks-section.component';
import { HandCardsComponent } from './components/hand-cards/hand-cards.component';
import { SelectLevelComponent } from './components/select-level/select-level.component';
import { SelectCharacterPageComponent } from './pages/select-character-page/select-character-page.component';
import { SelectPerksPageComponent } from './pages/select-perks-page/select-perks-page.component';
import { SelectHandPageComponent } from './pages/select-hand-page/select-hand-page.component';
import { SelectHandComponent } from './components/select-hand/select-hand.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { PlayerBoardComponent } from './components/player-board/player-board.component';
import { AttackModifierDeckComponent } from './components/attack-modifier-deck/attack-modifier-deck.component';
import { PlayersPageComponent } from './pages/players-page/players-page.component';
import { Hex3dPageComponent } from './pages/hex3d-page/hex3d-page.component';
import { HexResponsivePageComponent } from './pages/hex-responsive-page/hex-responsive-page.component';
import { GetSrcItemPipe } from './pipes/get-src-item.pipe';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapDialogComponent } from './components/map-dialog/map-dialog.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LogPageComponent } from './pages/log-page/log-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectClassComponent,
    PerksSectionComponent,
    HandCardsComponent,
    SelectLevelComponent,
    SelectCharacterPageComponent,
    SelectPerksPageComponent,
    SelectHandPageComponent,
    SelectHandComponent,
    GamePageComponent,
    PlayerBoardComponent,
    AttackModifierDeckComponent,
    PlayersPageComponent,
    Hex3dPageComponent,
    HexResponsivePageComponent,
    GetSrcItemPipe,
    ShopPageComponent,
    MenuComponent,
    HistoryPageComponent,
    MapDialogComponent,
    LogPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
