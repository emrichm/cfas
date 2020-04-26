import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule.component';

const routes: Routes = [
  { path: '', component: ScheduleComponent }
];

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ScheduleModule { }
