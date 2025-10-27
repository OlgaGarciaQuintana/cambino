import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home', //esto es para usarlo en html
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

  nombre = "Olga";
  titulo = "Deku"
  ancho=300;
  hasError = false;

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
    this.nombre="Juan";
  }

}
