import { TestBed } from '@angular/core/testing';
import { ClassHoursService } from './class-hours.service';

describe('ClassHoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassHoursService = TestBed.get(ClassHoursService);
    expect(service).toBeTruthy();
  });
});
