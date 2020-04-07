import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const components = [
  FooterComponent,
  NavbarComponent,
  SidenavComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    ...components
  ]
})
export class CoreModule { }
