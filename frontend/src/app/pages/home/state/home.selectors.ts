import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HomeState } from './home.reducer';

export const selectHomeState = createFeatureSelector<HomeState>('home');

export const selectPublishing = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.publishing
)

export const selectPublished = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.published
)

export const selectError = createSelector(
  selectHomeState,
  (homeState: HomeState) => homeState.error
)
