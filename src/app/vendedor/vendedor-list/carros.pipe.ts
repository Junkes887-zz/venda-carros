import { Pipe, PipeTransform } from '@angular/core';
import { Tipo } from '../carros.model';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(value: Tipo): string {
    switch(value) {
      case Tipo.HATCH: return 'Hatch';
      case Tipo.SEDAN: return 'Sedan';
      case Tipo.SUV: return 'SUV';
      case Tipo.PICAPE: return 'Picape';
    }
  }

}
