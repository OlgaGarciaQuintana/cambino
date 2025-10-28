import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-saludoenrutado', //esto es para usarlo en html
  imports: [CommonModule],
  templateUrl: './saludoenrutado.html',
  styleUrl: './saludoenrutado.css',
  standalone: true
})
export class Saludoenrutado {

  nombre: string | null = null;

  constructor(private route: ActivatedRoute){
    this.nombre = this.route.snapshot.paramMap.get("nombre");
  }

  ngOnInit(){
   
  }

}
