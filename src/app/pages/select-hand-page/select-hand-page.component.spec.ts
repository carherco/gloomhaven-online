import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectHandPageComponent } from './select-hand-page.component';

describe('SelectHandPageComponent', () => {
  let component: SelectHandPageComponent;
  let fixture: ComponentFixture<SelectHandPageComponent>;

  beforeEach(waitForAsync(() => {
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
