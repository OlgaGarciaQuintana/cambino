import { Routes } from '@angular/router';
import { Home } from './components/home/home'
import { Landing } from './components/landing/landing';
import { Ejercicio01clase } from './components/ejercicio01clase/ejercicio01clase';

export const routes: Routes = [
    //La ruta predefinida va a ser home
    {path: "", component: Home },
    {path: "home", component: Home},
    {path: "ejer01", component: Ejercicio01clase},
    {path: "landing", component: Landing}




];
