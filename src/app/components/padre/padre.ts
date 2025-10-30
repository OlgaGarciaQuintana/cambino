import { Component } from '@angular/core';
import { Hijo } from "../hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class PadreComponent {
  mensajeHijo: string = '';

  enviar(mensaje: string) {
    this.mensajeHijo = mensaje;
  }

}
