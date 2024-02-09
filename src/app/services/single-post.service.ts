import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRandomTimestamp } from 'app/helpers/getRandomTimeStamp';
import { Comment, Post } from 'app/types';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SinglePostService {
  private readonly postURL: string =
    'https://jsonplaceholder.typicode.com/posts';
  private readonly commentsURL: string =
    'https://jsonplaceholder.typicode.com/comments?postId=';

  constructor(private http: HttpClient) {}

  getSinglePost(id: string) {
    return this.http.get<Post>(`${this.postURL}/${id}`);
  }

  getPostComments(id: string) {
    return this.http.get<Comment[]>(`${this.commentsURL}${id}`).pipe(
      map((comments) => {
        return comments.map((comment) => {
          const data = getRandomTimestamp();
          const dia = String(data.getDate()).padStart(2, '0');
          const mes = String(data.getMonth() + 1).padStart(2, '0');
          const ano = data.getFullYear();

          const dataFormatada = `${dia}-${mes}-${ano}`;
          return {
            ...comment,
            createdAt: dataFormatada,
            sorter: data,
          };
        });
      })
    );
  }
}
