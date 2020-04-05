import { Component, Input } from '@angular/core';
import { GdprService } from '../../services/gdpr.service';

@Component({
  selector: 'cfas-instagram-logo',
  templateUrl: './instagram-logo.component.html',
  styleUrls: ['./instagram-logo.component.scss']
})
export class InstagramLogoComponent {
  @Input() color: string;
  infos = {
    name: 'instagram',
    buttonIcon: 'tab',
    url: 'www.instagram.com/crossfitamsee',
    details: 'Facebook Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland'
  }

  constructor(private gdprService: GdprService) { }

  navigate() {
    this.gdprService.checkRegulation(this.infos).then((resolve: boolean) => {
      if (resolve) {
        window.open('https://www.instagram.com/crossfitamsee', '_blank');
      }
    });
  }
}
