import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductFilterState } from './product-filter.state';

export const getFilters = createFeatureSelector<ProductFilterState>(
  'productFilter'
);

export const getCategory = createSelector(
  getFilters,
  (state: ProductFilterState) => state
);

export const getPagination = createSelector(
  getFilters,
  (state: ProductFilterState) => ({ page: state.currentPage, size: state.pageSize })
);
