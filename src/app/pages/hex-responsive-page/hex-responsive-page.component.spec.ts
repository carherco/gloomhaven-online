import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexResponsivePageComponent } from './hex-responsive-page.component';

describe('HexResponsivePageComponent', () => {
  let component: HexResponsivePageComponent;
  let fixture: ComponentFixture<HexResponsivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexResponsivePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexResponsivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
