import { PageTeaser } from 'src/app/models/page-teaser';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfas-page-teaser',
  templateUrl: './page-teaser.component.html',
  styleUrls: ['./page-teaser.component.scss']
})
export class PageTeaserComponent {
  @Input() pageTeaser: PageTeaser;
  @Input() index: number;
}
