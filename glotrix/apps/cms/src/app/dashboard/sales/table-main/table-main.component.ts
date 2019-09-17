import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../models/Order';
import { OrdersState } from '../../store/orders/orders.state';
import { Store } from '@ngrx/store';
import { orderDelivered } from '../../store/orders/orders.actions';
import { OrderStatus } from '../../../models/OrderStatus';

@Component({
  selector: 'gt-table-main-sales',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss']
})
export class TableMainComponent implements OnInit {

  @Input() orders: Order[];
  constructor(private store: Store<OrdersState>) { }

  ngOnInit() {
  }

  delivered(order: Order) {
    this.store.dispatch(
      orderDelivered({ orderId: order.id })
    );
    console.log("toaster: order delivered!");
  }

  isPaid(order: Order): boolean {
    return order.statusId == OrderStatus.Paid;
  }

  seeInvoice() {
    console.log("Toaster: future feature to see the order invoice");
  }
}
