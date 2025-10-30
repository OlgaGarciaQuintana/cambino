import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class HijoComponent {
  //desde aqui recibo el mensaje del padre
  @Input() mensajeHijoRecibidoDelPadre: string = '';
  @Output() mensajeAlPadreDesdeElHijoEventEmmiter = new EventEmitter<string>();

  enviarMensajeAlPadre() {
    // Lógica para enviar mensaje al padre
    const mensajeParaElPadre = "El mensaje recibido del padre ha sido obedecido" + this.mensajeHijoRecibidoDelPadre;
    this.mensajeAlPadreDesdeElHijoEventEmmiter.emit(mensajeParaElPadre);
  }
}
