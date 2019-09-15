import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductFilter } from '../models/ProductFilter';

@Injectable()
export class ProductFiltersService {

  private filtersSubject: BehaviorSubject<ProductFilter> = new BehaviorSubject<ProductFilter>({});
  private lastValue: ProductFilter;

  getFiltersObservable = () => this.filtersSubject.asObservable();

  setFilters = (filters: ProductFilter) => {
    this.lastValue = filters;
    this.filtersSubject.next({ ...this.lastValue, ...filters });
  };

}
