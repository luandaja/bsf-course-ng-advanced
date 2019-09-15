import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../../models/cartItem';

@Component({
  selector: 'gt-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  // @Output() cartItemChange = new EventEmitter<CartItem>();
  alet = 3;
  constructor() { }

  ngOnInit() {
  }

}
