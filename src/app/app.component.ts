import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from './models/menu-item';
import { MenuService } from './shared/services/menu.service';

@Component({
  selector: 'cfas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menu: MenuItem[];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private menuService: MenuService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private breakpointObserver: BreakpointObserver
  ) {
    this.matIconRegistry.addSvgIcon(
      `arrow_right`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/static/icons/arrow_right-24px.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `barbell`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/static/icons/barbell.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `kettlebell`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/static/icons/kettlebell.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `facebook-black`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/static/icons/facebook-black.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `facebook-white`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/static/icons/facebook-white.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `instagram-black`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/static/icons/instagram-black.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `instagram-white`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/static/icons/instagram-white.svg`)
    );
  }

  ngOnInit() {
    this.menu = this.menuService.menu;
  }
}
