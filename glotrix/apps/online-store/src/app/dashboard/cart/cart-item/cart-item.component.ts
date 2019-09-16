import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { Router } from '@angular/router';
import { removeCartItem, updateCartItem } from '../../store/cart/cart.actions';
import { Store } from '@ngrx/store';
import { CartState } from '../../store/cart';

@Component({
  selector: 'gt-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  // @Output() cartItemChange = new EventEmitter<CartItem>();

  constructor(private router: Router, private store: Store<CartState>, ) { }

  ngOnInit() {
  }

  goToDetail(productId: number) {
    this.router.navigate(['/dashboard/products/detail/', productId])
  }

  remove() {
    this.store.dispatch(removeCartItem({ cartItem: this.cartItem }));
  }

  onCounterChanged(counter: number) {
    this.store.dispatch(updateCartItem({ cartItemId: this.cartItem.id, quantity: counter }));
  }

}
