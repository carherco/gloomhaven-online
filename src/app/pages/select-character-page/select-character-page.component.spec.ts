import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCharacterPageComponent } from './select-character-page.component';

describe('SelectCharacterPageComponent', () => {
  let component: SelectCharacterPageComponent;
  let fixture: ComponentFixture<SelectCharacterPageComponent>;

  beforeEach(async(() => {
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
