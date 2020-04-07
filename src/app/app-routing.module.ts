import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpressComponent } from './pages/impress/impress.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'newcomer',
    loadChildren: () => import('./pages/new-comer/new-comer.module').then(module => module.NewComerModule)
  },
  {
    path: 'our-box',
    loadChildren: () => import('./pages/about-us/about-us.module').then(module => module.AboutUsModule)
  },
  {
    path: 'offer',
    loadChildren: () => import('./pages/offer/offer.module').then(module => module.OfferModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(module => module.ContactModule)
  },
  { path: 'impress', component: ImpressComponent, data: { tab: 'impress' } },
  { path: 'dataprotection', component: ImpressComponent, data: { tab: 'dataprotection' } },
  // {
  //   path: 'impress',
  //   loadChildren: () => import('./pages/impress/impress.module').then(module => module.ImpressModule)
  // },
  // {
  //   path: 'dataprotection',
  //   loadChildren: () => import('./pages/impress/impress.module').then(module => module.ImpressModule)
  // },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
