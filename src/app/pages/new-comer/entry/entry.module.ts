import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './entry.component';

const routes: Routes = [
  { path: '', component: EntryComponent }
];

@NgModule({
  declarations: [
    EntryComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class EntryModule { }
