import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectClassComponent } from './select-class.component';

describe('SelectClassComponent', () => {
  let component: SelectClassComponent;
  let fixture: ComponentFixture<SelectClassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
