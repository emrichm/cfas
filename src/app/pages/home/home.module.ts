import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PageTeaserComponent } from './page-teaser/page-teaser.component';
import { PartnersComponent } from './partners/partners.component';
import { WodOverviewComponent } from './wod-overview/wod-overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    PageTeaserComponent,
    PartnersComponent,
    WodOverviewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HomeModule { }
