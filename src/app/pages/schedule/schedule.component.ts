import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'cfas-hours',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

  teamUpUrl = 'https://goteamup.com/p/1695186-crossfit-am-see/#!week';
  constructor(public sanitizer: DomSanitizer) { }

  getSourceURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.teamUpUrl);
  }

}
