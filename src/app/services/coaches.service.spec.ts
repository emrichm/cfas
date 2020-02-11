import { TestBed } from '@angular/core/testing';

import { CoachesService } from './coaches.service';

describe('CoachesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachesService = TestBed.get(CoachesService);
    expect(service).toBeTruthy();
  });
});
