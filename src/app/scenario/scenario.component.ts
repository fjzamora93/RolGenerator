import { Component, EventEmitter, Output, effect, signal } from '@angular/core';
import { ScenarioDetailComponent } from './scenario-detail/scenario-detail.component';
import { R3SelectorScopeMode } from '@angular/compiler';

@Component({
  selector: 'app-scenario',
  standalone: true,
  imports: [ScenarioDetailComponent],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.css'
})
export class ScenarioComponent {

    selectedScenario = signal('1');

    onSelectScenario(event : Event){
        const seleccion = event.target as HTMLImageElement;
        this.selectedScenario.update(value => seleccion.alt);
        console.log(this.selectedScenario)
    }

}
