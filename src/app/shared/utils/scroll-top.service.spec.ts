import { TestBed } from '@angular/core/testing';
import { ScrollTopService } from './scroll-top.service';

xdescribe('ScrollTopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScrollTopService = TestBed.inject(ScrollTopService);
    expect(service).toBeTruthy();
  });
});
