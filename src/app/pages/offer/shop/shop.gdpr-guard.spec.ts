import { TestBed } from '@angular/core/testing';
import { ShopGdprGuard } from './shop.gdpr-guard';

xdescribe('ShopGdprGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopGdprGuard = TestBed.inject(ShopGdprGuard);
    expect(service).toBeTruthy();
  });
});
