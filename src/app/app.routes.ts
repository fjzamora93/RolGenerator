import { Routes } from '@angular/router';
import { ScenarioComponent } from './scenario/scenario.component';
import { ItemsComponent } from './items/items.component';
import { NpcComponent } from './npc/npc.component';
import { ImpostorComponent } from './impostor/impostor.component';


export const routes: Routes = [
    { path: '', redirectTo: 'scenario', pathMatch: 'full' }, 
    { path: 'impostor', component: ImpostorComponent },
    { path: 'scenario', component: ScenarioComponent },
    { path: 'items', component: ItemsComponent },
    {  path: 'npc', component: NpcComponent },
];
