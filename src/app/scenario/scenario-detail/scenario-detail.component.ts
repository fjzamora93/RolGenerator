import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, signal, effect } from '@angular/core';
import { ScenarioService,  ScenarioPlace } from './scenario.service';
import { HideDetailsDirective } from '../../directives/hide-details.directive';
@Component({
  selector: 'app-scenario-detail',
  standalone: true,
  imports: [HideDetailsDirective],
  templateUrl: './scenario-detail.component.html',
  styleUrl: './scenario-detail.component.css'
})
export class ScenarioDetailComponent implements OnChanges{
    @Input() escenario?: string; // de momento parece que es una cadena de texto
    place?: ScenarioPlace

    constructor(private escenarioService: ScenarioService){};


    ngOnChanges(changes: SimpleChanges){
        if (changes['escenario']){
            this.escenarioService.seleccionarEscenario(this.escenario!)
            this.place = this.escenarioService.scenarioSelected;
        }else{
            console.log('No hay selección')
        }
    }

    



    

}
