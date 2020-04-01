import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PageTeaser } from 'src/app/models/page-teaser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfas-page-teaser',
  templateUrl: './page-teaser.component.html',
  styleUrls: ['./page-teaser.component.scss']
})
export class PageTeaserComponent {
  @Input() pageTeaser: PageTeaser;
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
