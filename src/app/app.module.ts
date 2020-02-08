
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { PageTeaserComponent } from './components/page-teaser/page-teaser.component';
import { PartnersComponent } from './components/partners/partners.component';
import { WodOverviewComponent } from './components/wod-overview/wod-overview.component';
import { CoreModule } from './core/core.module';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { PricesComponent } from './pages/prices/prices.component';
import { ClassesComponent } from './pages/classes/classes.component';
import { ClassDescriptionComponent } from './components/class-description/class-description.component';

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
    ClassDescriptionComponent
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
