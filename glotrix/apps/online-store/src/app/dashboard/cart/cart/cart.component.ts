import { Component, OnInit } from '@angular/core';
import { CartState, getCartItems } from '../../store/cart';
import { Store, select } from '@ngrx/store';
import { CartItem } from '../../../models/cartItem';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'gt-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;
  constructor(private store: Store<CartState>) { }

  ngOnInit() {
    this.cartItems$ = this.store.pipe(select(getCartItems));
  }

  get cartItemOrders() {
    return this.cartItems$.pipe(map(this.mapCartItems), tap(console.log));
  }

  private mapCartItems(cartItems: CartItem[]) {
    return cartItems.map(cartItem => ({ price: cartItem.price, quantity: cartItem.quantity }));
  }


}
