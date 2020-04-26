import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossfitComponent } from './crossfit.component';

const routes: Routes = [
  { path: '', component: CrossfitComponent }
];

@NgModule({
  declarations: [
    CrossfitComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class CrossfitModule { }
