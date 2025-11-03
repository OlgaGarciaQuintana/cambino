import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder-service';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {

  posts: any;

  constructor(private JsonplaceholderService: JsonplaceholderService) {

  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.JsonplaceholderService.getAllPosts().subscribe(posts => {
      console.log(posts);
      this.posts = posts;
    });
  }

}
