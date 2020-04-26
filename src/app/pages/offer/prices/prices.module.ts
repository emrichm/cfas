import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './prices.component';

const routes: Routes = [
  { path: '', component: PricesComponent }
]

@NgModule({
  declarations: [
    PricesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PricesModule { }
