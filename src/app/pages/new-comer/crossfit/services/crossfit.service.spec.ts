import { TestBed } from '@angular/core/testing';

import { CrossfitService } from './crossfit.service';

describe('CrossfitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrossfitService = TestBed.get(CrossfitService);
    expect(service).toBeTruthy();
  });
});
