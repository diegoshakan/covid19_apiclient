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
  display = false;
  countryDetail: any;
  countryDialog: any;
  yearTimeout: any;

  constructor(private countriesService: CountriesService, private showCountryDetail: ShowCountryService) { }

  ngOnInit(): void {
    this.countriesService.getListCountries().subscribe(
      data => this.countries = data
    );
  }

  showDialog(contryInfo) {
        this.display = true;
        this.countryDialog = [contryInfo]
    }

  getCountryDetail(nameCountry) {
        this.showCountryDetail.getDetailCountry(nameCountry).subscribe(data => this.countryDetail = data);
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
