import { Action, createReducer, on } from '@ngrx/store';
import { fetchCartItems, setCartItems, removeCartItem, updateCartItem, addCartItem } from './cart.actions';
import { CartState, initalState } from './cart.state';
import { CartItem } from '../../../models/cartItem';
import { Product } from '../../../models/Product';

const reducer = createReducer(
  initalState,
  on(fetchCartItems, (state, { }) => ({ ...state, isLoading: true })),
  on(setCartItems, (state, { cartItems }) => ({ ...state, cartItems })),
  on(removeCartItem, (state, { cartItem }) => ({ ...state, cartItems: state.cartItems.filter(item => item.id !== cartItem.id) })),
  on(updateCartItem, (state, { cartItemId, quantity }) => ({ ...state, cartItems: update(state.cartItems, cartItemId, quantity) })),
  on(addCartItem, (state, { product }) => ({ ...state, cartItems: add(state.cartItems, product) }))
);

function update(cartItems: CartItem[], cartItemId: number, quantityNew: number) {
  let item = cartItems.filter(item => item.id === cartItemId)[0];
  let index = cartItems.indexOf(item);
  let result = cartItems.filter(item => item.id !== cartItemId);
  result.splice(index, 0, { ...item, quantity: quantityNew });
  return result;
}

function add(cartItems: CartItem[], product: Product) {
  const cartItem: CartItem = {
    imageUrl: product.images[0], description: product.description,
    price: product.price, quantity: 1, productId: product.id, name: product.name, id: cartItems.length + 1
  };
  cartItems.splice(cartItems.length - 1, 0, cartItem);
  return cartItems;
}

export function cartReducer(state: CartState | undefined, action: Action) {
  return reducer(state, action);
}
