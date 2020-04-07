import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesOverviewComponent } from './coaches/coaches.component';
import { CoachesModule } from './coaches/coaches.module';
import { CoachProfileComponent } from './coaches/components/coach-profile/coach-profile.component';
import { Halle1Module } from './halle1/halle1.module';
import { InsightsModule } from './insights/insights.module';
import { PhilosophyModule } from './philosophy/philosophy.module';
import { WerkstattModule } from './werkstatt/werkstatt.module';

const routes: Routes = [
  {
    path: 'philosophy',
    loadChildren: () => import('./philosophy/philosophy.module').then(module => module.PhilosophyModule)
  },
  { path: 'coaches/:name', component: CoachProfileComponent },
  { path: 'coaches', component: CoachesOverviewComponent },
  // { ToDo
  //   path: 'coaches',
  //   loadChildren: () => import('./coaches/coaches.module').then(module => module.CoachesModule)
  // },
  {
    path: 'halle1',
    loadChildren: () => import('./halle1/halle1.module').then(module => module.Halle1Module)
  },
  {
    path: 'werkstatt',
    loadChildren: () => import('./werkstatt/werkstatt.module').then(module => module.WerkstattModule)
  },
  {
    path: 'impressions',
    loadChildren: () => import('./insights/insights.module').then(module => module.InsightsModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CoachesModule,
    Halle1Module,
    InsightsModule,
    PhilosophyModule,
    WerkstattModule
  ]
})
export class AboutUsModule { }
