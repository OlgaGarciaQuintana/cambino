import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AleatorioService } from '../../services/aleatorio';

@Component({
  selector: 'app-home', //esto es para usarlo en html
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})
export class Home {
  nombreUsuario: string = '';
  numeroAleatorio: number = 1;

  constructor(public oRouter: Router, public aleatorioService: AleatorioService) {}

  ngOnInit() {}

  cambiarNombre(strNuevoNombre: string) {
    this.nombreUsuario = strNuevoNombre;
  }

  irASaludoEnrutado() {
    window.location.href = 'saludoenrutado/' + this.nombreUsuario;
  }

  irASaludoEnrutado2() {
    this.oRouter.navigate(['saludoenrutado', this.nombreUsuario]);
  }

  obtenerNumeroAleatorio() {
    this.numeroAleatorio = this.aleatorioService.generaNumeroAleatorio(1, 100);
  }
}
