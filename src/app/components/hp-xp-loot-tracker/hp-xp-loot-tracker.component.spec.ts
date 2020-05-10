import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HpXpLootTrackerComponent } from './hp-xp-loot-tracker.component';

describe('HpXpLootTrackerComponent', () => {
  let component: HpXpLootTrackerComponent;
  let fixture: ComponentFixture<HpXpLootTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HpXpLootTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HpXpLootTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
