import { TestBed } from '@angular/core/testing';

import { PlayerSelectedGuard } from './player-selected.guard';

describe('PlayerSelectedGuard', () => {
  let guard: PlayerSelectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PlayerSelectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
