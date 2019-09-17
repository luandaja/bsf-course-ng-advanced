import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models';
import { Store, select } from '@ngrx/store';
import { ProductsState, getProducts } from '../../../store/products';
import { Observable, combineLatest } from 'rxjs';
import { ProductTableFilterState, getFilters } from '../../../store/product-table-filter';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gt-table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss']
})
export class TableMainComponent implements OnInit {
  protected products$: Observable<Product[]>;
  constructor(
    private productsStore: Store<ProductsState>,
    private filtersStore: Store<ProductTableFilterState>
  ) { }

  ngOnInit() {
    this.products$ = combineLatest(
      this.productsStore.pipe(select(getProducts)),
      this.filtersStore.pipe(select(getFilters))
    ).pipe(map(this.filterProductList));
  }

  private filterProductList(pair: [Product[], ProductTableFilterState]) {
    const [productList, filters] = pair;
    const { keyword = '', category, pageSize, currentPage } = filters;
    const products = productList
      .filter(p =>
        Object.keys(p).some(k =>
          p[k]
            .toString()
            .toLowerCase()
            .includes(keyword.toLowerCase())
        )
      )
      .filter(p => !category || p.category === category)
      .slice((currentPage - 1) * pageSize)
      .slice(0, pageSize);

    return products;
  }
}
