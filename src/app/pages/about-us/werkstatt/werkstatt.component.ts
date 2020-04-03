import { ImageService } from 'src/app/shared/services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-werkstatt',
  templateUrl: './werkstatt.component.html',
  styleUrls: ['./werkstatt.component.scss']
})
export class WerkstattComponent implements OnInit {
  images: {
    teaser: string,
    highRes: string
  }[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages('werkstatt', '768', '1980');
  }

}
