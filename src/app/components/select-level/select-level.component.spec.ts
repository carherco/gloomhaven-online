import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectLevelComponent } from './select-level.component';

describe('SelectLevelComponent', () => {
  let component: SelectLevelComponent;
  let fixture: ComponentFixture<SelectLevelComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
