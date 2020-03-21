import { TestBed } from '@angular/core/testing';

import { PageTeaserService } from './page-teaser.service';

describe('PageTeaserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageTeaserService = TestBed.get(PageTeaserService);
    expect(service).toBeTruthy();
  });
});
