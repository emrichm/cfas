import { ImageService } from 'src/app/shared/services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {
  images: {
    teaser: string,
    highRes: string
  }[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages('insights', '1024', 'scaled');
  }
}
