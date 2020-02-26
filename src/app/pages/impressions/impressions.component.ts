import { ImageService } from 'src/app/services/image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-impressions',
  templateUrl: './impressions.component.html',
  styleUrls: ['./impressions.component.scss']
})
export class ImpressionsComponent implements OnInit {
  images: string[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.imageService.getImages('werkstatt');
  }
}
