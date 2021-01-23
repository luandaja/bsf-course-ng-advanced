import { Action, createReducer, on } from '@ngrx/store';
import { fetchRecipe } from './recipe.actions';
import { RecipeState, initalState } from './recipe.state';

const reducer = createReducer(
	initalState,
	on(fetchRecipe, (state, { }) => ({ ...state, isLoading: true }))
);

export function recipeReducer(state: RecipeState | undefined, action: Action) {
	return reducer(state, action);
}
