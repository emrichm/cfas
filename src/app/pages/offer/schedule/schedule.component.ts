import { GdprService } from 'src/app/shared/services/gdpr.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cfas-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScheduleComponent {
  infos = {
    name: 'teamup',
    buttonIcon: 'tab',
    url: 'goteamup.com/p/1695186-crossfit-am-see/',
    details: 'TeamUp Sports Inc, 530 Lytton St, 2nd Floor, Palo Alto, California, 94301, USA'
  }

  constructor(private gdprService: GdprService) { }

  navigate() {
    this.gdprService.checkRegulation(this.infos).then((resolve: boolean) => {
      if (resolve) {
        window.open('https://goteamup.com/p/1695186-crossfit-am-see/', '_blank');
      }
    });
  }
}
