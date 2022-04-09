import { Pipe, PipeTransform } from '@angular/core';
import { Sexo } from '../clientes.model';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: Sexo): string {
    switch(value) {
      case Sexo.MASCULINO: return 'Masculino';
      case Sexo.FEMININO: return 'Feminino';
    }
  }

}
