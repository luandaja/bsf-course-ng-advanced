import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { ProductsState, getProductsTotal } from '../../../store/products';
import {
	ProductTableFilterState,
	getPagination,
	changeCurrentPage,
	setKeywordFilter
} from '../../../store/product-table-filter';

@Component({
	selector: 'gt-product-mamager',
	templateUrl: './product-mamager.component.html',
	styleUrls: ['./product-mamager.component.scss']
})
export class ProductMamagerComponent implements OnInit {
	protected total$: Observable<number>;
	protected pagination$: Observable<any>;

	constructor(
		private productsStore: Store<ProductsState>,
		private filtersStore: Store<ProductTableFilterState>
	) { }

	ngOnInit() {
		this.pagination$ = this.filtersStore.pipe(select(getPagination));
		this.total$ = this.productsStore.pipe(select(getProductsTotal));
	}

	updatePagination(page: number) {
		this.filtersStore.dispatch(changeCurrentPage({ page }));
	}
	updateSeachKeyword(keyword: string) {
		this.filtersStore.dispatch(setKeywordFilter({ keyword }));
	}
}
