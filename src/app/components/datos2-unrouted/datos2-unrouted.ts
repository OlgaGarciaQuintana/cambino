import { Component, inject } from '@angular/core';
import { User } from '../../model/userInterface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JsonplaceholderService } from '../../services/jsonplaceholder-service';

@Component({
  selector: 'app-datos2-unrouted',
  imports: [],
  templateUrl: './datos2-unrouted.html',
  styleUrl: './datos2-unrouted.css',
})
export class Datos2Unrouted {
 data = inject(MAT_DIALOG_DATA);
  nUsuario:number = 0;

  constructor(private oJsonplaceholderService: JsonplaceholderService) {}

  ngOnInit() {
    console.log('Datos recibidos en el hijo en el diálogo:', this.data);
    this.nUsuario=this.data.usuario_id;
    this.oJsonplaceholderService.getUser(this.nUsuario).subscribe((user: User[]) => {
      console.log("Usuario obtenido:", user);
      this.oUsuario = user;
      }
  }
}
