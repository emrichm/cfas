import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DictionaryComponent } from './dictionary.component';

const routes: Routes = [
  { path: '', component: DictionaryComponent }
];

@NgModule({
  declarations: [
    DictionaryComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DictionaryModule { }
