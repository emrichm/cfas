import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FacebookLogoComponent } from './components/facebook-logo/facebook-logo.component';
import { GdprModalComponent } from './components/gdpr-modal/gdpr-modal.component';
import { ImageGalleryModalComponent } from './components/image-gallery-modal/image-gallery-modal.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { InstagramLogoComponent } from './components/instagram-logo/instagram-logo.component';
import { MaterialModule } from './material.module';

const modules = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  MaterialModule,
  ReactiveFormsModule,
  RouterModule
];

@NgModule({
  declarations: [
    GdprModalComponent,
    ImageGalleryComponent,
    ImageGalleryModalComponent,
    FacebookLogoComponent,
    InstagramLogoComponent
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    GdprModalComponent,
    ImageGalleryComponent,
    FacebookLogoComponent,
    InstagramLogoComponent
  ],
  entryComponents: [
    ImageGalleryModalComponent,
    GdprModalComponent
  ]
})
export class SharedModule { }
