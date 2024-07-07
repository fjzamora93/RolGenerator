import { Injectable } from "@angular/core";

import DescripcionesJSON from '../../../../public/data/tramas/1.descripciones.json';
import DetonantesJSON from '../../../../public/data/tramas/2.detonante.json';
import IniciosJSON from '../../../../public/data/tramas/3.inicios.json';
import ObjetivosJSON from '../../../../public/data/tramas/4.objetivo.json';
import InvolucradosJSON from '../../../../public/data/tramas/5.involucrados.json';
import RumoresJSON from '../../../../public/data/tramas/6.rumores.json';
import { Descripciones, Detonantes, Inicios, TramaConstruida, Involucrados, Objetivo } from "./trama.interface";

@Injectable({ providedIn:"root" })
export class TramaService{
    private descripciones:Descripciones[] = DescripcionesJSON;
    private detonantes:Detonantes[] = DetonantesJSON;
    private inicios:Inicios[] = IniciosJSON;
    private objetivos:Objetivo[] = ObjetivosJSON;
    private involucrados:Involucrados[] = InvolucradosJSON;
    //TODO public rumores = RumoresJSON;
 
    public randIndex:string = (Math.floor(Math.random() * 17) + 1).toString();
    public tramaConstruida:TramaConstruida = this.randomize();

    randInt(lista:any[]){
        let numero= Math.floor(Math.random() * lista.length);
        return numero;
    }

    randomize(){
        this.randIndex = (Math.floor(Math.random() * 17) + 1).toString();
        return {
                descripcion: this.descripciones[this.randInt(this.descripciones)],
                detonante: this.detonantes[this.randInt(this.detonantes)],
                inicio: this.inicios[this.randInt(this.inicios)],
                objetivo: this.objetivos[this.randInt(this.objetivos)],
                involucrado: this.involucrados[this.randInt(this.involucrados)]
            }
    }

}

