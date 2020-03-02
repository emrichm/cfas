import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ClassDescription } from 'src/app/models/class-description';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cfas-class-description',
  templateUrl: './class-description.component.html',
  styleUrls: ['./class-description.component.scss']
})
export class ClassDescriptionComponent {
  @Input() classDescription: ClassDescription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }
}
