import { TestBed } from '@angular/core/testing';
import { ClassDescriptionService } from './class-description.service';

xdescribe('ClassDescriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassDescriptionService = TestBed.inject(
      ClassDescriptionService
    );
    expect(service).toBeTruthy();
  });
});
