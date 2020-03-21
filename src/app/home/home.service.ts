import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url = 'https://corona.lmao.ninja/all';
  constructor(private http: HttpClient) { }

  public getGlobalList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
