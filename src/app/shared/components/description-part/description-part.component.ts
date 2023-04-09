import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DescriptionPart } from 'src/app/models/description-part';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-description-part',
  templateUrl: './description-part.component.html',
  styleUrls: ['./description-part.component.scss']
})
export class DescriptionPartComponent {
  @Input() descriptionPart: DescriptionPart;
  @Input() positionY: 'bottom' | 'center' | 'top';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
