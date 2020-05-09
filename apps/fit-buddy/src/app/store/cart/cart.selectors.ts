import { CartState } from './cart.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const cartFeature = createFeatureSelector<CartState>('cart');

export const getCartItems = createSelector(
	cartFeature,
	(state: CartState) => state.cartItems
);
