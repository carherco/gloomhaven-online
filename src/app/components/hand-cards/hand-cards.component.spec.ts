import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HandCardsComponent } from './hand-cards.component';

describe('HandCardsComponent', () => {
  let component: HandCardsComponent;
  let fixture: ComponentFixture<HandCardsComponent>;

  beforeEach(waitForAsync(() => {
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
