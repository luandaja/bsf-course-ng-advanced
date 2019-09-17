import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Product } from '../../../models/Product';
import { Store, select } from '@ngrx/store';
import { ProductsState, getProductsTotal, getProducts } from '../../../store/products';
import { ProductFilterState, getPagination, changeCurrentPage, setKeywordFilter, getFilters } from '../../../store/product-filter';
import { map } from 'rxjs/operators';

@Component({
  selector: 'gt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  protected products$: Observable<Product[]>;
  protected total$: Observable<number>;
  protected pagination$: Observable<any>;

  constructor(
    private productsStore: Store<ProductsState>,
    private filtersStore: Store<ProductFilterState>
  ) { }


  ngOnInit() {
    this.pagination$ = this.filtersStore.pipe(select(getPagination));
    this.total$ = this.productsStore.pipe(select(getProductsTotal));
    this.products$ = combineLatest(
      this.productsStore.pipe(select(getProducts)),
      this.filtersStore.pipe(select(getFilters))
    ).pipe(map(this.filterProductList));
  }


  updatePagination(page: number) {
    this.filtersStore.dispatch(changeCurrentPage({ page }));
  }
  updateSeachKeyword(keyword: string) {
    this.filtersStore.dispatch(setKeywordFilter({ keyword }));
  }

  private filterProductList(pair: [Product[], ProductFilterState]) {
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
