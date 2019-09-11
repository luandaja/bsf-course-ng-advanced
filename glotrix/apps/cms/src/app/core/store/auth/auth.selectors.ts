import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const auth = createFeatureSelector<AuthState>('auth');

export const selectIsLogged = createSelector(
  auth,
  s => s.islogged
);
