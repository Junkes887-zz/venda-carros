import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnyObject } from 'chart.js/types/basic';
import { Compra } from './../compras/compras.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardApiService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Number[]> {
    return this.httpClient.get<Number[]>(`${environment.apiUrl}/compras/dash`);
  }
}