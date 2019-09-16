import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../../models/cartItem';
import { Router } from '@angular/router';

@Component({
  selector: 'gt-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem;
  // @Output() cartItemChange = new EventEmitter<CartItem>();
  alet = 3;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(productId: number) {
    this.router.navigate(['/dashboard/products/detail/', productId])
  }

  remove() {

  }

}
