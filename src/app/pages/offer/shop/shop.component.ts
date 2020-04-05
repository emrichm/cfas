import { GdprService } from 'src/app/shared/services/gdpr.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cfas-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShopComponent {
  infos = {
    name: 'spreadshirt',
    text: ['Mit dem Laden der externen Webseite', 'Spreadshirt'],
    buttonIcon: 'tab',
    url: 'shop.spreadshirt.de/CFamSee',
    details: 'sprd.net AG, Gießerstraße 27, 04229 Leipzig, Deutschland'
  }

  constructor(private gdprService: GdprService) { }

  navigate() {
    this.gdprService.checkRegulation(this.infos).then((resolve: boolean) => {
      if (resolve) {
        window.open('https://shop.spreadshirt.de/CFamSee', '_blank');
      }
    });
  }
}
