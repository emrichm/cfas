import { Subscription } from 'rxjs';
import { Interview } from 'src/app/models/coach';
import { CoachInterview } from 'src/app/models/coach-interview';
import { CoachesService } from 'src/app/services/coaches.service';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cfas-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss']
})
export class CoachProfileComponent implements OnInit, OnDestroy {
  coach: CoachInterview;

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private coachesService: CoachesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) =>
      this.coach = this.coachesService.getCoachInterview(params.name)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  get firstHalfQuestions(): Interview[] {
    return this.coach.interview.slice(0, this.coach.interview.length / 2);
  }

  get lastHalfQuestions(): Interview[] {
    return this.coach.interview.slice(this.coach.interview.length / 2);
  }

  navigateBack() {
    this.location.back();
  }
}
