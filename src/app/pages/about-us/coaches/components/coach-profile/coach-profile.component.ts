import { Subscription } from 'rxjs';
import { Interview } from 'src/app/pages/about-us/coaches/models/coach';
import { CoachInterview } from 'src/app/pages/about-us/coaches/models/coach-interview';
import { CoachesService } from 'src/app/pages/about-us/coaches/services/coaches.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cfas-coach-profile',
  templateUrl: './coach-profile.component.html',
  styleUrls: ['./coach-profile.component.scss']
})
export class CoachProfileComponent implements OnInit, OnDestroy {
  coach: CoachInterview;
  imageUrl: string;

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private coachesService: CoachesService
  ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: Params) =>
      this.coach = this.coachesService.getCoachInterview(params.name)
    );
    this.imageUrl = this.coach.image.url.replace('.jpg', '_moving.jpg');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get firstHalfQuestions(): Interview[] {
    return this.coach.interview.slice(0, (this.coach.interview.length + 1) / 2);
  }

  get lastHalfQuestions(): Interview[] {
    return this.coach.interview.slice((this.coach.interview.length + 1) / 2);
  }

  navigateBack() {
    window.history.back();
  }
}
