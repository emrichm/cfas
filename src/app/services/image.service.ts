
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images = {
    halle1: [
      '/assets/images/halle1/IMG_0927-480.jpeg',
      '/assets/images/halle1/IMG_0928-480.jpeg',
      '/assets/images/halle1/IMG_1004-480.jpeg',
      '/assets/images/halle1/IMG_1005-480.jpeg',
      '/assets/images/halle1/IMG_1006-480.jpeg',
      '/assets/images/halle1/IMG_1008-480.jpeg',
      '/assets/images/halle1/IMG_1010-480.jpeg',
      '/assets/images/halle1/IMG_1013-480.jpeg'
    ],
    werkstatt: [
      '/assets/images/werkstatt/IMG_0858-480.JPG',
      '/assets/images/werkstatt/IMG_1015-480.JPG',
      '/assets/images/werkstatt/IMG_1028-480.JPG',
      '/assets/images/werkstatt/IMG_1031-480.JPG'
    ]
  };

  getImages(galleryName: string): string[] {
    return this.images[galleryName];
  }
}
