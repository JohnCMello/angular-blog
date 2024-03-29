import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getRandomTimestamp } from 'app/helpers/getRandomTimeStamp';
import { Author, PostsAndAuthors } from 'app/types';
import { Observable, forkJoin, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly postsURL: string =
    'https://jsonplaceholder.typicode.com/posts';
  private readonly authorURL: string =
    'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getPostsAndAuthors(): Observable<PostsAndAuthors[]> {
    return this.http.get<PostsAndAuthors[]>(this.postsURL).pipe(
      // Using switchMap to switch to the forkJoin observable
      switchMap((posts) => {
        // Map each post to an observable of author data
        const authorObservables: Observable<Author>[] = posts.map((post) => {
          return this.http.get<Author>(`${this.authorURL}/${post.userId}`);
        });

        // Combine all author observables into one observable
        return forkJoin(authorObservables).pipe(
          // Zip the results of the forkJoin with the original posts
          map((authors: Author[]) => {
            return posts.map((post, index) => {
              return {
                ...post,
                author: authors[index].name,
                createdAt: getRandomTimestamp(),
              };
            });
          })
        );
      })
    );
  }
}
