import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-scenario-detail',
  standalone: true,
  imports: [],
  templateUrl: './scenario-detail.component.html',
  styleUrl: './scenario-detail.component.css'
})
export class ScenarioDetailComponent implements OnChanges{
    @Input() escenario?: string; // de momento parece que es una cadena de texto
    @Output() scenarioEmitter = new EventEmitter<string>();

    ngOnChanges(){
        console.log("GENERANDO", this.escenario);
        this.scenarioEmitter.emit();
    }

}
