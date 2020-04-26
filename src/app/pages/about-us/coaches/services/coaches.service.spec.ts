import { TestBed } from '@angular/core/testing';
import { CoachesService } from './coaches.service';

xdescribe('CoachesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoachesService = TestBed.inject(CoachesService);
    expect(service).toBeTruthy();
  });
});
