import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {
  constructor(private oHTTPClient: HttpClient) {
    
  }
  
  getAllPosts() {
    return this.oHTTPClient.get('https://jsonplaceholder.typicode.com/posts');
  }
}
