import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compra } from './compras.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ComprasApiService {
  constructor(private httpClient: HttpClient) {}

  getCompras(): Observable<Compra[]> {
    return this.httpClient.get<Compra[]>(`${environment.apiUrl}/compras`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/compras/${id}`);
  }

  findById(id: number): Observable<Compra> {
    return this.httpClient.get<Compra>(`${environment.apiUrl}/compras/${id}`);
  }

  save(compra: Compra): Observable<Compra> {
    debugger;

    if(compra.id) {
      return this.httpClient.put<Compra>(`${environment.apiUrl}/compras/${compra.id}`, compra);
    }
    compra.id = null;
    return this.httpClient.post<Compra>(`${environment.apiUrl}/compras`, compra);
  }
}
