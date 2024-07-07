import { Component, EventEmitter, Output, effect, signal } from '@angular/core';
import { ScenarioDetailComponent } from './scenario-detail/scenario-detail.component';
import { R3SelectorScopeMode } from '@angular/compiler';
import { TramaComponent } from './trama/trama.component';

@Component({
  selector: 'app-scenario',
  standalone: true,
  imports: [ScenarioDetailComponent, TramaComponent],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.css'
})
export class ScenarioComponent {

    selectedScenario = signal('city');

    

    onSelectScenario(event : Event){
        const seleccion = event.currentTarget as HTMLElement;
        const childImg = seleccion.querySelector('img') as HTMLImageElement;

        this.selectedScenario.update(value => '0');
        setTimeout(() => {
            this.selectedScenario.update(value => childImg.alt);
            console.log("Esto se ejecuta después de 0.1 segundos");
          }, 100);
        
        console.log(this.selectedScenario)
    }


}
