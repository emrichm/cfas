import { TestBed } from '@angular/core/testing';
import { GdprService } from './gdpr.service';

xdescribe('GdprService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GdprService = TestBed.inject(GdprService);
    expect(service).toBeTruthy();
  });
});
