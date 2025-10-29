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

  //Lista de personas
  nombres$: Observable<Persona[]> = of(this.listadoPersonas);

  //Una persona:
  nombre$: Observable<Persona> = of(this.listadoPersonas[0]);

  //Lista de numeros aleatorios (hasta el 100)
  numero$: Observable<number> = of(Math.floor(Math.random() *100) +1);

  //sale el resultado al inspeccionar
  ejemplo01() {
    console.log("Ejecutando ejemplo 01 de RxJS")
    this.nombres$.subscribe({
      next: (personas) => {
        console.log("Lista de personas recibidas:");
        personas.forEach(persona => {
          console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`);
        });
      },
      error: (err) => console.log("Error al recibir la lista de personas", err),
      complete: () => console.log("Flujo de datos completado.")
    });
  }

  ejemplo02() {
    console.log("Ejecutando ejemplo de 01 de RxJS")
    this.nombre$.subscribe({
      next: (persona) => {
        console.log("Persona recibida:");
        console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}`)
      },
      error: (err) => console.log("Error al recibir la persona", err),
      complete: () => console.log("Flujo de datos completado.")
    });
  }
  
}
