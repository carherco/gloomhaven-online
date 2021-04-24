import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScenarioResponsiveComponent } from './scenario-responsive.component';

describe('ScenarioResponsiveComponent', () => {
  let component: ScenarioResponsiveComponent;
  let fixture: ComponentFixture<ScenarioResponsiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
