import { Component, OnInit } from '@angular/core';
import { ProductFilterState, setCategoryFilter } from '../../../store/product-filter';
import { ProductsState, getCategoriesFromProducts } from '../../../store/products';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'gt-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {

  protected categories$: Observable<string[]>;
  constructor(
    private store: Store<ProductsState>,
    private filters: Store<ProductFilterState>
  ) { }
  ngOnInit(): void {
    this.categories$ = this.store.pipe(select(getCategoriesFromProducts));
  }

  onChangeCategory(category: string) {
    this.filters.dispatch(setCategoryFilter({ category }));
  }
}
