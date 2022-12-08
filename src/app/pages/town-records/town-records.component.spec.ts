import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownRecordsComponent } from './town-records.component';

describe('TownRecordsComponent', () => {
  let component: TownRecordsComponent;
  let fixture: ComponentFixture<TownRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TownRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TownRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
