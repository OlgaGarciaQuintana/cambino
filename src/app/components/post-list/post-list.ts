import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../services/jsonplaceholder-service';
import { Post } from '../../model/postInterface';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostListComponent {

  posts: Post[] = [];

  constructor(private JsonplaceholderService: JsonplaceholderService) {

  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.JsonplaceholderService.getAllPosts().subscribe((posts: Post[]) => {
      console.log(posts);
      this.posts = posts;
    });
  }

}
