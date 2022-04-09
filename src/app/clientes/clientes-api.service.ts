import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './clientes.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientesApiService {
  constructor(private httpClient: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${environment.apiUrl}/clientes`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/clientes/${id}`);
  }

  findById(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${environment.apiUrl}/clientes/${id}`);
  }

  save(cliente: Cliente): Observable<Cliente> {
    if(cliente.id) {
      return this.httpClient.put<Cliente>(`${environment.apiUrl}/clientes/${cliente.id}`, cliente);
    }
    return this.httpClient.post<Cliente>(`${environment.apiUrl}/clientes`, cliente);
  }
}
