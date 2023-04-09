import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DescriptionPart } from 'src/app/models/description-part';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { DescriptionPartService } from './description-part.service';

@Component({
  selector: 'cfas-personal-training',
  templateUrl: './personal-training.component.html',
  styleUrls: ['./personal-training.component.scss']
})
export class PersonalTrainingComponent implements OnInit {
  descriptionParts: DescriptionPart[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private descriptionPartService: DescriptionPartService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit() {
    this.descriptionParts = this.descriptionPartService.ptDescriptionParts;
  }
}
