import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PerksSectionComponent } from './perks-section.component';

describe('PerksSectionComponent', () => {
  let component: PerksSectionComponent;
  let fixture: ComponentFixture<PerksSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PerksSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
