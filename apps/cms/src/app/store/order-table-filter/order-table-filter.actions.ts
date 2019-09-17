import { createAction, props } from '@ngrx/store';

export const setStatusFilter = createAction(
  '[Order Table Filter] Set status filter',
  props<{ status: string }>()
);

export const setKeywordFilter = createAction(
  '[Order Table Filter] Set keyword filter',
  props<{ keyword: string }>()
);

export const changeCurrentPage = createAction(
  '[Order Table Filter] Change current page',
  props<{ page: number }>()
);
