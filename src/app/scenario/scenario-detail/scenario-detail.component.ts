import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ScenarioService, Scenario, ScenarioPlace } from './scenario.service';
@Component({
  selector: 'app-scenario-detail',
  standalone: true,
  imports: [],
  templateUrl: './scenario-detail.component.html',
  styleUrl: './scenario-detail.component.css'
})
export class ScenarioDetailComponent implements OnChanges{
    @Input() escenario?: string; // de momento parece que es una cadena de texto
    escenarioSeleccionado? : Scenario; 
    place?: ScenarioPlace
    constructor(private escenarioService: ScenarioService){};

    ngOnChanges(changes: SimpleChanges){
        let indice = +this.escenario!;
        if (changes['escenario']){
            this.escenarioSeleccionado = this.escenarioService.scenarioList[indice];
        }else{
            console.log('No hay selección')
        }
        let value = 'B';

        switch (indice) {
            case 0:
                this.place = this.escenarioService.monasterioList[Math.floor(Math.random() * 9)]
                break;
            case 1:
                this.place = this.escenarioService.mazeList[Math.floor(Math.random() * 9)]
                break;
            case 2:
                this.place = this.escenarioService.cuartelesList[Math.floor(Math.random() * 9)]
                break;
            case 3:
                this.place = this.escenarioService.torreList[Math.floor(Math.random() * 9)]
                break;
            case 4:
                this.place = this.escenarioService.mercadoList[Math.floor(Math.random() * 9)]
                break;
            case 5:
                this.place = this.escenarioService.posadaList[Math.floor(Math.random() * 9)]
                break;
            default:
                this.place = this.escenarioService.cuartelesList[Math.floor(Math.random() * 9)]
        }
        console.log(this.place);
    }



    

}
