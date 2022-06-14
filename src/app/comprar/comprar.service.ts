import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Compra } from './comprar.model';

@Injectable({
  providedIn: 'root',
})
export class ComprarService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(`${environment.apiUrl}/compras`);
  }

  save(platform: Compra) {
    return this.httpClient.post(`${environment.apiUrl}/compras`, platform);
  }
}
