import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  readonly baseUrl = 'https://stock-quotes-api.herokuapp.com/santanderDevWeek';

  async getStocks(): Promise<Stock[]> {
    const url = 'https://stock-quotes-api.herokuapp.com/santanderDevWeek/stock';
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
