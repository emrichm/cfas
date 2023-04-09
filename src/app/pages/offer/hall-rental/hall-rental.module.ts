import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HallRentalComponent } from './hall-rental.component';

const routes: Routes = [
  { path: '', component: HallRentalComponent }
];

@NgModule({
  declarations: [
    HallRentalComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HallRentalModule { }
