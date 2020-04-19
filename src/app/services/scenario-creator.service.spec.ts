import { TestBed } from '@angular/core/testing';

import { ScenarioCreatorService } from './scenario-creator.service';

describe('ScenarioCreatorService', () => {
  let service: ScenarioCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenarioCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
