import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  posts: Post[] = []
  loading: boolean = false

  constructor(private api: ApiService) { }

  ngOnInit(): void {
      this.api.getPosts().subscribe((data: Post[]) => console.log(data));
  }
}
