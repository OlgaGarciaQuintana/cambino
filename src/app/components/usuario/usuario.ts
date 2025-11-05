import { Component, inject } from '@angular/core';
import { oUsuarioService } from '../../services/usuario-service';
import { User } from '../../model/userInterface';
import { MatDialog } from '@angular/material/dialog';
import { DatosUnrouted } from '../datos-unrouted/datos-unrouted';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class UsuarioComponent {

  usuarios: User[] = [];
  readonly oMatDialog=inject (MatDialog);

  constructor(private oUsuarioService: oUsuarioService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.oUsuarioService.getAll().subscribe((users: User[]) => {
      console.log(users);
      this.usuarios = users;
    });
  }

  verDatosUsuario(user: User) {
    console.log('Datos del padre...', user);

    this.oMatDialog.open(DatosUnrouted, {
      height: '400px',
      width: '600px',
      data: {
        usuario: user,
      }
    });




  }
}
