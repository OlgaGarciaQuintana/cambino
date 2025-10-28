import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home', //esto es para usarlo en html
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

  nombre = "Olga";
  titulo = "Deku"
  ancho=300;
  hasError = false;
  mostrar = false;
  items= ["Manzana", "Banana", "Naranja"];
  today = new Date();

  constructor(){
    console.log("constructor");
    this.nombre="Jose";
  }

  ngOnInit(){
    console.log("ngOnInit")
    this.nombre="Ana";
  }

  nohayError() {
    return this.hasError;
  }

  sihayError() {
    return !this.hasError;
  }

  suma(a: number, b: number): number {
    return a + b;
  }

  cambiarNombre() {
    this.nombre = "Juan";
  }

  cambiarNombreInput(event: any) {
    this.nombre = event.target.value;
  }

  flipMostrar() {
    this.mostrar = !this.mostrar;
  }

  complicado() {
    return [1,2,3].map(n => n * 2).filter(n => n > 2);
  }

}
