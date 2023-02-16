import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedState } from './feed.reducer';

export const selectFeedState = createFeatureSelector<FeedState>('feed');

export const selectPosts = createSelector(
  selectFeedState,
  (state: FeedState) => state.posts
);

export const selectLoading = createSelector(
  selectFeedState,
  (state: FeedState) => state.loading
);

export const selectError = createSelector(
  selectFeedState,
  (state: FeedState) => state.error
);
