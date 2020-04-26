import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhilosophyComponent } from './philosophy.component';

const routes: Routes = [
  { path: '', component: PhilosophyComponent }
];

@NgModule({
  declarations: [
    PhilosophyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PhilosophyModule { }
