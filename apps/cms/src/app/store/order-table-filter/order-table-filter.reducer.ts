import { Action, createReducer, on } from '@ngrx/store';
import { orderTableFilterInitialState, OrderTableFilterState } from './order-table-filter.state';
import {
  setStatusFilter,
  setKeywordFilter,
  changeCurrentPage
} from './order-table-filter.actions';

const reducer = createReducer(
  orderTableFilterInitialState,
  on(setStatusFilter, (state, { status }) => ({ ...state, status })),
  on(setKeywordFilter, (state, { keyword }) => ({ ...state, keyword })),
  on(changeCurrentPage, (state, { page }) => ({ ...state, currentPage: page }))
);

export function orderTableFilterReducer(
  state: OrderTableFilterState | undefined,
  action: Action
) {
  return reducer(state, action);
}
