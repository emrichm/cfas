import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesOverviewComponent } from './coaches.component';
import { CoachProfileComponent } from './components/coach-profile/coach-profile.component';
import { CoachTeaserComponent } from './components/coach-teaser/coach-teaser.component';

const routes: Routes = [
  { path: '', component: CoachesOverviewComponent },
  { path: ':name', component: CoachProfileComponent }
]

@NgModule({
  declarations: [
    CoachesOverviewComponent,
    CoachTeaserComponent,
    CoachProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CoachesModule { }
