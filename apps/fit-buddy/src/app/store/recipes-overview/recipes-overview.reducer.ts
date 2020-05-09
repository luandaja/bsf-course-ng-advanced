import { Action, createReducer, on } from '@ngrx/store';
import { fetchRecipes } from './recipes-overview.actions';
import { RecipesOverviewState, initalState } from './recipes-overview.state';

const reducer = createReducer(
	initalState,
	on(fetchRecipes, (state, { }) => ({ ...state, isLoading: true }))
);

export function recipesOverviewReducer(state: RecipesOverviewState | undefined, action: Action) {
	return reducer(state, action);
}
