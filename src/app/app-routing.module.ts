import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowCountryComponent } from './show-country/show-country.component';
import { CountriesComponent } from './countries/countries.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'countries/:country', component: ShowCountryComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
