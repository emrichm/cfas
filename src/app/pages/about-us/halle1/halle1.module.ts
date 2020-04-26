import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Halle1Component } from './halle1.component';

const routes: Routes = [
  { path: '', component: Halle1Component }
]

@NgModule({
  declarations: [
    Halle1Component
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class Halle1Module { }
