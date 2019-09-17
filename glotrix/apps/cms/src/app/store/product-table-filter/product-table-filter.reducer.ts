import { Action, createReducer, on } from '@ngrx/store';
import {
  productTableFilterInitialState,
  ProductTableFilterState
} from './product-table-filter.state';
import {
  setCategoryFilter,
  setKeywordFilter,
  changeCurrentPage
} from './product-table-filter.actions';

const reducer = createReducer(
  productTableFilterInitialState,
  on(setCategoryFilter, (state, { category }) => ({ ...state, category })),
  on(setKeywordFilter, (state, { keyword }) => ({ ...state, keyword })),
  on(changeCurrentPage, (state, { page }) => ({ ...state, currentPage: page }))
);

export function productTableFilterReducer(
  state: ProductTableFilterState | undefined,
  action: Action
) {
  return reducer(state, action);
}
