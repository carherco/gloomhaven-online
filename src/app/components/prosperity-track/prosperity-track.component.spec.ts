import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsperityTrackComponent } from './prosperity-track.component';

describe('ProsperityTrackComponent', () => {
  let component: ProsperityTrackComponent;
  let fixture: ComponentFixture<ProsperityTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsperityTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsperityTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
