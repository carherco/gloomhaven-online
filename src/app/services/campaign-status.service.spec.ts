import { TestBed } from '@angular/core/testing';

import { CampaignStatusService } from './campaign-status.service';

describe('CampaignStatusService', () => {
  let service: CampaignStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampaignStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
