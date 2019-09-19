import { Action, createReducer, on } from '@ngrx/store';
import {
	fetchProducts,
	setProducts,
	updateProduct,
	deleteProduct
} from './products.actions';
import { ProductsState, initalState } from './products.state';

const reducer = createReducer(
	initalState,
	on(fetchProducts, (state, {}) => ({ ...state, isLoading: true })),
	on(setProducts, (state, { products }) => ({ ...state, products })),
	on(updateProduct, (state, { product }) => ({ ...state, product })),
	on(deleteProduct, (state, { productId }) => ({
		...state,
		products: state.products.filter(p => p.id !== productId)
	}))
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
	return reducer(state, action);
}
