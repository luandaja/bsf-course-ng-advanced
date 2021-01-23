import { createAction, props } from '@ngrx/store';

export const setCategoryFilter = createAction(
	'[Recipes Filter] Set category filter',
	props<{ category: string }>()
);

export const setKeywordFilter = createAction(
	'[Recipes Filter] Set keyword filter',
	props<{ keyword: string }>()
);

export const changeCurrentPage = createAction(
	'[Recipes Filter] Change current page',
	props<{ page: number }>()
);
