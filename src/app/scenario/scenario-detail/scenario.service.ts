import { Injectable } from '@angular/core';
import ScenarioJSON from '../../../../public/data/scenarios.json';
import MercadoJSON from '../../../../public/data/mercado.json';
import TorreJSON from '../../../../public/data/torre.json';
import MonasterioJSON from '../../../../public/data/monasterio.json';
import MazeJSON from '../../../../public/data/monasterio.json';
import PosadaJSON from '../../../../public/data/posada.json';
import CuartelesJSON from '../../../../public/data/cuarteles.json';


export interface Scenario{
    id:string,
    nombre:string,
    escenografia:string,
    conflicto:string,
    argumento:string
}

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
    public scenarioList:Scenario[] = ScenarioJSON;
    public mercadoList:ScenarioPlace[] = MercadoJSON;
    public posadaList:ScenarioPlace[] = PosadaJSON;
    public torreList:ScenarioPlace[] = TorreJSON;
    public monasterioList:ScenarioPlace[] = MonasterioJSON;
    public cuartelesList:ScenarioPlace[] = CuartelesJSON;
    public mazeList:ScenarioPlace[] = MazeJSON;

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