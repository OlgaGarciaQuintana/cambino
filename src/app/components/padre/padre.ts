import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class PadreComponent {
  mensajeHijo: string = '';

  enviar(mensaje: string) {
    this.mensajeHijo = mensaje;
  }

}
