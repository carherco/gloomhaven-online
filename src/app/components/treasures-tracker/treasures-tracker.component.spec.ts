import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreasuresTrackerComponent } from './treasures-tracker.component';

describe('TreasuresTrackerComponent', () => {
  let component: TreasuresTrackerComponent;
  let fixture: ComponentFixture<TreasuresTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreasuresTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreasuresTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
