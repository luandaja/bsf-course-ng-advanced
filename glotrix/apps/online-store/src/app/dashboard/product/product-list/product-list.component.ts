import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Product } from '../../../models/Product';
import { Store, select } from '@ngrx/store';
import { ProductsState, getProducts } from '../../store/products';
import { tap, map } from 'rxjs/operators';
import { ProductFiltersService } from '../service/product-filters.service';
import { ProductFilter } from '../models/ProductFilter';

@Component({
  selector: 'gt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(
    private store: Store<ProductsState>,
    private filters: ProductFiltersService
  ) { }


  ngOnInit() {
    this.products$ = combineLatest(
      this.store.pipe(select(getProducts)),
      this.filters.getFiltersObservable()
    ).pipe(map(this.filterProductList));
  }

  updateSeachKeyword(value: string) {
    this.filters.setFilters({ keyword: value });
  }

  private filterProductList(pair: [Product[], ProductFilter]) {
    const { keyword = '', categoryId: categoryId } = pair[1];
    const products = pair[0]
      .filter(p =>
        Object.keys(p).some(k =>
          p[k]
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase())
        )
      )
      .filter(p => !categoryId || p.categoryId === categoryId);
    return products;
  }

}
