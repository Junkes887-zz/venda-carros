import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from './carros.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarrosApiService {
  constructor(private httpClient: HttpClient) {}

  getCarros(nome): Observable<Carro[]> {
    return this.httpClient.get<Carro[]>(`${environment.apiUrl}/carros/search?nome=${nome}`);
  }

  remove(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/carros/${id}`);
  }

  findById(id: number): Observable<Carro> {
    return this.httpClient.get<Carro>(`${environment.apiUrl}/carros/${id}`);
  }

  save(carro: Carro): Observable<Carro> {
    if(carro.id) {
      return this.httpClient.put<Carro>(`${environment.apiUrl}/carros/${carro.id}`, carro);
    }

    carro.id = null;
    return this.httpClient.post<Carro>(`${environment.apiUrl}/carros`, carro);
  }
}
