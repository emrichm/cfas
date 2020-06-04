import { GdprService } from 'src/app/shared/services/gdpr.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShopGdprGuard implements CanActivate {
  infos = {
    name: 'spreadshirt',
    buttonIcon: 'web',
    url: 'shop.spreadshirt.de/CFamSee',
    details: 'sprd.net AG, Gießerstraße 27, 04229 Leipzig, Deutschland'
  };

  constructor(
    private gdprService: GdprService,
    private router: Router
  ) { }

  async canActivate(): Promise<boolean> {
    return this.gdprService.checkRegulation(this.infos).then((resolve: boolean) => {
      if (!resolve && !this.router.navigated) {
        this.router.navigate(['/']);
      }

      return resolve;
    });
  }
}
