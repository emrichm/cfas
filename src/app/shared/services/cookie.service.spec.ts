import { TestBed } from '@angular/core/testing';
import { CookieService } from './cookie.service';

xdescribe('CookieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CookieService = TestBed.inject(CookieService);
    expect(service).toBeTruthy();
  });
});
