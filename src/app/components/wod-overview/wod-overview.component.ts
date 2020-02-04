import { Wod } from 'src/app/models/wod';
import { WodService } from 'src/app/services/wod.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-wod-overview',
  templateUrl: './wod-overview.component.html',
  styleUrls: ['./wod-overview.component.scss']
})
export class WodOverviewComponent implements OnInit {
  panelOpenState = false;
  wodList: Wod[];
  dayOfWeekIndex: number;

  constructor(private wodService: WodService) { }

  ngOnInit() {
    this.wodList = this.wodService.wodList;
    const day = new Date().getDay();
    this.dayOfWeekIndex = day === 0 ? 6 : day - 1;
  }
}
