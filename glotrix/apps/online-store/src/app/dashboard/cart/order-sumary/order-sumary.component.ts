import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gt-order-sumary',
  templateUrl: './order-sumary.component.html',
  styleUrls: ['./order-sumary.component.scss']
})
export class OrderSumaryComponent implements OnInit {
  @Input() cartItems: { price: number, quantity: number }[];

  private readonly taxPercent = 0.18;
  subtotal = 0;
  taxes = 10;
  total = 0;
  constructor() { }

  ngOnInit() {
    this.calculate();
  }

  private calculate() {
    this.subtotal = this.cartItems.map(cartItem => cartItem.price * cartItem.quantity)
      .reduce((sum, current) => sum + current, 0);
    this.taxes = this.subtotal * this.taxPercent;
    this.total = this.subtotal + this.total;
  }

}
