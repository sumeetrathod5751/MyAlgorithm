import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:8000/'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl + "ticker/");
  }

  getStockDetails(symbol:string): Observable<any> {
    return this.http.get<any>(this.apiUrl + `fundamentals/${symbol}`)
  }

  searchStock(query:string): Observable<any>{
    return this.http.get<any>(this.apiUrl + "ticker/search/" + query)
  }
}
