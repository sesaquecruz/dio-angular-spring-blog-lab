import { Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  posts: PostResponse[] = []
  loading: boolean = false

  constructor() {
    this.posts = [
      {
        id: "",
        author: "author 1",
        title: "title 1",
        text: "text 1",
        date: "date 1"
      },
      {
        id: "",
        author: "author 2",
        title: "title 2",
        text: "text 2",
        date: "date 2"
      }
    ]
  }
}
