import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossfitModule } from './crossfit/crossfit.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { EntryModule } from './entry/entry.module';

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
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CrossfitModule,
    DictionaryModule,
    EntryModule
  ]
})
export class NewComerModule { }
