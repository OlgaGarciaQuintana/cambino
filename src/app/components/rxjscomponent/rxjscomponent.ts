import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, merge, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

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

  ejemplo03() {
    console.log("Ejecutando ejemplo 03 de RxJS");
    this.numero$.subscribe({
      next: (numero) => {
        console.log("Numero recibido: " + numero);
      },
      error: (err) => console.log("Error al recibir el numero", err),
      complete: () => console.log("Flujo de datos completado.")
    });
  }

  ejemplo04() {
   console.log("Ejecutando ejemplo 04 de RxJS: emisión por orden");
   const numeros$: Observable<number> = of(1,2,3,4,5);
   numeros$.subscribe({
      next: (numero) => {
        console.log("Numero recibido: " + numero);
      },
      error: (err) => console.log("Error al recibir el numero", err),
      complete: () => console.log("Flujo de datos completado.")
    });
  }

  ejemplo05() {
    console.log("Ejecutando ejemplo 05 de RxJS: emisión de string");
    //observable 
    const contador$ = new Observable<number>((observer) => {
      let count = 1;
      const interval = setInterval(() => {
        observer.next(count);
        count++;
        if (count > 7) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    });
    //suscripción
    contador$.subscribe({
      next: (numero) => {
        console.log("Numero recibido: " + numero);
      },
      error: (err) => console.log("Error al recibir el numero", err),
      complete: () => console.log("Flujo de datos completado.")
    })

  }

  ejemplo06() {
    console.log("Ejecutando ejemplo 06 de RxJS: emisión de strings");
    const palabras$ = new Observable<string>((observer) => {
      observer.next("Hola");
      observer.next("que");
      observer.next("tal");
      observer.error("¡Ha ocurrido un error en la emisión de palabras!");
      observer.next("soy");
      observer.next("rafa");
      observer.complete();
    });
    palabras$.subscribe({
      next: (palabra) => {
        console.log("Palabra recibida: " + palabra);
      },
      error: (err) => console.log("Error al recibir la palabra", err),
      complete: () => console.log("Flujo de datos completado.")
    })
  }

  ejemplo07() {
    console.log("Ejecutando ejemplo 07 de RxJS: emisión de strings con error");
    const palabras$ = new Observable<string>((observer) => {
      observer.next("Hola");
      observer.next("que");
      observer.next("tal");
      observer.error("¡Ha ocurrido un error en la emisión de palabras!");
      observer.next("soy");
      observer.next("rafa");
      observer.complete();
    });

    palabras$.subscribe({
      next: palabra => console.log("Palabra recibida: " + palabra),
      error: err => console.log("Error al recibir la palabra", err),
      complete: () => console.log("Flujo de datos completado.")
    });
  }

  ejemplo08() {
    console.log("Ejecutando ejemplo 08 de RxJS: emisión con Observable.interval(10)");
    //observable
    const contador$ = interval(10);
    //suscripcion
    const subscription = contador$.subscribe({
      next: numero => console.log("Numero recibido: " + numero),
      error: err => console.log("Error al recibir el número:", err),
      complete: () => console.log("Flujo de datos completado.")
    });
    //Dessucribirse después de 5000 ms para detener la emisión
    setTimeout(() => {
      subscription.unsubscribe();
      console.log("Desuscrito del observable de intervalo.");
    }, 5000)
  }

  ejemplo09() {
    console.log("Ejecutando ejemplo 09 de RxJS");
    const intervalo1$ = interval(1000);
    const intervalo2$ = interval(1500);
    // combinar con el operador merge los dos intervalos
    const combinado1$ = merge(intervalo1$, intervalo2$);
    const combinado2$ = combinado1$.pipe(
      take(10)
    )
    combinado2$.subscribe({
      next: numero => console.log("Numero recibido: " + numero),
      error: err => console.log("Error al recibir el numero", err),
      complete: () => console.log("Flujo de datos completado.")
    });
  }

  //empezamos con el ejemplo del filter
}