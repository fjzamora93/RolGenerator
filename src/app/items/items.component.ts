import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from './items.service';

interface Item {
    id: number;
    nombre: string;
    descripcion: string;
  }


@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
    @Input({ required:true }) nivel!: number;
    

    selectedItem?: any;
    selectedItemProperty?:any;
    constructor(private dataList: ItemService){};

    tipoDeOjbeto?: string;
    sobrenombre?: string;
    material?: string;
    efectoMagico?: string;

    onClick(){
        let porcentaje = this.nivel * 5; //cada nivel del dado aumentará un 5% la parte del array que cogerá.

        const maxIndiceSobrenombre = Math.floor((porcentaje / 100) * this.dataList.efectosMagicos.length);
        const maxIndiceMaterial = Math.floor((porcentaje / 100) * this.dataList.materiales.length);
        const efectoMagico = Math.floor((porcentaje / 100) * this.dataList.efectosMagicos.length);
        
        let randNums = [Math.floor(Math.random() * this.dataList.tiposDeObjetos.length),
                    Math.floor(Math.random() * maxIndiceSobrenombre),
                    Math.floor(Math.random() * maxIndiceMaterial),
                    Math.floor(Math.random() * efectoMagico)]

        

        this.tipoDeOjbeto = this.dataList.tiposDeObjetos[randNums[0]];
        this.sobrenombre = this.dataList.sobrenombres[randNums[1]];
        this.material = this.dataList.materiales[randNums[2]];
        this.efectoMagico = this.dataList.efectosMagicos[randNums[3]];

        console.log(this.nivel)

    }

        
}


        
/*
20 = 1
1 = 5
2 = 10
3 = 15

*/
    


  
    
