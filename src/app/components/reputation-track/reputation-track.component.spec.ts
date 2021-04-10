import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputationTrackComponent } from './reputation-track.component';

describe('ReputationTrackComponent', () => {
  let component: ReputationTrackComponent;
  let fixture: ComponentFixture<ReputationTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReputationTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputationTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
