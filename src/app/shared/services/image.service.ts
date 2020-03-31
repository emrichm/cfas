
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images = {
    halle1: [
      '/assets/static/images/halle1/halle-1-bell-480.JPG',
      '/assets/static/images/halle1/halle-1-goals-480.JPG',
      '/assets/static/images/halle1/IMG_0927-480.JPG',
      '/assets/static/images/halle1/IMG_0928-480.JPG',
      '/assets/static/images/halle1/IMG_1004-480.JPG',
      '/assets/static/images/halle1/IMG_1005-480.JPG',
      '/assets/static/images/halle1/IMG_1006-480.JPG',
      '/assets/static/images/halle1/IMG_1008-480.JPG',
      '/assets/static/images/halle1/IMG_1010-480.JPG',
      '/assets/static/images/halle1/IMG_1013-480.JPG',
      '/assets/static/images/halle1/kinderecke-1-480.JPG',
      '/assets/static/images/halle1/kinderecke-2-480.JPG'
    ],
    werkstatt: [
      '/assets/static/images/werkstatt/IMG_0858-480.JPG',
      '/assets/static/images/werkstatt/IMG_1015-480.JPG',
      '/assets/static/images/werkstatt/IMG_1028-480.JPG',
      '/assets/static/images/werkstatt/IMG_1031-480.JPG',
      '/assets/static/images/werkstatt/Werkstatt-480.JPG',
      '/assets/static/images/werkstatt/Werkstatt-ROMWOD-480.jpeg',
      '/assets/static/images/werkstatt/WERKSTATT-ROMWOD1-480.jpeg',
      '/assets/static/images/werkstatt/Werkstatt-tires-480.JPG'
    ],
    insights: [
      '/assets/static/images/insights/_F3A0031-480.jpeg',
      '/assets/static/images/insights/_F3A8043-480.jpeg',
      '/assets/static/images/insights/_F3A8081-480.jpeg',
      '/assets/static/images/insights/_F3A8223-480.jpeg',
      '/assets/static/images/insights/_F3A8340-480.jpeg',
      '/assets/static/images/insights/_F3A8383-480.jpeg',
      '/assets/static/images/insights/_F3A8585-480.jpeg',
      '/assets/static/images/insights/_F3A9122-480.jpeg',
      '/assets/static/images/insights/_F3A9568-480.jpeg',
      '/assets/static/images/insights/_F3A9749-480.jpeg',
      '/assets/static/images/insights/_F3A9900-480.jpeg',
      '/assets/static/images/insights/_F3A9979-480.jpeg'
    ]
  };

  getImages(galleryName: string): string[] {
    return this.images[galleryName];
  }
}
