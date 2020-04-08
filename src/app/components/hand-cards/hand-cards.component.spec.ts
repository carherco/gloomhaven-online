import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandCardsComponent } from './hand-cards.component';

describe('HandCardsComponent', () => {
  let component: HandCardsComponent;
  let fixture: ComponentFixture<HandCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
