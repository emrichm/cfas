import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';

const routes: Routes = [
  { path: '', component: ClassesComponent }
];

@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ClassesModule { }
