import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MassageComponent } from './massage.component';

const routes: Routes = [
  { path: '', component: MassageComponent }
];

@NgModule({
  declarations: [
    MassageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class MassageModule { }
