import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/shared/models/post.model";

export const loadPosts = createAction(
  '[Feed] Load Posts'
);

export const loadPostsSuccess = createAction(
  '[Feed] Load Posts Success',
  props<{posts: Post[]}>()
);

export const loadPostsFail = createAction(
  '[Feed] Load Posts Fail'
);
