import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs";
import { ApiService } from "src/app/shared/services/api.service";
import { Post } from "src/app/shared/models/post.model";
import * as fromHomeActions from './home.actions';

@Injectable()
export class HomeEffects {
  createPost$ = createEffect(() => this.actions$
    .pipe(
      ofType(fromHomeActions.createPost),
      mergeMap(({author, title, text}) => this.api.createPost(author, title, text)),
      catchError((err, caught$) => {
        this.store.dispatch(fromHomeActions.createPostFail());
        return caught$;
      }),
      map((post: Post) => fromHomeActions.createPostSuccess(post))
    )
  );

  constructor(private store: Store,
              private actions$: Actions,
              private api: ApiService) { }
}
