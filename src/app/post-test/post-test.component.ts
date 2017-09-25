import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';
import { Headers, Response } from '@angular/http';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-post-test',
  templateUrl: './post-test.component.html',
  styleUrls: ['./post-test.component.css']
})
export class PostTestComponent implements OnInit {

  constructor(private postService: PostService) {}

  posts: Post[];

  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }

  ngOnInit() {
    this.getPosts();
  }

}
