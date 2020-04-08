import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHandPageComponent } from './select-hand-page.component';

describe('SelectHandPageComponent', () => {
  let component: SelectHandPageComponent;
  let fixture: ComponentFixture<SelectHandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectHandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectHandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
