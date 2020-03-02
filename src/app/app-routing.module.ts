import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachProfileComponent } from './pages/about-us/coaches/coach-profile/coach-profile.component';
import { CoachesOverviewComponent } from './pages/about-us/coaches/coaches.component';
import { Halle1Component } from './pages/about-us/halle1/halle1.component';
import { ImpressionsComponent } from './pages/about-us/impressions/impressions.component';
import { PhilosophyComponent } from './pages/about-us/philosophy/philosophy.component';
import { WerkstattComponent } from './pages/about-us/werkstatt/werkstatt.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressComponent } from './pages/impress/impress.component';
import { DictionaryComponent } from './pages/new-comer/dictionary/dictionary.component';
import { ClassesComponent } from './pages/offer/classes/classes.component';
import { EventsComponent } from './pages/offer/events/events.component';
import { PricesComponent } from './pages/offer/prices/prices.component';
import { ScheduleComponent } from './pages/offer/schedule/schedule.component';

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
