import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { InquiryFormComponent } from './inquiry-form/inquiry-form.component';

const routes: Routes = [
  { path: '', component: ContactComponent }
];

@NgModule({
  declarations: [
    ContactComponent,
    GoogleMapsComponent,
    InquiryFormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ContactModule { }
