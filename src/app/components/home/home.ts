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

  nombreUsuario: string = "";

  constructor(){
   
  }

  ngOnInit(){
   
  }

  cambiarNombre(strNuevoNombre:string){
    this.nombreUsuario = strNuevoNombre;
  }

}
