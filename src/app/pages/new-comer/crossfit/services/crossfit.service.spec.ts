import { TestBed } from '@angular/core/testing';
import { CrossfitService } from './crossfit.service';

xdescribe('CrossfitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrossfitService = TestBed.inject(CrossfitService);
    expect(service).toBeTruthy();
  });
});
