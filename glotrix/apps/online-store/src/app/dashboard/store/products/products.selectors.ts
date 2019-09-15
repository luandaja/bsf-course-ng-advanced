import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

const productsFeature = createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(
  productsFeature,
  (state: ProductsState) => state.products
);

export const getProduct = (id: number) => createSelector(
  productsFeature,
  (state: ProductsState) => state.products.filter(product => product.id === id)[0]
);
