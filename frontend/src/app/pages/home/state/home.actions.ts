import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/shared/models/post.model";

export const createPost = createAction(
  '[Home] Create Post',
  props<Post>()
);

export const createPostSuccess = createAction(
  '[Home] Create Post Success',
  props<Post>()
);

export const createPostFail = createAction(
  '[Home] Create Post Fail'
);

export const createPostClean = createAction(
  '[Home] Create Post Clean'
);
