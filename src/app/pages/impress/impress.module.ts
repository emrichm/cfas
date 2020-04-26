import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressComponent } from './impress.component';

const routes: Routes = [
  { path: '', component: ImpressComponent }
];

@NgModule({
  declarations: [
    ImpressComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ImpressModule { }
