import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NpcService } from './npc.service';
import { Personaje } from './npc.interface';


@Component({
  selector: 'app-npc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './npc.component.html',
  styleUrl: './npc.component.css'
})

export class NpcComponent {
    constructor (private npc: NpcService){};
    personaje?: Personaje = this.npc.personaje;

    generate(){
        this.npc.randomize();
        this.personaje = this.npc.personaje;
    }

    revelar(event: Event) {
        const button = event.target as HTMLImageElement;
        const itemToLeft = button!.nextElementSibling as HTMLElement;
        itemToLeft.style.display = itemToLeft.style.display === 'none' ? 'inline' : 'none';
      }

}
