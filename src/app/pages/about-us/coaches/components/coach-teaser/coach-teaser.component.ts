import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CoachTeaser } from 'src/app/pages/about-us/coaches/models/coach-teaser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfas-coach-teaser',
  templateUrl: './coach-teaser.component.html',
  styleUrls: ['./coach-teaser.component.scss']
})
export class CoachTeaserComponent {
  @Input() coachTeaser: CoachTeaser;
  @Input() index: number;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }
}
