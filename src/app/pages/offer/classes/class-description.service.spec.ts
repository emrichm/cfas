import { TestBed } from '@angular/core/testing';

import { ClassDescriptionService } from './class-description.service';

describe('ClassDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassDescriptionService = TestBed.get(ClassDescriptionService);
    expect(service).toBeTruthy();
  });
});