import { Observable } from 'rxjs';
import { WodsOverviewPerDay } from 'src/app/pages/home/wod-overview/models/wod';
import { WodService } from 'src/app/pages/home/wod-overview/services/wod.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfas-wod-overview',
  templateUrl: './wod-overview.component.html',
  styleUrls: ['./wod-overview.component.scss']
})
export class WodOverviewComponent implements OnInit {
  panelOpenState = false;
  wodList$: Observable<WodsOverviewPerDay>;
  today: Date;

  constructor(private wodService: WodService) { }

  ngOnInit() {
    this.wodList$ = this.wodService.wodList;
    this.today = new Date();
  }
}
