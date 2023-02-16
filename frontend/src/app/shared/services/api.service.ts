import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:8080/api/post'


  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    const params = new HttpParams({fromObject: {
      page: 1,
      limit: 50
    }})
    return this.http.get<{itens: Post[]}>(this.url, {params}).pipe(map(values => values.itens));
  }

  createPost(author: string, title: string, text: string): Observable<Post> {
    return this.http.post<Post>(this.url, {author, title, text})
  }
}
