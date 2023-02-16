import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs";
import { ApiService } from "src/app/shared/services/api.service";
import { Post } from "src/app/shared/models/post.model";
import * as fromFeedActions from './feed.actions';

@Injectable()
export class FeedEffects {
  loadPosts$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromFeedActions.loadPosts),
      mergeMap(() => this.api.getPosts()),
      catchError((err, caught$) => {
        this.store.dispatch(fromFeedActions.loadPostsFail());
        return caught$;
      }),
      map((posts: Post[]) => fromFeedActions.loadPostsSuccess({posts}))
    )
  );

  constructor(private store: Store,
              private actions$: Actions,
              private api: ApiService) { }
}
