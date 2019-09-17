import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const authFeature = createFeatureSelector<AuthState>('auth');

export const getIsLogged = createSelector(
  authFeature,
  state => state.isLogged
);

export const getUser = createSelector(
  authFeature,
  state => state.user
);
