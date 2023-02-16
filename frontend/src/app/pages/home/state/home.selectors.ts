import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectPublishing = createSelector(
  selectHomeState,
  (state: HomeState) => state.publishing
)

export const selectPublished = createSelector(
  selectHomeState,
  (state: HomeState) => state.published
)

export const selectError = createSelector(
  selectHomeState,
  (state: HomeState) => state.error
)
