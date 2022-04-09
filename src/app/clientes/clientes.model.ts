export interface Cliente {
  id: number;
  nome: string;
  sexo: Sexo;
  cpf_cnpj: string;
  telefone: string;
}

export enum Sexo {
  MASCULINO = 'MASCULINO',
  FEMININO = 'FEMININO'
}
