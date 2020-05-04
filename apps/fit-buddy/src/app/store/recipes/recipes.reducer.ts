import { Action, createReducer, on } from '@ngrx/store';
import {
	fetchRecipes
} from './recipes.actions';
import { RecipesState, initalState } from './recipes.state';

const reducer = createReducer(
	initalState,
	on(fetchRecipes, (state, { }) => ({ ...state, isLoading: true }))
);

export function recipesReducer(state: RecipesState | undefined, action: Action) {
	return reducer(state, action);
}
