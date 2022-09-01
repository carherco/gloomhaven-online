import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsTrackerComponent } from './locations-tracker.component';

describe('LocationsTrackerComponent', () => {
  let component: LocationsTrackerComponent;
  let fixture: ComponentFixture<LocationsTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationsTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
