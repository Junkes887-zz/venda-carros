import { Injectable } from '@angular/core';

import { Carro } from './carros.model';

@Injectable({
  providedIn: 'root',
})
export class CarrosService {
  private carros: Carro[];
  private contador = 6;

  constructor() {
    this.carros = JSON.parse(localStorage.getItem('carros')) ?? [];
  }

  public getCarros() {
    return this.carros;
  }

  public remove(nome: string) {
    this.carros = this.carros.filter((carro) => carro.nome !== nome);
    localStorage.setItem('carros', JSON.stringify(this.carros));
  }

  public save(carro: Carro) {
    if (carro.id) {
      const index = this.carros.findIndex(g => g.id === carro.id);
      this.carros[index] = carro;
    } else {
      const id = this.contador++;
      this.carros.push({ ...carro, id });
    }
    localStorage.setItem('carros', JSON.stringify(this.carros));
  }

  public findById(id: number) {
    return this.carros.find(carro => carro.id === id);
  }
}
