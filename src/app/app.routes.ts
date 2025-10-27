import { Routes } from '@angular/router';
import { Home } from './components/home/home'
import { Landing } from './components/landing/landing';

export const routes: Routes = [
    //La ruta predefinida va a ser home
    {path: "", component: Home },
    {path: "home", component: Home},
    {path: "landing", component: Landing}




];
