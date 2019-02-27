import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { ToursComponent } from './pages/tours/tours.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { ToursCardComponent } from './pages/tours-card/tours-card.component';
import { PromotionsComponent } from './pages/promotions/promotions.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { QuintanarroensesComponent } from './pages/quintanarroenses/quintanarroenses.component';
import { XcaretHotelComponent } from './pages/xcaret-hotel/xcaret-hotel.component';
import { PriceGuideComponent } from './pages/price-guide/price-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DestinationsComponent,
    ToursComponent,
    ProductCardComponent,
    ToursCardComponent,
    PromotionsComponent,
    PackagesComponent,
    QuintanarroensesComponent,
    XcaretHotelComponent,
    PriceGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
