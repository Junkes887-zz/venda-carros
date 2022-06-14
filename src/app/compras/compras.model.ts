import { Carro } from "../carros/carros.model";
import { Vendedor } from "../vendedor/vendedores.model";

export interface Compra {
  id: number;
  formaPagamento: FormaPagamento;
  desconto: number;
  dataCompra: Date;
  carro: Carro;
  vendedor: Vendedor;
}

export enum FormaPagamento {
  A_VISTA = 'A_VISTA',
  A_PRAZO = 'A_PRAZO',
}