import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MapCreatorPageComponent } from './map-creator-page.component';

describe('MapCreatorPageComponent', () => {
  let component: MapCreatorPageComponent;
  let fixture: ComponentFixture<MapCreatorPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MapCreatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapCreatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
