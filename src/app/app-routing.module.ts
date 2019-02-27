import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fichas-destino-gastronomia',
    component: DestinationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
