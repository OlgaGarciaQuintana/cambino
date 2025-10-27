import { Component } from '@angular/core';

@Component({
  selector: 'app-home', //esto es para usarlo en html
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {

  constructor(){
    console.log("constructor");
  }

  ngOnInit(){
    console.log("ngOnInit")
  }

}
