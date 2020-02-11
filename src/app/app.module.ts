
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClassDescriptionComponent } from './components/class-description/class-description.component';
import { CoachTeaserComponent } from './components/coach-teaser/coach-teaser.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PageTeaserComponent } from './components/page-teaser/page-teaser.component';
import { PartnersComponent } from './components/partners/partners.component';
import { WodOverviewComponent } from './components/wod-overview/wod-overview.component';
import { CoreModule } from './core/core.module';
import { ClassesComponent } from './pages/classes/classes.component';
import { CoachesOverviewComponent } from './pages/coaches-overview/coaches-overview.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PricesComponent } from './pages/prices/prices.component';
import { SharedModule } from './shared/shared.module';
import { CoachProfileComponent } from './pages/coach-profile/coach-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    WodOverviewComponent,
    PageTeaserComponent,
    PartnersComponent,
    ContactFormComponent,
    PricesComponent,
    ClassesComponent,
    ClassDescriptionComponent,
    CoachesOverviewComponent,
    CoachTeaserComponent,
    CoachProfileComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
