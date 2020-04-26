import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsightsComponent } from './insights.component';

const routes: Routes = [
  { path: '', component: InsightsComponent }
];

@NgModule({
  declarations: [
    InsightsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class InsightsModule { }
