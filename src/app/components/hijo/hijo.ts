import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class HijoComponent {
  @Input() mensajeHijo: string = '';
}
