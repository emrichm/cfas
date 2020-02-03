import { MenuItem } from 'src/app/models/menu-item';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'cfas-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @Input() menu: MenuItem[];
  @Output() sidenavClose = new EventEmitter();

  closeSidenav() {
    this.sidenavClose.emit();
  }
}
