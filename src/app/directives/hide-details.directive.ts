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

  hideDetails(event: Event){
    const seleccion = event.currentTarget as HTMLElement;
    const childP = seleccion.querySelector('.ocultar') as HTMLElement;
    childP.style.display = (childP.style.display === 'block') ? 'none' : 'block' ;
}

}
