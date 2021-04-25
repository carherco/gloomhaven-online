import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCampaignsPageComponent } from './player-campaigns-page.component';

describe('PlayerCampaignsPageComponent', () => {
  let component: PlayerCampaignsPageComponent;
  let fixture: ComponentFixture<PlayerCampaignsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerCampaignsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCampaignsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
