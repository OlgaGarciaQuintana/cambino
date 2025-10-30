import { Component } from '@angular/core';
import { AleatorioService } from '../../services/aleatorio';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.html',
  styleUrl: './aleatorio.css',
})
export class AleatorioComponent {

  constructor(public aleatorioService: AleatorioService) {
  }

}
