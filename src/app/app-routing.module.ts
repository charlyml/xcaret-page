import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fichas-destino-gastronomia',
    component: DestinationsComponent
  },
  {
    path: 'lista-tours',
    component: ToursComponent
  },
  {
    path: 'ficha-producto',
    component: ProductCardComponent
  },
  {
    path: 'ficha2-tours',
    component: ToursCardComponent
  },
  {
    path: 'promociones',
    component: PromotionsComponent
  },
  {
    path: 'paquetes-prearmados',
    component: PackagesComponent
  },
  {
    path: 'quintanarroenses',
    component: QuintanarroensesComponent
  },
  {
    path: 'hotel-xcaret',
    component: XcaretHotelComponent
  },
  {
    path: 'guia-precios',
    component: PriceGuideComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
