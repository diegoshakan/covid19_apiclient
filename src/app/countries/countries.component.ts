import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any[] = [];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getListCountries().subscribe(
      data => this.countries = data
    );
  }
}
