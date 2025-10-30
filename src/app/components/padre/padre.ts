import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class PadreComponent {
  mensajeHijoEnviadoDesdeElPadre: string = '';
  mensajerecibidoDelHijo: any;

  enviar(mensaje: string) {
    this.mensajeHijoEnviadoDesdeElPadre = mensaje;
  }

  recibirMensajeDelHijo(mensajeRecibidoDelHijo: string) {
    this.mensajeHijoEnviadoDesdeElPadre = mensajeRecibidoDelHijo;
    alert("Mensaje recibido del hijo: " + mensajeRecibidoDelHijo);
  }

}
