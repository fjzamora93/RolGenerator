import { Inject, Injectable } from '@angular/core';
import NPC from '../../../public/data/npc.json';
import ITEMS_DESCRIPTION from '../../../public/data/items-description.json';

import { Personaje } from './npc.interface';

//TODO VAMOS A CAMBIARLO, VAMOS A HACER QUE EL PERSONAJE ALEATORIO SE GENERE EN EL SERVICIO EN LUGAR DE FUERA.

@Injectable({ providedIn: 'root' }) 
export class NpcService {
    public npcList : Personaje[] = NPC;
    public personaje? : Personaje;

    //TODO POR SI QUEREMOS AÑADIRLE MÁS COSAS AL PERSONAJE
    public oro?: number;
    public items?: boolean; 
    public habilidad?: string;
    public clase?: string;

    randomize(){
        let rd = Math.floor(Math.random() * this.npcList.length);
        this.personaje = {
            nombre: this.npcList[rd].nombre,
            fisico: this.npcList[rd].fisico,
            personalidad: this.npcList[Math.floor(Math.random() * this.npcList.length)].personalidad,
            presente:this.npcList[Math.floor(Math.random() * this.npcList.length)].presente,
            pasado:this.npcList[Math.floor(Math.random() * this.npcList.length)].pasado,
            motivacion:this.npcList[Math.floor(Math.random() * this.npcList.length)].motivacion,
    }};


}