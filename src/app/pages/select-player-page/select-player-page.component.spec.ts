import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectPlayerPageComponent } from './select-player-page.component';

describe('SelectPlayerPageComponent', () => {
  let component: SelectPlayerPageComponent;
  let fixture: ComponentFixture<SelectPlayerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPlayerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPlayerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
