import { PageTeaser } from 'src/app/models/page-teaser';
import { PageTeaserService } from 'src/app/services/page-teaser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pagesTeaser: PageTeaser[];

  constructor(
    private pagesTeaserService: PageTeaserService
  ) { }

  ngOnInit() {
    this.pagesTeaser = this.pagesTeaserService.pagesTeaser;
  }
}
