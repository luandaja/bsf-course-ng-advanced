import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  ProductTableFilterState,
  setCategoryFilter
} from '../../../store/product-table-filter';
import { ProductsState, getCategoriesFromProducts } from '../../../store/products';

@Component({
  selector: 'gt-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  protected categories$: Observable<string[]>;
  constructor(
    private store: Store<ProductsState>,
    private filters: Store<ProductTableFilterState>
  ) {}
  ngOnInit(): void {
    this.categories$ = this.store.pipe(select(getCategoriesFromProducts));
  }

  onChangeCategory(category: string) {
    this.filters.dispatch(setCategoryFilter({ category }));
  }
}
