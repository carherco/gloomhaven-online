import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemsTrackerComponent } from './items-tracker.component';

describe('ItemsTrackerComponent', () => {
  let component: ItemsTrackerComponent;
  let fixture: ComponentFixture<ItemsTrackerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
