import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemService } from './items.service';
import { FormsModule } from '@angular/forms';

interface DescripcionObject {
    id: string;
    descripcion: string;
  }


@Component({
  selector: 'app-items',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
    nivel: number = 1;
   
    selectedItem?: any;
    selectedItemProperty?:any;
    constructor(private dataList: ItemService){};

    tipoDeOjbeto?: string;
    itemDescription?: any;
    sobrenombre?: string;
    material?: string;
    efectoMagico?: string;

    allRandom(){
        this.buscar();
        this.inspeccionar();
        this.detectar();
    }

    buscar(){
        let randNums = this.calcularPorcentaje();

        this.tipoDeOjbeto = this.dataList.tiposDeObjetos[randNums[0]];
        this.sobrenombre = this.dataList.sobrenombres[randNums[1]];
        this.itemDescription = (this.dataList.itemDescription[randNums[4]] as any).descripcion;
        

        console.log(this.itemDescription)
    }

    inspeccionar(){
        let randNums = this.calcularPorcentaje();
        this.material = this.dataList.materiales[randNums[2]];
        console.log(this.sobrenombre)
    }

    detectar(){
        let randNums = this.calcularPorcentaje();
        this.efectoMagico = this.dataList.efectosMagicos[randNums[3]];
        console.log(this.efectoMagico)
    }

    calcularPorcentaje(){
        let porcentaje = this.nivel * 5; //cada nivel del dado aumentará un 5% la parte del array que cogerá.
        const maxIndiceSobrenombre = Math.floor((porcentaje / 100) * this.dataList.efectosMagicos.length);
        const maxIndiceMaterial = Math.floor((porcentaje / 100) * this.dataList.materiales.length);
        const efectoMagico = Math.floor((porcentaje / 100) * this.dataList.efectosMagicos.length);
        
        let randNums = [
                    Math.floor(Math.random() * this.dataList.tiposDeObjetos.length),
                    Math.floor(Math.random() * maxIndiceSobrenombre),
                    Math.floor(Math.random() * maxIndiceMaterial),
                    Math.floor(Math.random() * efectoMagico),
                    Math.floor(Math.random() * this.dataList.itemDescription.length)
                ];
        return randNums;
    }

        
}


        
/*
20 = 1
1 = 5
2 = 10
3 = 15

*/
    


  
    
