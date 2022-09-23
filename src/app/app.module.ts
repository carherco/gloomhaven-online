import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

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
import { LogPageComponent } from './pages/log-page/log-page.component';
import { MapCreatorPageComponent } from './pages/map-creator-page/map-creator-page.component';
import { ModalTokenStatsComponent } from './components/modal-token-stats/modal-token-stats.component';
import { HpXpLootTrackerComponent } from './components/hp-xp-loot-tracker/hp-xp-loot-tracker.component';
import { ItemsTrackerComponent } from './components/items-tracker/items-tracker.component';
import { MutableDirective } from './directives/mutable.directive';
import { SelectPlayerPageComponent } from './pages/select-player-page/select-player-page.component';
import { ScenarioResponsiveComponent } from './components/scenario-responsive/scenario-responsive.component';
import { ScenarioFixedComponent } from './components/scenario-fixed/scenario-fixed.component';
import { ScenarioPageComponent } from './pages/scenario-page/scenario-page.component';
import { IntiativeTrackerComponent } from './components/intiative-tracker/intiative-tracker.component';
import { FilterItemsByTipePipe } from './pipes/filter-items-by-tipe.pipe';
import { PrefixPipe } from './pipes/prefix.pipe';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProsperityTrackComponent } from './components/prosperity-track/prosperity-track.component';
import { DonationsTrackComponent } from './components/donations-track/donations-track.component';
import { ReputationTrackComponent } from './components/reputation-track/reputation-track.component';
import { ScenariosPageComponent } from './pages/scenarios-page/scenarios-page.component';
import { PlayerCampaignsPageComponent } from './pages/player-campaigns-page/player-campaigns-page.component';
import { LocationsTrackerComponent } from './components/locations-tracker/locations-tracker.component';
import { TreasuresTrackerComponent } from './components/treasures-tracker/treasures-tracker.component';
import { PlayerSheetComponent } from './components/player-sheet/player-sheet.component';


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
    LogPageComponent,
    MapCreatorPageComponent,
    ModalTokenStatsComponent,
    HpXpLootTrackerComponent,
    ItemsTrackerComponent,
    MutableDirective,
    SelectPlayerPageComponent,
    ScenarioResponsiveComponent,
    ScenarioFixedComponent,
    ScenarioPageComponent,
    IntiativeTrackerComponent,
    FilterItemsByTipePipe,
    PrefixPipe,
    LoginPageComponent,
    HomePageComponent,
    ProsperityTrackComponent,
    DonationsTrackComponent,
    ReputationTrackComponent,
    ScenariosPageComponent,
    PlayerCampaignsPageComponent,
    LocationsTrackerComponent,
    TreasuresTrackerComponent,
    PlayerSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
