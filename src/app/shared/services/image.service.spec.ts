import { TestBed } from '@angular/core/testing';
import { ImageService } from './image.service';

xdescribe('ImageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageService = TestBed.inject(ImageService);
    expect(service).toBeTruthy();
  });
});
