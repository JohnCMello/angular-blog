import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentCardComponent } from '@components/comment-card/comment-card.component';
import { SinglePostService } from 'app/services/single-post.service';
import { Comment, Post } from 'app/types';

@Component({
  selector: 'comp-post-detail',
  standalone: true,
  imports: [CommentCardComponent, CommonModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
  id: string | null = '';
  post: Post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
  comments: Comment[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private singlePostService: SinglePostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.fetchPost(this.id);
      this.fetchComments(this.id);
    }
  }

  fetchPost(id: string) {
    this.singlePostService.getSinglePost(id).subscribe({
      next: (post: Post) => {
        console.log('Post', post);
        this.post = post;
      },
      error: (error: any) => {
        console.error('Error fetching post:', error);
      },
    });
  }
  fetchComments(id: string) {
    this.singlePostService.getPostComments(id).subscribe({
      next: (comments: Comment[]) => {
        this.comments = comments.sort(
          (a, b) => b.sorter.getTime() - a.sorter.getTime()
        );
        console.log(comments);
      },
      error: (error: any) => {
        console.error('Error fetching comments:', error);
      },
    });
  }
  trackById(index: number, item: any): any {
    return item.id;
  }

  backToPosts() {
    this.location.back();
  }
}
