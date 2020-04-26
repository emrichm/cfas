import { TestBed } from '@angular/core/testing';
import { ScriptLoaderService } from './script-loader.service';

xdescribe('ScriptLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScriptLoaderService = TestBed.inject(ScriptLoaderService);
    expect(service).toBeTruthy();
  });
});
