import { PageTeaser } from 'src/app/models/page-teaser';
import { PageTeaserService } from 'src/app/pages/home/page-teaser/page-teaser.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScrollService } from 'src/app/shared/utils/scroll-id.service';

@Component({
  selector: 'cfas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pagesTeaser: PageTeaser[];

  constructor(
    private pagesTeaserService: PageTeaserService,
    private scrollService: ScrollService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pagesTeaser = this.pagesTeaserService.pagesTeaser;
    this.scrollService.scrollToRouteFragment(this.route);
  }
}
