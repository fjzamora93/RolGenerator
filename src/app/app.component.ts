import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { ScenarioComponent } from './scenario/scenario.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { NpcComponent } from "./npc/npc.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TemplateComponent, ItemsComponent, FormsModule, NpcComponent, ScenarioComponent]
})
export class AppComponent {
  title = 'RolGenerator';

}
