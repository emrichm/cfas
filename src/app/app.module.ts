
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterOutletDirective } from './directives/router-outlet.directive';
import { CoachesOverviewComponent } from './pages/about-us/coaches/coaches.component';
import { CoachProfileComponent } from './pages/about-us/coaches/components/coach-profile/coach-profile.component';
import { CoachTeaserComponent } from './pages/about-us/coaches/components/coach-teaser/coach-teaser.component';
import { Halle1Component } from './pages/about-us/halle1/halle1.component';
import { ImpressionsComponent } from './pages/about-us/impressions/impressions.component';
import { PhilosophyComponent } from './pages/about-us/philosophy/philosophy.component';
import { WerkstattComponent } from './pages/about-us/werkstatt/werkstatt.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InquiryFormComponent } from './pages/contact/inquiry-form/inquiry-form.component';
import { HomeComponent } from './pages/home/home.component';
import { PageTeaserComponent } from './pages/home/page-teaser/page-teaser.component';
import { PartnersComponent } from './pages/home/partners/partners.component';
import { WodOverviewComponent } from './pages/home/wod-overview/wod-overview.component';
import { ImpressComponent } from './pages/impress/impress.component';
import { CrossfitComponent } from './pages/new-comer/crossfit/crossfit.component';
import { DictionaryComponent } from './pages/new-comer/dictionary/dictionary.component';
import { EntryComponent } from './pages/new-comer/entry/entry.component';
import { ClassDescriptionComponent } from './pages/offer/classes/class-description/class-description.component';
import { ClassesComponent } from './pages/offer/classes/classes.component';
import { EventComponent } from './pages/offer/events/event/event.component';
import { EventsComponent } from './pages/offer/events/events.component';
import { PricesComponent } from './pages/offer/prices/prices.component';
import { ScheduleComponent } from './pages/offer/schedule/schedule.component';
import { ImageGalleryModalComponent } from './shared/components/image-gallery-modal/image-gallery-modal.component';
import { ImageGalleryComponent } from './shared/components/image-gallery/image-gallery.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    WodOverviewComponent,
    PageTeaserComponent,
    PartnersComponent,
    InquiryFormComponent,
    PricesComponent,
    ClassesComponent,
    ClassDescriptionComponent,
    CoachesOverviewComponent,
    CoachTeaserComponent,
    CoachProfileComponent,
    RouterOutletDirective,
    PhilosophyComponent,
    ScheduleComponent,
    Halle1Component,
    ImageGalleryComponent,
    ImageGalleryModalComponent,
    WerkstattComponent,
    ImpressComponent,
    ImpressionsComponent,
    EventsComponent,
    EventComponent,
    DictionaryComponent,
    CrossfitComponent,
    EntryComponent
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
