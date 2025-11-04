import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Character, CharacterResponse } from '../../model/apiInterface';

@Component({
  selector: 'app-usuario-api',
  imports: [CommonModule],
  templateUrl: './usuario-api.html',
  styleUrl: './usuario-api.css',
})
export class UsuarioAPI implements OnInit {
  personajes: Character[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.demonslayer-api.com/api/v1/characters');
    
    this.http.get<CharacterResponse>(url).subscribe({
      next: (response: CharacterResponse) => {
        console.log(response);
        this.personajes = response.content;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}