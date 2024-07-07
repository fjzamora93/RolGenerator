
import { Injectable } from '@angular/core';
import RoomsDetailsJSON from '../../../../public/data/dungeons/roomsDetails.json';

@Injectable({ providedIn: 'root' }) 
export class MazmorreoService{

    public roomList:RoomDetails[]= RoomsDetailsJSON;
    public roomSelected:RoomDetails = this.roomList[Math.floor(Math.random() * this.roomList.length)]
    
    randomize(){
        this.roomSelected = this.roomList[Math.floor(Math.random() * this.roomList.length)]
    
    }
}


export interface RoomDetails {
    token: string;
    habitacion: string;
    descripcion: string;
    nodoCentral: string;
    objeto1: {
        elemento: string;
        relacion: string;
    };
    objeto2: {
        elemento: string;
        relacion: string;
    };
    objeto3: {
        elemento: string;
        relacion: string;
    };
}