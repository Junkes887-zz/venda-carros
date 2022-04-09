import { Injectable } from '@angular/core';

import { Cliente, Sexo } from './clientes.model';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private clientes: Cliente[];
  private contador = 6;

  constructor() {
    this.clientes = JSON.parse(localStorage.getItem('clientes')) ?? [];
  }

  public getClientes() {
    return this.clientes;
  }

  public remove(nome: string) {
    this.clientes = this.clientes.filter((cliente) => cliente.nome !== nome);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  public save(cliente: Cliente) {
    if (cliente.id) {
      const index = this.clientes.findIndex(c => c.id === cliente.id);
      this.clientes[index] = cliente;
    } else {
      const id = this.contador++;
      this.clientes.push({ ...cliente, id });
    }
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
  }

  public findById(id: number) {
    return this.clientes.find(cliente => cliente.id === id);
  }
}
