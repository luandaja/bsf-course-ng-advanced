import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../../models/cartItem';

export const fetchCartItems = createAction('[Cart] Fetch cart items');

export const setCartItems = createAction(
  '[Cart] Set cart item',
  props<{ cartItems: CartItem[] }>()
);

export const removeCartItem = createAction(
  '[Cart] Remove cart item',
  props<{ cartItem: CartItem }>()
);


export const updateCartItem = createAction(
  '[Cart] Remove cart item',
  props<{ cartItemId: number, quantity: number }>()
);
