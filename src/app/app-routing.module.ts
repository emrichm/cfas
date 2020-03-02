import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './pages/classes/classes.component';
import { CoachProfileComponent } from './pages/coach-profile/coach-profile.component';
import { CoachesOverviewComponent } from './pages/coaches-overview/coaches-overview.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DictionaryComponent } from './pages/dictionary/dictionary.component';
import { EventsComponent } from './pages/events/events.component';
import { Halle1Component } from './pages/halle1/halle1.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressComponent } from './pages/impress/impress.component';
import { ImpressionsComponent } from './pages/impressions/impressions.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';
import { PricesComponent } from './pages/prices/prices.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { WerkstattComponent } from './pages/werkstatt/werkstatt.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'newcomer',
    children: [
      { path: 'crossfit', component: HomeComponent },
      { path: 'your-entry', component: HomeComponent },
      { path: 'cf-dictionary', component: DictionaryComponent },
    ]
  },
  {
    path: 'our-box',
    children: [
      { path: 'philosophy', component: PhilosophyComponent },
      { path: 'coaches/:name', component: CoachProfileComponent, pathMatch: 'full' },
      { path: 'coaches', component: CoachesOverviewComponent },
      { path: 'halle1', component: Halle1Component },
      { path: 'werkstatt', component: WerkstattComponent },
      { path: 'romwod', component: HomeComponent },
      { path: 'impressions', component: ImpressionsComponent }
    ]
  },
  {
    path: 'offer',
    children: [
      { path: 'events', component: EventsComponent },
      { path: 'schedule', component: ScheduleComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'prices', component: PricesComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: 'impress', component: ImpressComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
