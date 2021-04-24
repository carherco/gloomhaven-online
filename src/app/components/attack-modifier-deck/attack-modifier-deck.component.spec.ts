import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AttackModifierDeckComponent } from './attack-modifier-deck.component';

describe('AttackModifierDeckComponent', () => {
  let component: AttackModifierDeckComponent;
  let fixture: ComponentFixture<AttackModifierDeckComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackModifierDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackModifierDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
