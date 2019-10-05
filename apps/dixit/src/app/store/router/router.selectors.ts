import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl, RouterState } from './router.state';
import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectRouter = createFeatureSelector<RouterState>('router');

export const getRouteId = createSelector(
	selectRouter,
	(state: RouterState) => state.state.params['id']
);
