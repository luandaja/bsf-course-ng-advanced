import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models';
import { Observable, combineLatest } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { ProductsState, getProducts } from '../../store/products';
import { ProductFiltersService } from '../services/product-filters.service';
import { ProductFilter } from '../models/ProductFilter';
@Component({
  selector: 'gt-product-mamager',
  templateUrl: './product-mamager.component.html',
  styleUrls: ['./product-mamager.component.scss']
})
export class ProductMamagerComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private store: Store<ProductsState>,
    private filters: ProductFiltersService
  ) { }

  ngOnInit() {
    this.products$ = combineLatest(
      this.store.pipe(select(getProducts)),
      this.filters.getFiltersObservable()
    ).pipe(
      tap(console.log),
      map(this.filterProductList)
    );
  }

  updateSeachKeyword(value: string) {
    console.log(value);
    this.filters.setFilters({ keyword: value });
  }

  private filterProductList(pair: [Product[], ProductFilter]) {
    const { keyword = '', category } = pair[1];
    const products = pair[0]
      .filter(p =>
        Object.keys(p).some(k =>
          p[k]
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase())
        )
      )
      .filter(p => !category || p.category === category);
    return products;
  }
}
