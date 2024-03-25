import { Routes } from '@angular/router';
import { Botones2Component } from './botones2/botones2.component';
import { Botones1Component } from './botones1/botones1.component';

export const routes: Routes = [

    {path:'hola', component:Botones2Component},
    {path:'chau', component:Botones1Component},
];
