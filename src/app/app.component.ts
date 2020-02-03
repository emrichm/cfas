import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'cfas-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: MenuItem[];

  constructor(private menuService: MenuService) {
    this.menu = this.menuService.menu;
  }
}
