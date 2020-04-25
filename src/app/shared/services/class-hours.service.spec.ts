import { TestBed } from '@angular/core/testing';
import { ClassHoursService } from './class-hours.service';

xdescribe('ClassHoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassHoursService = TestBed.get(ClassHoursService);
    expect(service).toBeTruthy();
  });
});
