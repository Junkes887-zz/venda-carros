import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendedor } from './vendedores.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VendedoresApiService {
  constructor(private httpClient: HttpClient) {}

  getVendedores(): Observable<Vendedor[]> {
    return this.httpClient.get<Vendedor[]>(`${environment.apiUrl}/vendedores`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/vendedores/${id}`);
  }

  findById(id: number): Observable<Vendedor> {
    return this.httpClient.get<Vendedor>(`${environment.apiUrl}/vendedores/${id}`);
  }

  save(vendedor: Vendedor): Observable<Vendedor> {
    if(vendedor.id) {
      return this.httpClient.put<Vendedor>(`${environment.apiUrl}/vendedores/${vendedor.id}`, vendedor);
    }
    return this.httpClient.post<Vendedor>(`${environment.apiUrl}/vendedores`, vendedor);
  }
}
