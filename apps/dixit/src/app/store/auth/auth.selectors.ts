import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

const authFeature = createFeatureSelector<AuthState>('auth');
//const authFeature = (state: AppState) => state.auth;
export const getIsLogged = createSelector(
	authFeature,
	state => state.isLogged
);

export const getUser = createSelector(
	authFeature,
	state => state.user
);

export const getUserWithFullName = createSelector(
	authFeature,
	state => ({ ...state.user, fullName: `${state.user.userName}` })
);

export const getPhotoUrl = createSelector(
	getUser,
	user => user.photoUrl
);
