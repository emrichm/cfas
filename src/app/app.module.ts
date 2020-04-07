
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterOutletDirective } from './directives/router-outlet.directive';
import { AboutUsModule } from './pages/about-us/about-us.module';
import { ContactModule } from './pages/contact/contact.module';
import { ImpressModule } from './pages/impress/impress.module';
import { NewComerModule } from './pages/new-comer/new-comer.module';
import { OfferModule } from './pages/offer/offer.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    RouterOutletDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AboutUsModule,
    ContactModule,
    ImpressModule,
    NewComerModule,
    OfferModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
