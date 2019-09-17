import { createAction, props } from '@ngrx/store';

export const setCategoryFilter = createAction(
  '[Product Table Filter] Set category filter',
  props<{ category: string }>()
);

export const setKeywordFilter = createAction(
  '[Product Table Filter] Set keyword filter',
  props<{ keyword: string }>()
);

export const changeCurrentPage = createAction(
  '[Product Table Filter] Change current page',
  props<{ page: number }>()
);
