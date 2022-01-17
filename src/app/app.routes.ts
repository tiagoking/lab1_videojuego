/**
 * Archivo que gestiona las rutas de toda la aplicación
 * 
 * 
 */



/** 
 * Importacciones necesarias de los componentes
*/
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AboutComponent } from "./components/about/about.component";
import { VideojuegosComponent } from "./components/videojuegos/videojuegos.component";
import { VideojuegoComponent } from "./components/videojuego/videojuego.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";
import { HomeComponent } from "./components/home/home.component";

/**
 * Constante la cual tendrá todas la rutas la cuales se tienen acceso a la aplicación
 */
const APP_ROUTES = [
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "videojuegos", component: VideojuegosComponent },
    { path: "navbar", component: NavbarComponent },
    { path: "videojuego/:id", component: VideojuegoComponent },
    { path: "buscar/:termino", component: BuscadorComponent },
    { path: "**",pathMatch:"full",redirectTo:"home" }
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES);