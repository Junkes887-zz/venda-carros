export interface Carro {
  id: number;
  nome: string;
  tipoCarro: Tipo;
  preco: number;
  ano: number;
  foto: string;
  vendido: boolean;
}

export enum Tipo {
  HATCH = 'HATCH',
  SEDAN = 'SEDAN',
  SUV = 'SUV',
  PICAPE = 'PICAPE',
}
