import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FeedState } from './state/feed.reducer';
import { Post } from 'src/app/shared/models/post.model';
import * as fromFeedActions from './state/feed.actions';
import * as fromFeedSelectors from './state/feed.selectors';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  posts$: Observable<Post[]>;
  loading$: Observable<boolean>;
  error$: Observable<boolean>;

  constructor(private store: Store<FeedState>) {
    this.posts$ = this.store.pipe(select(fromFeedSelectors.selectPosts));
    this.loading$ = this.store.pipe(select(fromFeedSelectors.selectLoading));
    this.error$ = this.store.pipe(select(fromFeedSelectors.selectError));
  }

  ngOnInit(): void {
    this.store.dispatch(fromFeedActions.loadPosts());
  }

  close(): void {
    this.store.dispatch(fromFeedActions.loadPosts());
  }
}
