import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MenuItem } from './models/menu-item';
import { MenuService } from './services/menu.service';

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
    this.matIconRegistry.addSvgIcon(
      `facebook_black`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/facebook_black.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `facebook_white`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/facebook_white.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `instagram_black`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/instagram_black.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `instagram_white`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/instagram_white.svg`)
    );
  }

  ngOnInit() {
    this.menu = this.menuService.menu;
  }
}
