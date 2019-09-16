import { Action, createReducer, on } from '@ngrx/store';
import { fetchCartItems, setCartItems, removeCartItem, updateCartItem } from './cart.actions';
import { CartState, initalState } from './cart.state';
import { CartItem } from '../../../models/cartItem';

const reducer = createReducer(
  initalState,
  on(fetchCartItems, (state, { }) => ({ ...state, isLoading: true })),
  on(setCartItems, (state, { cartItems }) => ({ ...state, cartItems })),
  on(removeCartItem, (state, { cartItem }) => ({ ...state, cartItems: state.cartItems.filter(item => item.id !== cartItem.id) })),
  on(updateCartItem, (state, { cartItemId, quantity }) => ({ ...state, cartItems: updateCart(state.cartItems, cartItemId, quantity) }))
);

function updateCart(cartItems: CartItem[], cartItemId: number, quantityNew: number) {
  let item = cartItems.filter(item => item.id === cartItemId)[0];
  let index = cartItems.indexOf(item);
  let result = cartItems.filter(item => item.id !== cartItemId);
  result.splice(index, 0, { ...item, quantity: quantityNew });
  return result;
}

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}
