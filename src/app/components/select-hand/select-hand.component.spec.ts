import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHandComponent } from './select-hand.component';

describe('SelectHandComponent', () => {
  let component: SelectHandComponent;
  let fixture: ComponentFixture<SelectHandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectHandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
