import { Injectable } from '@angular/core';
import ScenarioJSON from '../../../../public/data/scenarios.json'


export interface Scenario{
    id:string,
    nombre:string,
    escenografia:string,
    conflicto:string,
    argumento:string
}

@Injectable({ providedIn: 'root' }) 
export class ScenarioService{
    public scenarioList:Scenario[] = ScenarioJSON;

}