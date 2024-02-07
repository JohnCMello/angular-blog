import { Component, Input } from '@angular/core';
import { Comment } from 'app/types';

@Component({
  selector: 'comp-comment-card',
  standalone: true,
  imports: [],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.scss',
})
export class CommentCardComponent {
  @Input() comment: Comment = {
    postId: 0,
    id: 0,
    name: '',
    email: '',
    body: '',
    createdAt: '',
    sorter: new Date(),
  };
}
