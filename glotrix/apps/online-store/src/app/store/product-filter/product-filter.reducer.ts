import { Action, createReducer, on } from '@ngrx/store';
import {
  productFilterInitialState,
  ProductFilterState
} from './product-filter.state';
import {
  setCategoryFilter,
  setKeywordFilter,
  changeCurrentPage
} from './product-filter.actions';

const reducer = createReducer(
  productFilterInitialState,
  on(setCategoryFilter, (state, { category }) => ({ ...state, category })),
  on(setKeywordFilter, (state, { keyword }) => ({ ...state, keyword })),
  on(changeCurrentPage, (state, { page }) => ({ ...state, currentPage: page }))
);

export function productFilterReducer(
  state: ProductFilterState | undefined,
  action: Action
) {
  return reducer(state, action);
}
