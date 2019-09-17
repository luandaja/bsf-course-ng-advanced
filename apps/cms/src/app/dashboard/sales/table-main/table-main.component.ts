import { Component, OnInit } from '@angular/core';
import { OrdersState, getOrders } from '../../../store/orders';
import { Store, select } from '@ngrx/store';
import { orderDelivered } from '../../../store/orders/orders.actions';
import { Observable, combineLatest } from 'rxjs';
import { OrderTableFilterState, getFilters } from '../../../store/order-table-filter';
import { map } from 'rxjs/operators';
import { Order } from '../../../models/Order';
import { OrderStatus } from '../../../models/OrderStatus';

@Component({
  selector: 'gt-table-main-sales',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss']
})
export class TableMainComponent implements OnInit {

  protected orders$: Observable<Order[]>;

  constructor(
    private ordersStore: Store<OrdersState>,
    private filtersStore: Store<OrderTableFilterState>) { }

  ngOnInit() {
    this.orders$ = combineLatest(
      this.ordersStore.pipe(select(getOrders)),
      this.filtersStore.pipe(select(getFilters))
    ).pipe(map(this.filterOrderList));
  }

  delivered(order: Order) {
    this.ordersStore.dispatch(
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

  private filterOrderList(pair: [Order[], OrderTableFilterState]) {
    const [orderList, filters] = pair;
    const { keyword = '', status, pageSize, currentPage } = filters;
    const orders = orderList
      .filter(p =>
        Object.keys(p).some(k =>
          p[k]
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase())
        )
      )
      .filter(p => !status || p.status === status)
      .slice((currentPage - 1) * pageSize)
      .slice(0, pageSize);

    return orders;
  }
}

