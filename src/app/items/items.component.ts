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
    selectedItem?: any;
    randNumber!: number;
    constructor(private dataList: ItemService){};

    onClick(){
        this.generateRandNumber()
        this.selectedItem = this.dataList.itemList[this.randNumber];
        console.log(this.selectedItem);
        }

    generateRandNumber(){
        this.randNumber = Math.floor(Math.random() * 8) + 1;
    }
        
}


        

    


  
    
