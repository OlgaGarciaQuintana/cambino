import { Routes } from '@angular/router';
import { Home } from './components/home/home'
import { Landing } from './components/landing/landing';
import { Ejercicio01clase } from './components/ejercicio01clase/ejercicio01clase';
import { Saludoenrutado } from './components/saludoenrutado/saludoenrutado';
import { Rxjscomponent } from './components/rxjscomponent/rxjscomponent';
import { PadreComponent } from './components/padre/padre';
import { AleatorioComponent } from './components/aleatorio/aleatorio';
import { PostListComponent } from './components/post-list/post-list';
import { UsuarioComponent } from './components/usuario/usuario';
import { UsuarioAPI } from './components/usuario-api/usuario-api';

export const routes: Routes = [
    //La ruta predefinida va a ser home
    {path: "", component: Home },
    {path: "home", component: Home},
    {path: "ejer01", component: Ejercicio01clase},
    {path: "saludoenrutado", component: Saludoenrutado },
    {path: "saludoenrutado/:nombre", component: Saludoenrutado },
    {path: "landing", component: Landing},
    {path: "rx", component: Rxjscomponent },
    {path: "padre", component: PadreComponent },
    {path: "aleatorio", component: AleatorioComponent },
    {path: "posts", component: PostListComponent},
    {path: "usuario", component: UsuarioComponent},
    {path: "api", component: UsuarioAPI}
];
