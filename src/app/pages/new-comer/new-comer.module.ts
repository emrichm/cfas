import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crossfit',
    loadChildren: () => import('./crossfit/crossfit.module').then(module => module.CrossfitModule)
  },
  {
    path: 'entry',
    loadChildren: () => import('./entry/entry.module').then(module => module.EntryModule)
  },
  {
    path: 'cf-dictionary',
    loadChildren: () => import('./dictionary/dictionary.module').then(module => module.DictionaryModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class NewComerModule { }
