import { TestBed } from '@angular/core/testing';

import { ScenarioCreatorService } from './scenario-creator.service';

fdescribe('ScenarioCreatorService', () => {
  let service: ScenarioCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenarioCreatorService);
  });

  it('Prueba de getScenarioTokens', () => {
    const output = service.getScenarioTokens('18');
  });
});
