import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './pages/classes/classes.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'our-box',
    children: [
      { path: 'philosophy', component: HomeComponent },
      { path: 'coaches', component: HomeComponent },
      { path: 'halle1', component: HomeComponent },
      { path: 'werkstatt', component: HomeComponent },
      { path: 'romwod', component: HomeComponent }
    ]
  },
  {
    path: 'offer',
    children: [
      { path: 'schedule', component: HomeComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'prices', component: PricesComponent }
    ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
