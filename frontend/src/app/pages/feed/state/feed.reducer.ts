import { Action, createReducer, on } from "@ngrx/store"
import { Post } from "src/app/shared/models/post.model";
import * as fromFeedActions from './feed.actions';

export interface FeedState {
  posts: Post[],
  loading: boolean,
  error: boolean
}

export const feedInitialState = {
  posts: [] as Post[],
  loading: false,
  error: false
}

const reducer = createReducer(
  feedInitialState,
  on(fromFeedActions.loadPosts, (state) => ({
    ...state,
    posts: [],
    loading: true,
    error: false
  })),
  on(fromFeedActions.loadPostsSuccess, (state, value) => ({
    ...state,
    posts: value.posts,
    loading: false,
    error: false
  })),
  on(fromFeedActions.loadPostsFail, (state) => ({
    ...state,
    loading: false,
    error: true
  }))
);

export function feedReducer(state: FeedState | undefined, action: Action) {
  return reducer(state, action);
}
