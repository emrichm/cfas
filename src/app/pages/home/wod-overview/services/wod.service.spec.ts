import { TestBed } from '@angular/core/testing';
import { WodService } from './wod.service';

xdescribe('WodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WodService = TestBed.get(WodService);
    expect(service).toBeTruthy();
  });
});
