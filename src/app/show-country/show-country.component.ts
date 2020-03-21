import { Component, OnInit } from '@angular/core';
import { ShowCountryService } from './show-country.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {
  public countryDetail: any;
  constructor(private router: Router, private route: ActivatedRoute, private showCountryService: ShowCountryService) { }

  ngOnInit(): void {
    this.getCountry(this.route.snapshot.params['country']);
  }

  public getCountry(nameCountry) {
    this.showCountryService.getDetailCountry(nameCountry).subscribe(
      data => this.countryDetail = data
    );
  }
}
