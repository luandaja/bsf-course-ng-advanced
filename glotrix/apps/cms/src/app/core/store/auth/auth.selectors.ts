import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const authFeature = createFeatureSelector<AuthState>('auth');

export const getIsLogged = createSelector(
  authFeature,
  state => state.islogged
);

export const getUser = createSelector(
  authFeature,
  state => state.user
);

export const getUserWithFullName = createSelector(
  authFeature,
  state => ({ ...state.user, fullName: `${state.user.firstName} ${state.user.lastName}` })
);

export const getFullName = createSelector(
  getUser,
  user => `${user.firstName} ${user.lastName}`
);

export const getPhotoUrl = createSelector(
  getUser,
  user => user.photoUrl
);
