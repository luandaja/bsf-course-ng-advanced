import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductTableFilterState } from './product-table-filter.state';

export const getFilters = createFeatureSelector<ProductTableFilterState>(
  'productTableFilter'
);

export const getCategory = createSelector(
  getFilters,
  (state: ProductTableFilterState) => state
);

export const getPagination = createSelector(
  getFilters,
  (state: ProductTableFilterState) => ({ page: state.currentPage, size: state.pageSize })
);
