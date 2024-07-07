//! NO UTILIZAR, ESTE NO ES EL USO CORRECTO DE UN PIPE, YA QUE SIEMPRE VA A APLICAR LA TRANSFORMACIÓN, NO DETECTA EVENTOS DE CAMBIO

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buttonpipe',
  standalone: true
})
export class ButtonpipePipe implements PipeTransform {

  transform(value: string): string {

    return value.startsWith('Ampliar') ? 'Ocultar detalles' : 'Ampliar detalles';

  }

}
