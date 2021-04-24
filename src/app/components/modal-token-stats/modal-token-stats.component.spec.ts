import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalTokenStatsComponent } from './modal-token-stats.component';

describe('ModalTokenStatsComponent', () => {
  let component: ModalTokenStatsComponent;
  let fixture: ComponentFixture<ModalTokenStatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalTokenStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTokenStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
