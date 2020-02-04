import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from './models/menu-item';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'cfas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: MenuItem[];

  constructor(
    private menuService: MenuService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.menu = this.menuService.menu;

    this.matIconRegistry.addSvgIcon(
      `arrow_right`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/arrow_right-24px.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `barbell`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/barbell.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `kettlebell`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/kettlebell.svg`)
    );
  }
}
