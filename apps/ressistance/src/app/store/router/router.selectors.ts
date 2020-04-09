import { RouterState } from './router.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectRouter = createFeatureSelector<RouterState>('router');

export const getRouteId = createSelector(
	selectRouter,
	(state: RouterState) => state.state.params['id']
);
