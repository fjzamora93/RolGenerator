import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImpostorService } from './impostor.service';

@Component({
  selector: 'app-impostor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './impostor.component.html',
})
export class ImpostorComponent {

  numPlayers: number = 3;
  difficulty: number = 1; // 👈 valor por defecto
  results: string[] = [];
  submitted: boolean = false;
  error: string = ''; 
  
  constructor(private impostorService: ImpostorService) {}

  async submitPlayers(level: number) {
    this.error = ''; // reset del error
    if (this.numPlayers < 3) {
      this.error = 'Debe haber al menos 3 jugadores.';
      return;
    }

    // si pasa la validación
    this.results = await this.impostorService.shuffleImpostor(this.numPlayers, level);
    this.submitted = true;
  }

  toggleItem(i: number) {
    const element = document.getElementById(`player-${i}`);
    if (element) {
      element.classList.toggle('d-none');
    }
  }
}
