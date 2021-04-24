import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectPerksPageComponent } from './select-perks-page.component';

describe('SelectPerksPageComponent', () => {
  let component: SelectPerksPageComponent;
  let fixture: ComponentFixture<SelectPerksPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPerksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPerksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
