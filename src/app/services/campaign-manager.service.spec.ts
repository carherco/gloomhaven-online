import { TestBed } from '@angular/core/testing';

import { CampaignManagerService } from './campaign-manager.service';

describe('CampaignManagerService', () => {
  let service: CampaignManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
