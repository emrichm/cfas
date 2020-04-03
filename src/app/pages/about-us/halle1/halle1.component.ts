import { ImageService } from 'src/app/shared/services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-halle1',
  templateUrl: './halle1.component.html',
  styleUrls: ['./halle1.component.scss']
})
export class Halle1Component implements OnInit {
  images: {
    teaser: string,
    highRes: string
  }[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages('halle1', '768', '1980');
  }
}
