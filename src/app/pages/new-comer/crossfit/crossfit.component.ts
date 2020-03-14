import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrossfitDesc } from './models/crossfit-desc';
import { CrossfitService } from './services/crossfit.service';

@Component({
  selector: 'cfas-crossfit',
  templateUrl: './crossfit.component.html',
  styleUrls: ['./crossfit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CrossfitComponent implements OnInit {
  descriptions: CrossfitDesc[];

  constructor(private crossfitDescService: CrossfitService) { }

  ngOnInit() {
    this.descriptions = this.crossfitDescService.descriptions;
  }
}
