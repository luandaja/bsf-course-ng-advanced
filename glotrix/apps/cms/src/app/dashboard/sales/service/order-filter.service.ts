import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OrderFilter } from '../models/OrderFilter';

@Injectable()
export class OrderFiltersService {

  private filtersSubject: BehaviorSubject<OrderFilter> = new BehaviorSubject<OrderFilter>({});
  private lastValue: OrderFilter;

  getFiltersObservable = () => this.filtersSubject.asObservable();

  setFilters = (filters: OrderFilter) => {
    this.lastValue = filters;
    this.filtersSubject.next({ ...this.lastValue, ...filters });
  };
}
