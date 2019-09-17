import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

const productsFeature = createFeatureSelector<ProductsState>('products');

export const getProducts = createSelector(
  productsFeature,
  (state: ProductsState) => state.products
);

export const getProductsTotal = createSelector(
  productsFeature,
  (state: ProductsState) => state.products.length
);

export const getProduct = (id: number) =>
  createSelector(
    productsFeature,
    (state: ProductsState) => state.products.filter(product => product.id === id)[0]
  );

export const getCategoriesFromProducts = createSelector(
  productsFeature,
  (state: ProductsState) =>
    [...new Set(state.products.map(p => p.category).filter(p => p !== undefined))]
);

