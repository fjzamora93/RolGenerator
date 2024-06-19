import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';

import * as datos from '../../public/data/items.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ItemsComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RolGenerator';
  nivel: number = 1;
}
