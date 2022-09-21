import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopGdprGuard } from './shop/shop.gdpr-guard';
import { PersonalTrainingComponent } from './personal-training/personal-training.component';
import { HallRentalComponent } from './hall-rental/hall-rental.component';

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
    path: 'pt',
    loadChildren: () => import('./personal-training/personal-training.module').then(module => module.PersonalTrainingModule)
  },
  {
    path: 'prices',
    loadChildren: () => import('./prices/prices.module').then(module => module.PricesModule)
  },
  {
    path: 'hall-rental',
    loadChildren: () => import('./hall-rental/hall-rental.module').then(module => module.HallRentalModules)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(module => module.ShopModule),
    canActivate: [ShopGdprGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class OfferModule { }
