import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntiativeTrackerComponent } from './intiative-tracker.component';

describe('IntiativeTrackerComponent', () => {
  let component: IntiativeTrackerComponent;
  let fixture: ComponentFixture<IntiativeTrackerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntiativeTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntiativeTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
