import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DescriptionPart } from 'src/app/models/description-part';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { DescriptionPartService } from './description-part.service';

@Component({
  selector: 'cfas-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.scss']
})
export class MassageComponent implements OnInit {
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
    this.descriptionParts = this.descriptionPartService.massageDescriptionParts;
  }
}
