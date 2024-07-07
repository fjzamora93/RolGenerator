import { Component } from '@angular/core';
import { MazmorreoService } from './mazmorreo.service';
import { HideDetailsDirective } from '../../directives/hide-details.directive'; 

@Component({
  selector: 'app-mazmorreo',
  standalone: true,
  imports: [HideDetailsDirective],
  templateUrl: './mazmorreo.component.html',
  styleUrl: './mazmorreo.component.css'
})
export class MazmorreoComponent {
    
    constructor(public roomService: MazmorreoService){}

    randomize(event: Event){
        this.roomService.randomize()
        let ampliacionDetalles = document.querySelector('.ocultar');
        ampliacionDetalles?.classList.toggle('mostrar');

    }

}

