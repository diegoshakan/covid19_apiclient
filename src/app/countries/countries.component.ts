import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';
import { ShowCountryService } from '../show-country/show-country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  countries: any[] = [];
  cols: any[];
  display = false;
  countryDetail: any;
  countryDialog: any;
  yearTimeout: any;
  route: any;

  constructor(
    private countriesService: CountriesService,
  ) { }

  ngOnInit(): void {
    this.countriesService.getListCountries().subscribe(
      data => this.countries = data
    );

    this.cols = [
      { field: 'country', header: 'País' },
      { field: 'cases', header: 'Casos' },
      { field: 'deaths', header: 'Mortes' },
      { field: 'recovered', header: 'Curados' }
    ];
  }

  showDialog(countryInfo) {
    this.display = true;
    this.countryDialog = [countryInfo];
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, 'country', 'gt');
    }, 250);
  }
}
