import { Component } from '@angular/core';
import { ScenarioDetailComponent } from './scenario-detail/scenario-detail.component';

@Component({
  selector: 'app-scenario',
  standalone: true,
  imports: [ScenarioDetailComponent],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.css'
})
export class ScenarioComponent {
    selectedScenario? :string = '1';

    onSelectScenario(event : Event){
        const seleccion = event.target as HTMLImageElement;
        this.selectedScenario = seleccion.alt;
        console.log(this.selectedScenario);
    }

}
