import { createAction, props } from '@ngrx/store';
import { CartItem } from '../../../models/cartItem';
import { Product } from '../../../models/Product';

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
  '[Cart] Update cart item',
  props<{ cartItemId: number, quantity: number }>()
);

export const addCartItem = createAction(
  '[Cart] Add cart item',
  props<{ product: Product }>()
);

