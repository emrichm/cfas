import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ImageGalleryModalComponent } from '../components/image-gallery-modal/image-gallery-modal.component';
import { MaterialModule } from './material.module';

const modules = [
  CommonModule,
  BrowserAnimationsModule,
  MaterialModule,
  AppRoutingModule,
  HttpClientModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ],
  entryComponents: [
    ImageGalleryModalComponent
  ]
})
export class SharedModule { }
