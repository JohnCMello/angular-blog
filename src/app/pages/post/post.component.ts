import { Component } from '@angular/core';
import { PostDetailComponent } from '@components/post-detail/post-detail.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [PostDetailComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostDetailPageComponent {}
