import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-saludoenrutado', //esto es para usarlo en html
  imports: [CommonModule, RouterLink],
  templateUrl: './saludoenrutado.html',
  styleUrl: './saludoenrutado.css',
  standalone: true
})
export class Saludoenrutado {

  constructor(){
   
  }

  ngOnInit(){
   
  }

}
