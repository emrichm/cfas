
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterOutletDirective } from './directives/router-outlet.directive';
import { CoachesOverviewComponent } from './pages/about-us/coaches/coaches.component';
import { CoachProfileComponent } from './pages/about-us/coaches/components/coach-profile/coach-profile.component';
import { CoachTeaserComponent } from './pages/about-us/coaches/components/coach-teaser/coach-teaser.component';
import { Halle1Component } from './pages/about-us/halle1/halle1.component';
import { InsightsComponent } from './pages/about-us/insights/insights.component';
import { PhilosophyComponent } from './pages/about-us/philosophy/philosophy.component';
import { WerkstattComponent } from './pages/about-us/werkstatt/werkstatt.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InquiryFormComponent } from './pages/contact/inquiry-form/inquiry-form.component';
import { HomeComponent } from './pages/home/home.component';
import { PageTeaserComponent } from './pages/home/page-teaser/page-teaser.component';
import { PartnersComponent } from './pages/home/partners/partners.component';
import { GermanWeekDayPipe } from './pages/home/wod-overview/pipes/german-week-day.pipe';
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
import { ShopComponent } from './pages/offer/shop/shop.component';
import { GdprModalComponent } from './shared/components/gdpr-modal/gdpr-modal.component';
import { ImageGalleryModalComponent } from './shared/components/image-gallery-modal/image-gallery-modal.component';
import { ImageGalleryComponent } from './shared/components/image-gallery/image-gallery.component';
import { SharedModule } from './shared/shared.module';
import { GoogleMapsComponent } from './pages/contact/google-maps/google-maps.component';

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
    InsightsComponent,
    EventsComponent,
    EventComponent,
    DictionaryComponent,
    CrossfitComponent,
    EntryComponent,
    GermanWeekDayPipe,
    ShopComponent,
    GoogleMapsComponent
  ],
  entryComponents: [
    GdprModalComponent
  ],
  imports: [
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
