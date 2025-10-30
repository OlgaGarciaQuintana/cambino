import { Component } from '@angular/core';
import { AleatorioService } from '../../services/aleatorio';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.html',
  styleUrl: './aleatorio.css',
})
export class AleatorioComponent {

  numeroAleatorio: number = 0;

  //se tiene que poner privado porque si no se fusiona con el otro aleatorio y no funcionaria bien
  constructor(private aleatorioService: AleatorioService) {
  }

  ngOnInit() {
    this.numeroAleatorio = this.aleatorioService.generaNumeroAleatorio(40, 60);
  }

}
