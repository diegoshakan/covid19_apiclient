import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url = 'https://corona.lmao.ninja/v2/countries';
  constructor(private http: HttpClient) { }

  public getListCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
