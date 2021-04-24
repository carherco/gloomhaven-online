import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ScenarioPageComponent } from './scenario-page.component';

describe('ScenarioPageComponent', () => {
  let component: ScenarioPageComponent;
  let fixture: ComponentFixture<ScenarioPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
