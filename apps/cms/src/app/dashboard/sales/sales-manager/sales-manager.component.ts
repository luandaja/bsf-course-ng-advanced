import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/Order';
import { Observable } from 'rxjs';
import { OrdersState, getOrdersTotal } from '../../../store/orders';
import { Store, select } from '@ngrx/store';
import { OrderTableFilterState, getPagination, changeCurrentPage, setKeywordFilter } from '../../../store/order-table-filter';

@Component({
  selector: 'gt-sales-manager',
  templateUrl: './sales-manager.component.html',
  styleUrls: ['./sales-manager.component.scss']
})
export class SalesManagerComponent implements OnInit {

  protected orders$: Observable<Order[]>;
  protected total$: Observable<number>;
  protected pagination$: Observable<any>;

  constructor(
    private ordersStore: Store<OrdersState>,
    private filtersStore: Store<OrderTableFilterState>
  ) { }

  ngOnInit() {
    this.pagination$ = this.filtersStore.pipe(select(getPagination));
    this.total$ = this.ordersStore.pipe(select(getOrdersTotal));
  }

  updatePagination(page: number) {
    this.filtersStore.dispatch(changeCurrentPage({ page }));
  }

  updateSeachKeyword(keyword: string) {
    this.filtersStore.dispatch(setKeywordFilter({ keyword }));
  }

}
