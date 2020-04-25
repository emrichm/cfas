import { Injectable } from '@angular/core';
import * as halle1DTO from '../../../assets/dynamic/images/halle1/index.json';
import * as insightsDTO from '../../../assets/dynamic/images/insights/index.json';
import * as werkstattDTO from '../../../assets/dynamic/images/werkstatt/index.json';

const registry = {
  halle1: { url: halle1DTO.url, content: halle1DTO.content },
  insights: { url: insightsDTO.url, content: insightsDTO.content },
  werkstatt: { url: werkstattDTO.url, content: werkstattDTO.content }
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  getImage(galleryName: string, imageName: string, resolution: string): string {
    let imageUrl: string = registry[galleryName].url.html;
    imageUrl = imageUrl.concat(registry[galleryName].content.find(image => image.name === imageName).sizes[resolution]);

    return imageUrl;
  }

  getImages(galleryName: string, resolution: string, highRes?: string): any[] {
    const imageUrls = [];
    const imageBaseUrl: string = registry[galleryName].url.html;

    registry[galleryName].content.forEach((image: any) => {
      imageUrls.push({
        teaser: imageBaseUrl.concat(image.sizes[resolution]),
        highRes: highRes ? imageBaseUrl.concat(image.sizes[highRes]) : ''
      });
    });

    return imageUrls;
  }
}
