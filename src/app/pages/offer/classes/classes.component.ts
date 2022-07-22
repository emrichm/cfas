import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DescriptionPart } from 'src/app/models/description-part';
import { ClassDescriptionService } from 'src/app/pages/offer/classes/class-description.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {
  descriptionParts: DescriptionPart[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private classDescriptionService: ClassDescriptionService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.descriptionParts = this.classDescriptionService.classDescriptions;
  }
}
