import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

class Persona {
  nombre: string = "";
  edad: number = 0;
}

@Component({
  selector: 'app-rxjscomponent',
  imports: [CommonModule],
  templateUrl: './rxjscomponent.html',
  styleUrl: './rxjscomponent.css',
  standalone: true
})

export class Rxjscomponent {

  //ESTO NO SE PUEDE HACER, ESTA PROHIBIDO:
  listadoPersonas: Persona[] = [
    { nombre: "Ana", edad: 28 },
    { nombre: "Luis", edad: 34 },
    { nombre: "Maria", edad: 22 },
    { nombre: "Carlos", edad: 45 },
    { nombre: "Lucia", edad: 30 }
  ]

  nombres$: Observable<Persona[]> = of(this.listadoPersonas);

  //sale el resultado al inspeccionar
  ejemplo01() {
    console.log("Ejecutando ejemplo 01 de RxJS")
    this.nombres$.subscribe({
      next: (personas) => {
        console.log("Lista de personas recibidas:");
        personas.forEach(persona => {
          console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
        });
      }
    });
  }

}
