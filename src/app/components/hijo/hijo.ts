import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class HijoComponent {
  //desde aqui recibo el mensaje del padre
  @Input() mensajeHijoRecibidoDelPadre: string = '';
}
