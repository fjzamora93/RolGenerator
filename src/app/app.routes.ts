import { Routes } from '@angular/router';
import { ScenarioComponent } from './scenario/scenario.component';
import { ItemsComponent } from './items/items.component';
import { NpcComponent } from './npc/npc.component';


export const routes: Routes = [
    { path: 'scenario', component: ScenarioComponent },
    { path: 'items', component: ItemsComponent },
    {  path: 'npc', component: NpcComponent },
];
