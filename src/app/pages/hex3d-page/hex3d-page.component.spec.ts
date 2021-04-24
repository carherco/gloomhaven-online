import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Hex3dPageComponent } from './hex3d-page.component';

describe('Hex3dPageComponent', () => {
  let component: Hex3dPageComponent;
  let fixture: ComponentFixture<Hex3dPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Hex3dPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hex3dPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
