import { TestBed } from '@angular/core/testing';
import { DictionaryService } from './dictionary.service';

xdescribe("DictionaryService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: DictionaryService = TestBed.get(DictionaryService);
    expect(service).toBeTruthy();
  });
});
