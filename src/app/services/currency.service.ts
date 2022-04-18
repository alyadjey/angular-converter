import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService {
  constructor(private http: HttpClient) {}
  getCurrency<T>(): Observable<T> {
    return this.http.get<T>('https://www.cbr-xml-daily.ru/daily_json.js');
  }
}
