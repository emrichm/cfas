import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WerkstattComponent } from './werkstatt.component';

const routes: Routes = [
  { path: '', component: WerkstattComponent }
]

@NgModule({
  declarations: [
    WerkstattComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class WerkstattModule { }
