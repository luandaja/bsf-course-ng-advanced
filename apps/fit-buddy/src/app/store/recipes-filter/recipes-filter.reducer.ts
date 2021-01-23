import { Action, createReducer, on } from '@ngrx/store';
import {
	recipesFilterInitialState,
	RecipesFilterState
} from './recipes-filter.state';
import {
	setCategoryFilter,
	setKeywordFilter,
	changeCurrentPage
} from './recipes-filter.actions';

const reducer = createReducer(
	recipesFilterInitialState,
	on(setCategoryFilter, (state, { category }) => ({ ...state, category })),
	on(setKeywordFilter, (state, { keyword }) => ({ ...state, keyword })),
	on(changeCurrentPage, (state, { page }) => ({ ...state, currentPage: page }))
);

export function recipesFilterReducer(
	state: RecipesFilterState | undefined,
	action: Action
) {
	return reducer(state, action);
}
