import { TestBed } from '@angular/core/testing';
import { ShopGdprGuard } from './shop.gdpr-guard';

describe('ShopGdprGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopGdprGuard = TestBed.get(ShopGdprGuard);
    expect(service).toBeTruthy();
  });
});
