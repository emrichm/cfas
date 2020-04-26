import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'philosophy',
    loadChildren: () => import('./philosophy/philosophy.module').then(module => module.PhilosophyModule)
  },
  {
    path: 'coaches',
    loadChildren: () => import('./coaches/coaches.module').then(module => module.CoachesModule)
  },
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
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
