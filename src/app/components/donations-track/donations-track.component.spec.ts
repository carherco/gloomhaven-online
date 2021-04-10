import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsTrackComponent } from './donations-track.component';

describe('DonationsTrackComponent', () => {
  let component: DonationsTrackComponent;
  let fixture: ComponentFixture<DonationsTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
