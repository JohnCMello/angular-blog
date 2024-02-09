import { Component, OnInit } from '@angular/core';
import { PostCardComponent } from '@components/post-card/post-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PostsAndAuthors } from 'app/types';
import { PostsService } from 'app/services/posts.service';

@Component({
  selector: 'post-list',
  standalone: true,
  imports: [PostCardComponent, MatPaginatorModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  posts: PostsAndAuthors[] = [];
  currentPage: number = 1;
  pageSize: number = 12;
  hidePageSize: boolean = true;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postsService.getPostsAndAuthors().subscribe({
      next: (posts: PostsAndAuthors[]) => {
        if (Array.isArray(posts)) {
          this.posts = posts.sort(
            (a, b) => a.createdAt.getTime() - b.createdAt.getTime()
          );
          console.log(posts);
        } else {
          console.error('Received unexpected data format for posts:', posts);
        }
      },
      error: (error: any) => {
        console.error('Error fetching posts:', error);
      },
    });
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  get endIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.posts.length);
  }

  get slicedPosts(): any[] {
    return this.posts.slice(this.startIndex, this.endIndex);
  }

  trackById(index: number, item: any): any {
    return item.id;
  }
}
