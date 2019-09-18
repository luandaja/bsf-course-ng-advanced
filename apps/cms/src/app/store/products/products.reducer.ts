import { Action, createReducer, on } from '@ngrx/store';
import { fetchProducts, setProducts, updateProduct } from './products.actions';
import { ProductsState, initalState } from './products.state';

const reducer = createReducer(
	initalState,
	on(fetchProducts, (state, { }) => ({ ...state, isLoading: true })),
	on(setProducts, (state, { products }) => ({ ...state, products })),
	on(updateProduct, (state, { product }) => ({ ...state, product }))
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
	return reducer(state, action);
}
