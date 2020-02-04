import { NgModule } from '@angular/core';
import {
    MatButtonModule, MatExpansionModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatToolbarModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatExpansionModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule { }
