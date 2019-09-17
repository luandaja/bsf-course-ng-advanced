import { createAction, props } from '@ngrx/store';

export const setCategoryFilter = createAction(
  '[Product Filter] Set category filter',
  props<{ category: string }>()
);

export const setKeywordFilter = createAction(
  '[Product Filter] Set keyword filter',
  props<{ keyword: string }>()
);

export const changeCurrentPage = createAction(
  '[Product Filter] Change current page',
  props<{ page: number }>()
);
