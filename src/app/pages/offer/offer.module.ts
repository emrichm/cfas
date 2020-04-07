import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesModule } from './classes/classes.module';
import { EventsModule } from './events/events.module';
import { PricesModule } from './prices/prices.module';
import { ScheduleModule } from './schedule/schedule.module';
import { ShopModule } from './shop/shop.module';

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
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ClassesModule,
    EventsModule,
    PricesModule,
    ScheduleModule,
    ShopModule
  ]
})
export class OfferModule { }
