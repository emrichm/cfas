import { CoachTeaser } from 'src/app/models/coach-teaser';
import { CoachesService } from 'src/app/services/coaches.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-coaches-overview',
  templateUrl: './coaches-overview.component.html',
  styleUrls: ['./coaches-overview.component.scss']
})
export class CoachesOverviewComponent implements OnInit {
  coachesTeaser: CoachTeaser[];

  constructor(private coachesService: CoachesService) { }

  ngOnInit() {
    this.coachesTeaser = this.coachesService.coachesTeaser;
  }
}
