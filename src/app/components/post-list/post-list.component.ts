import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

import { PostCardComponent } from '@components/post-card/post-card.component';

type Posts = {
  userId: string;
  id: string;
  title: string;
  body?: string;
}[];
@Component({
  selector: 'post-list',
  standalone: true,
  imports: [PostCardComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  http = inject(HttpClient);
  posts: Posts = [];
  readonly url: string = 'https://jsonplaceholder.typicode.com/posts';

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((posts: any) => {
        this.posts = posts;
      });
  }
}
