import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

const products = createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(
  products,
  (state: ProductsState) => state.products
);
