import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';

import * as datos from '../../public/data/items.json'
import { NpcComponent } from "./npc/npc.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent, ItemsComponent, FormsModule, NpcComponent]
})
export class AppComponent {
  title = 'RolGenerator';

}
