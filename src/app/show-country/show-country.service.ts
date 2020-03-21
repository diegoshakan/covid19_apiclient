import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowCountryService {

  private url = 'https://corona.lmao.ninja/countries';

  constructor(private http: HttpClient) { }

  public getDetailCountry(nameCountry: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + nameCountry);
  }
}
