import { Component, Input } from '@angular/core';
import { GdprService } from '../../services/gdpr.service';

@Component({
  selector: 'cfas-facebook-logo',
  templateUrl: './facebook-logo.component.html',
  styleUrls: ['./facebook-logo.component.scss']
})
export class FacebookLogoComponent {
  @Input() icon: string;
  infos = {
    name: 'facebook',
    buttonIcon: 'tab',
    url: 'www.facebook.com/CrossFitamSee',
    details: 'Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland'
  };

  constructor(private gdprService: GdprService) { }

  navigate() {
    this.gdprService.checkRegulation(this.infos).then((resolve: boolean) => {
      if (resolve) {
        window.open('https://www.facebook.com/CrossFitamSee', '_blank');
      }
    });
  }
}
