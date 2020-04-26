import { TestBed } from '@angular/core/testing';
import { PageTeaserService } from './page-teaser.service';

xdescribe('PageTeaserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageTeaserService = TestBed.inject(PageTeaserService);
    expect(service).toBeTruthy();
  });
});
