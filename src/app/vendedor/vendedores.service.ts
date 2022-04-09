import { Injectable } from '@angular/core';

import { Vendedor } from './vendedores.model';

@Injectable({
  providedIn: 'root',
})
export class VendedoresService {
  private vendedores: Vendedor[];
  private contador = 6;

  constructor() {
    this.vendedores = JSON.parse(localStorage.getItem('vendedores')) ?? [];
  }

  public getVendedores() {
    return this.vendedores;
  }

  public remove(nome: string) {
    this.vendedores = this.vendedores.filter((vendedor) => vendedor.nome !== nome);
    localStorage.setItem('vendedores', JSON.stringify(this.vendedores));
  }

  public save(vendedor: Vendedor) {
    if (vendedor.id) {
      const index = this.vendedores.findIndex(g => g.id === vendedor.id);
      this.vendedores[index] = vendedor;
    } else {
      const id = this.contador++;
      this.vendedores.push({ ...vendedor, id });
    }
    localStorage.setItem('vendedores', JSON.stringify(this.vendedores));
  }

  public findById(id: number) {
    return this.vendedores.find(vendedor => vendedor.id === id);
  }
}
