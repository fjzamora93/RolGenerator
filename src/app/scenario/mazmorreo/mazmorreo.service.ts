
import { Injectable } from '@angular/core';
import RoomsDetailsJSON from '../../../../public/data/dungeons/roomsDetails.json';
import AdventureJson from '../../../../public/data/actos/actos.json';


import { RoomDetails } from './roomdetails.interface';
import { Adventure } from './adventure.interface';


@Injectable({ providedIn: 'root' }) 
export class MazmorreoService{

    public roomList:RoomDetails[]= RoomsDetailsJSON;
    public roomSelected:RoomDetails = this.roomList[Math.floor(Math.random() * this.roomList.length)]


    public adventures:Adventure[] = AdventureJson;

    
    randomize(){
        this.roomSelected = this.roomList[Math.floor(Math.random() * this.roomList.length)]
    }


    getScene(index:number): Adventure {
        try {
            const selectedAdventure = this.adventures[index];
            return selectedAdventure;
        } catch (error) {
            console.error(error);
            return this.adventures[0]; 
        }
        
    }
}


