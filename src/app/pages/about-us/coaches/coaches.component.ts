import { CoachTeaser } from 'src/app/pages/about-us/coaches/models/coach-teaser';
import { CoachesService } from 'src/app/pages/about-us/coaches/services/coaches.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesOverviewComponent implements OnInit {
  coachesTeaser: CoachTeaser[];

  constructor(
    private coachesService: CoachesService
  ) { }

  ngOnInit() {
    this.coachesTeaser = this.coachesService.coachesTeaser;
  }
}
