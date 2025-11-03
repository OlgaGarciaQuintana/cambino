import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/userInterface';

@Injectable({
  providedIn: 'root'
})
export class oUsuarioService {
  constructor(private oHttpClient: HttpClient) {

  }

  getAll():Observable<User[]> {
    return this.oHttpClient.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
