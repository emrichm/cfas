import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalTrainingComponent } from './personal-training.component';

const routes: Routes = [
  { path: '', component: PersonalTrainingComponent }
];

@NgModule({
  declarations: [
    PersonalTrainingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PersonalTrainingModule { }
