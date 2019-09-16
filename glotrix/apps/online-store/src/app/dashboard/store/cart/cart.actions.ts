import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../../models/cartItem';

export const fetchCartItems = createAction('[Cart] Fetch cart items');

export const setCartItems = createAction(
  '[Cart] Set cart item',
  props<{ cartItems: CartItem[] }>()
);
