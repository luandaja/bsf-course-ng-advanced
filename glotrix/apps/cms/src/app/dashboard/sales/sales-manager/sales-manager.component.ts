import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { Order } from '../../../models/Order';
import { Observable, combineLatest } from 'rxjs';
import { OrdersState, getOrders } from '../../store/orders';
import { Store, select } from '@ngrx/store';
import { tap, map } from 'rxjs/operators';
import { OrderFilter } from '../models/OrderFilter';
import { OrderFiltersService } from '../service/order-filter.service';

@Component({
  selector: 'gt-sales-manager',
  templateUrl: './sales-manager.component.html',
  styleUrls: ['./sales-manager.component.scss']
})
export class SalesManagerComponent implements OnInit {

  orders$: Observable<Order[]>;
  constructor(
    private store: Store<OrdersState>,
    private filters: OrderFiltersService
  ) { }

  ngOnInit() {
    this.orders$ = combineLatest(
      this.store.pipe(select(getOrders)),
      this.filters.getFiltersObservable()
    ).pipe(
      tap(console.log),
      map(this.filterProductList)
    );
  }

  updateSeachKeyword(value: string) {
    this.filters.setFilters({ keyword: value });
  }

  private filterProductList(pair: [Order[], OrderFilter]) {
    const { keyword = '', status } = pair[1];
    const orders = pair[0]
      .filter(p =>
        Object.keys(p).some(k =>
          p[k]
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase())
        )
      )
      .filter(p => !status || p.status === status);
    return orders;
  }
}
