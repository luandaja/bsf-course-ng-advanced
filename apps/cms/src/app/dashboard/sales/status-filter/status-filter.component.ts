import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrdersState, getStatusListFromOrders } from '../../../store/orders';
import { Store, select } from '@ngrx/store';
import { OrderTableFilterState, setStatusFilter } from '../../../store/order-table-filter';

@Component({
  selector: 'gt-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.scss']
})
export class StatusFilterComponent implements OnInit {
  protected statusList$: Observable<string[]>;
  constructor(
    private store: Store<OrdersState>,
    private filters: Store<OrderTableFilterState>
  ) { }

  ngOnInit(): void {
    this.statusList$ = this.store.pipe(select(getStatusListFromOrders));
  }

  onChangeStatus(status: string) {
    this.filters.dispatch(setStatusFilter({ status: status }));
  }

}
