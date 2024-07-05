import { Component } from '@angular/core';
import { TramaService } from './trama.service'
import { TramaConstruida } from "./trama.interface";


@Component({
  selector: 'app-trama',
  standalone: true,
  imports: [],
  templateUrl: './trama.component.html',
  styleUrl: './trama.component.css'
})
export class TramaComponent {
    trama!:TramaConstruida;

    constructor(public tramaService: TramaService ){
        this.trama = tramaService.tramaConstruida;
        console.log(this.trama);
    };
    



    click(){
        console.log(this.trama);
    }

}
