import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(module => module.EventsModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then(module => module.ScheduleModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./classes/classes.module').then(module => module.ClassesModule)
  },
  {
    path: 'prices',
    loadChildren: () => import('./prices/prices.module').then(module => module.PricesModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(module => module.ShopModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OfferModule { }
