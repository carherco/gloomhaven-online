import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioFixedComponent } from './scenario-fixed.component';

describe('ScenarioFixedComponent', () => {
  let component: ScenarioFixedComponent;
  let fixture: ComponentFixture<ScenarioFixedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioFixedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
