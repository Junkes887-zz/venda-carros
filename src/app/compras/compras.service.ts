import { Injectable } from '@angular/core';

import { Compra } from './compras.model';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  private compras: Compra[];
  private contador = 6;

  constructor() {
    this.compras = JSON.parse(localStorage.getItem('compras')) ?? [];
  }

  public getCompras() {
    return this.compras;
  }

  public remove(id: number) {
    this.compras = this.compras.filter((compra) => compra.id !== id);
    localStorage.setItem('compras', JSON.stringify(this.compras));
  }

  public save(compra: Compra) {
    if (compra.id) {
      const index = this.compras.findIndex(g => g.id === compra.id);
      this.compras[index] = compra;
    } else {
      const id = this.contador++;
      this.compras.push({ ...compra, id });
    }
    localStorage.setItem('compras', JSON.stringify(this.compras));
  }

  public findById(id: number) {
    return this.compras.find(compra => compra.id === id);
  }
}
