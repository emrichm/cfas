import { TestBed } from '@angular/core/testing';

import { DescriptionPartService } from './description-part.service';

describe('DescriptionPartService', () => {
  let service: DescriptionPartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescriptionPartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
