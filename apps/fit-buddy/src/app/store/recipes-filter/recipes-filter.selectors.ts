import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipesFilterState } from './recipes-filter.state';

export const getFilters = createFeatureSelector<RecipesFilterState>(
	'recipesFilter'
);

export const getCategory = createSelector(
	getFilters,
	(state: RecipesFilterState) => state
);

export const getPagination = createSelector(
	getFilters,
	(state: RecipesFilterState) => ({ page: state.currentPage, size: state.pageSize })
);
