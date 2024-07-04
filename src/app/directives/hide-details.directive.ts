import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideDetails]',
  standalone: true,
  host: {
    '(click)' : 'hideDetails($event)',
  }
})

export class HideDetailsDirective {

  constructor() { }

  hideDetails(event: Event) {
    const seleccion = event.currentTarget as HTMLElement;
    const childP = seleccion.querySelector('.ocultar') as HTMLElement;
   
    //classList accede a la lista de clases de childP
    /**toggle('mostrar'): Alterna la clase mostrar en el elemento childP. 
     * Si childP ya tiene la clase mostrar, toggle la eliminará. 
     * Si childP no tiene la clase mostrar, toggle la añadirá. */ 
    childP.classList.toggle('mostrar');
    
}

}
