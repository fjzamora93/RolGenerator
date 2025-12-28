// impostor.component.ts
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

  numPlayers: number = 0;
  results: string[] = [];
  submitted: boolean = false;

  constructor(private impostorService: ImpostorService) {}

  submitPlayers() {
    if (this.numPlayers > 0) {
      this.results = this.impostorService.shuffleImpostor(this.numPlayers);
      this.submitted = true;
    }
  }

  toggleItem(i: number) {
    const element = document.getElementById(`player-${i}`);
    if (element) {
      element.classList.toggle('d-none');
    }
  }
}
