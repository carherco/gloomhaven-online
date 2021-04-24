import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectCharacterPageComponent } from './select-character-page.component';

describe('SelectCharacterPageComponent', () => {
  let component: SelectCharacterPageComponent;
  let fixture: ComponentFixture<SelectCharacterPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCharacterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCharacterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
