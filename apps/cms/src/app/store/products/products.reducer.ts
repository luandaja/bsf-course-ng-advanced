import { Action, createReducer, on } from '@ngrx/store';
import { fetchProducts, setProducts } from './products.actions';
import { ProductsState, initalState } from './products.state';

const reducer = createReducer(
  initalState,
  on(fetchProducts, (state, {}) => ({ ...state, isLoading: true })),
  on(setProducts, (state, { products }) => ({ ...state, products }))
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}
