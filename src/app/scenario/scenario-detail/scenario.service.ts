import { Injectable } from '@angular/core';

import MercadoJSON from '../../../../public/data/mercado.json';
import TorreJSON from '../../../../public/data/torre.json';
import MonasterioJSON from '../../../../public/data/monasterio.json';
import PosadaJSON from '../../../../public/data/posada.json';
import CuartelesJSON from '../../../../public/data/cuarteles.json';
import MazeJSON from '../../../../public/data/maze.json';



export interface npc{
    descripcion:string,
    personalidad:string,
    motivo:string,
}

export interface ScenarioPlace{
    nombre: string;
    historia: string;
    descripcion: string;
    evento1: string;
    evento2: string;
    noticia: string;
    visitante: npc;
    habitante: npc;
}

@Injectable({ providedIn: 'root' }) 
export class ScenarioService{
    public scenarioSelected?: ScenarioPlace;
  
    public mercadoList:ScenarioPlace[] = MercadoJSON;
    public posadaList:ScenarioPlace[] = PosadaJSON;
    public torreList:ScenarioPlace[] = TorreJSON;
    public monasterioList:ScenarioPlace[] = MonasterioJSON;
    public cuartelesList:ScenarioPlace[] = CuartelesJSON;
    public mazeList:ScenarioPlace[] = MazeJSON;


    seleccionarEscenario(pickedScenario : string){
        let listaSeleccionada!: ScenarioPlace[];
        const rdNums :number[] = []

        switch (pickedScenario) {
            case 'church':
                this.scenarioSelected = this.monasterioList[Math.floor(Math.random() * this.monasterioList.length)]
                listaSeleccionada = this.monasterioList;
                break;
            case 'maze':
                this.scenarioSelected = this.mazeList[Math.floor(Math.random() * this.mazeList.length)]
                listaSeleccionada = this.mazeList;
                break;
            case 'town':
                this.scenarioSelected = this.cuartelesList[Math.floor(Math.random() * this.cuartelesList.length)]
                listaSeleccionada = this.cuartelesList;
                break;
            case 'tower':
                this.scenarioSelected = this.torreList[Math.floor(Math.random() * this.torreList.length)]
                listaSeleccionada = this.torreList;
                break;
            case 'market':
                this.scenarioSelected = this.mercadoList[Math.floor(Math.random() * this.mercadoList.length)]
                listaSeleccionada = this.mercadoList;
                break;
            case 'inn':
                listaSeleccionada = this.posadaList;
                this.scenarioSelected = this.posadaList[Math.floor(Math.random() * this.posadaList.length)]
                break;
            default:
                listaSeleccionada = this.mazeList;
                this.scenarioSelected = this.mazeList[Math.floor(Math.random() * this.mazeList.length)]
        }
        this.randomize(listaSeleccionada)
       
    }

    randomize(listaSeleccionada : ScenarioPlace[]){
        this.scenarioSelected = {
            nombre: listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].nombre,
            historia: listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].historia,
            descripcion: listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].descripcion,
            evento1: listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].evento1,
            evento2: listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].evento2,
            noticia: listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].noticia,
            visitante: {
                descripcion:listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].visitante.descripcion,
                personalidad:listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].visitante.personalidad,
                motivo:listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].visitante.motivo,
            },
            habitante: {
                descripcion:listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].habitante.descripcion,
                personalidad:listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].habitante.personalidad,
                motivo:listaSeleccionada[Math.floor(Math.random() * listaSeleccionada.length)].habitante.motivo,
            },
        }

    }

//TODO Generar de forma aleatoria las siguientes LISTAS:
/**
 * Una lista con 10 ambientaciones para cada escenario (reducir el número de escenarios a 3: FANTASÍA MEDIEVAL, MISTERIO, CIENCIA FICCIÓN

 * Una lista con 10 posibles conflictos / situación subyacente / problemas de fondo para cada escenario.
 * Una lista con 10 posibles detonantes para comenzar una aventura (no te preocupes por que estén relacionados o no con los conflictos de fondo... lo estarán)
 * 
 *GENERACIÓN DE ESCENARIO
 -Crear un conjunto de ubicaciones aleatorias para cada escenario. Para Fantasía Medieval, elegir posibles ubicaciones.
 -Comenzar con una ciudad de fantasía medieval. 
 * 

 * ???PERSONAJE RELEVANTE??? Una lista con 10 personas relevantes para la trama.
 * 
 * !PARA EVOLUCIONAR LA TRAMA
 * Para que la trama pueda evolucionar y generar situaciones de forma aleatoria, 
 * es posible establecer ciertmos momentos cíclicos. Es decir, en todas las aventuras debe haber
 * momentos comunes (por ejemplo, la taberna-posada al principio // un descanso en medio del tsunami narrativo)
 * 
 * Podrías marcar 5 puntos o momentos de la trama que se vayan a generar.
 * 1. Taberna del principio -los personajes pueden presentarse y contar alguna anécdota "ligera" de su pasado (sale de forma aleatoria, y el personaje debe explicar cómo ha sucedido).
 * 2. Presentación de un personaje que puede ser relevante en la trama.
 * 3. El descubrimiento de un rastro que lleva a un lugar "oculto"
 * 4. Descubrimiento de un objeto misterioso.
 * 5. Descanso antes del desenlace... aquí los personajes podrán recordar algo de su pasado y obtener alguna habilidad adicional -o no.
 * 6. El boss final: un enfrentamiento definitivo. 
 */

}