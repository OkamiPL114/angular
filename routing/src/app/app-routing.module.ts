import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RealizationsComponent } from './components/realizations/realizations.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationDetailsComponent } from './components/locations/location-details/location-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent, children: [
    { path: 'realizations', component: RealizationsComponent},
    { path: 'locations', component: LocationsComponent},
    { path: 'locations/:id', component: LocationDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
