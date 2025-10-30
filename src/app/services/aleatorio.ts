import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AleatorioService {
  //esto lo veremos abajo del home
  generaNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
