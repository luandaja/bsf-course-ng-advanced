import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

const products = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(
  products,
  (state: ProductsState) => state.products
);
