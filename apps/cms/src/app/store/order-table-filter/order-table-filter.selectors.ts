import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderTableFilterState } from './order-table-filter.state';

export const getFilters = createFeatureSelector<OrderTableFilterState>(
  'orderTableFilter'
);

export const getStatus = createSelector(
  getFilters,
  (state: OrderTableFilterState) => state
);

export const getPagination = createSelector(
  getFilters,
  (state: OrderTableFilterState) => ({ page: state.currentPage, size: state.pageSize })
);
