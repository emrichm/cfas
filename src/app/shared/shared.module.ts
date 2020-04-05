import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { FacebookLogoComponent } from './components/facebook-logo/facebook-logo.component';
import { GdprModalComponent } from './components/gdpr-modal/gdpr-modal.component';
import { ImageGalleryModalComponent } from './components/image-gallery-modal/image-gallery-modal.component';
import { InstagramLogoComponent } from './components/instagram-logo/instagram-logo.component';
import { MaterialModule } from './material.module';

const modules = [
  AppRoutingModule,
  BrowserModule,
  BrowserAnimationsModule,
  CommonModule,
  FormsModule,
  HttpClientModule,
  MaterialModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    GdprModalComponent,
    FacebookLogoComponent,
    InstagramLogoComponent
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    FacebookLogoComponent,
    InstagramLogoComponent
  ],
  entryComponents: [
    ImageGalleryModalComponent
  ]
})
export class SharedModule { }
