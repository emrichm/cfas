
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClassDescriptionComponent } from './components/class-description/class-description.component';
import { CoachTeaserComponent } from './components/coach-teaser/coach-teaser.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { InquiryFormComponent } from './components/inquiry-form/inquiry-form.component';
import { PageTeaserComponent } from './components/page-teaser/page-teaser.component';
import { PartnersComponent } from './components/partners/partners.component';
import { WodOverviewComponent } from './components/wod-overview/wod-overview.component';
import { CoreModule } from './core/core.module';
import { RouterOutletDirective } from './directives/router-outlet.directive';
import { ClassesComponent } from './pages/classes/classes.component';
import { CoachProfileComponent } from './pages/coach-profile/coach-profile.component';
import { CoachesOverviewComponent } from './pages/coaches-overview/coaches-overview.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Halle1Component } from './pages/halle1/halle1.component';
import { HomeComponent } from './pages/home/home.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';
import { PricesComponent } from './pages/prices/prices.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { SharedModule } from './shared/shared.module';
import { ImageGalleryModalComponent } from './components/image-gallery-modal/image-gallery-modal.component';
import { WerkstattComponent } from './pages/werkstatt/werkstatt.component';

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
    WerkstattComponent
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
