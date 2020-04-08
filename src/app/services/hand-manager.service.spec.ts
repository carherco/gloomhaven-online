import { TestBed } from '@angular/core/testing';

import { HandManagerService } from './hand-manager.service';

describe('HandManagerService', () => {
  let service: HandManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
