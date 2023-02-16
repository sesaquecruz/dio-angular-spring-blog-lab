import { Action, createReducer, on } from "@ngrx/store"
import { Post } from "src/app/shared/models/post.model";
import * as fromHomeActions from './home.actions';

export interface HomeState {
  post: Post,
  publishing: boolean,
  published: boolean,
  error: boolean
}

export const homeInitialState = {
  post: {
    id: '',
    date: '',
    author: '',
    title: '',
    text: ''
  },
  publishing: false,
  published: false,
  error: false
}

const reducer = createReducer(
  homeInitialState,
  on(fromHomeActions.createPost, (state, post) => ({
    ...state,
    post: post,
    publishing: true,
    published: false,
    error: false
  })),
  on(fromHomeActions.createPostSuccess, (state, post) => ({
    ...state,
    post: post,
    publishing: false,
    published: true,
    error: false
  })),
  on(fromHomeActions.createPostFail, (state) => ({
    ...state,
    publishing: false,
    published: false,
    error: true
  })),
  on(fromHomeActions.createPostClean, () => (homeInitialState))
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action);
}
