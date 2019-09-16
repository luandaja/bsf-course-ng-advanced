import { Action, createReducer, on } from '@ngrx/store';
import { fetchCartItems, setCartItems } from './cart.actions';
import { CartState, initalState } from './cart.state';

const reducer = createReducer(
  initalState,
  on(fetchCartItems, (state, { }) => ({ ...state, isLoading: true })),
  on(setCartItems, (state, { cartItems }) => ({ ...state, cartItems }))
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}
