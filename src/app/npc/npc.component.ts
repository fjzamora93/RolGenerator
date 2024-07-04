import { Component, ViewChildren, ElementRef, QueryList } from '@angular/core';
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
    constructor (
        private npc: NpcService, 
        private el: ElementRef //Esto se utiliza para referirse a sí mismo
    ){};

    personaje?: Personaje = this.npc.personaje;
    editing: boolean = false;

    generate(){
        this.npc.randomize();
        this.personaje = this.npc.personaje;
    }


    edit(){
        this.editing = !this.editing;
    }

    revelar(event: Event) {
        const descripciones = this.el.nativeElement.querySelectorAll('.texto-descripcion');
        const button = event.target as HTMLImageElement;
        const itemToLeft = button!.nextElementSibling as HTMLElement;
        if (!itemToLeft.textContent?.trim()){ //Es decir, si NO hay contenido (ignorando espacios)
            this.generate()
            descripciones.forEach((element: HTMLElement) => {
                element.style.display = 'none';
                itemToLeft.style.display = 'inline';
              });
        } else {
            itemToLeft.style.display = itemToLeft.style.display === 'none' ? 'inline' : 'none';
       
        }
        

      }

}
