import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: '', pathMatch: 'full', redirectTo: '/countries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
