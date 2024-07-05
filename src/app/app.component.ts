import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterOutlet } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { NpcComponent } from "./npc/npc.component";
import { TramaComponent } from "./trama/trama.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, TemplateComponent, ItemsComponent, FormsModule, NpcComponent, ScenarioComponent, TramaComponent]
})
export class AppComponent {
  title = 'RolGenerator';

}
