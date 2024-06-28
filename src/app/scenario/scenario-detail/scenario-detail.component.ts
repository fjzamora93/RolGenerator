import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ScenarioService, Scenario } from './scenario.service';
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
    constructor(private escenarioService: ScenarioService){};

    ngOnChanges(changes: SimpleChanges){
        let indice = +this.escenario!;
        if (changes['escenario']){
            this.escenarioSeleccionado = this.escenarioService.scenarioList[indice];
        }else{
            console.log('No hay selección')
        }
    }

    

}
