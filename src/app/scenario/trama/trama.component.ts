import { Component } from '@angular/core';
import { TramaService } from './trama.service'
import { TramaConstruida } from "./trama.interface";
import { HideDetailsDirective } from '../../directives/hide-details.directive';
import { LowerFirstLetterPipe } from '../../pipes/lowercase.pipe'; 



@Component({
  selector: 'app-trama',
  standalone: true,
  imports: [HideDetailsDirective, LowerFirstLetterPipe],
  templateUrl: './trama.component.html',
  styleUrl: './trama.component.css',
  host:{
    class:'row',
  }
})
export class TramaComponent {
    trama!:TramaConstruida;

    constructor(public tramaService: TramaService ){
        this.trama = tramaService.tramaConstruida;
        console.log(this.trama);
    };
    



    randomize(event: Event){
        this.trama = this.tramaService.randomize()
        let ampliacionDetalles = document.querySelector('.ocultar');
        ampliacionDetalles?.classList.toggle('mostrar');
        console.log(this.tramaService.randIndex)
    }

}
