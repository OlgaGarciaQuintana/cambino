import { Component } from '@angular/core';

@Component({
  selector: 'app-home', //esto es para usarlo en html
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

  nombre = "Olga";
  titulo = "Deku"
  ancho=300;

  constructor(){
    console.log("constructor");
    this.nombre="Jose";
  }

  ngOnInit(){
    console.log("ngOnInit")
    this.nombre="Ana";
  }

}
