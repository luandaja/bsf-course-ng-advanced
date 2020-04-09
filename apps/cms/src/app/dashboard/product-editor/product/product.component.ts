import { Component, OnInit } from '@angular/core';
import { FieldType } from '@glotrix/ui/forms';
import { Store, select } from '@ngrx/store';
import { RouterStateUrl, getRouteId, RouterState } from '../../../store/router';
import { tap, switchMap, map, filter, mergeMap } from 'rxjs/operators';
import { ProductsState, getProduct } from '../../../store/products';
import { Product } from '../../../models';
import { Observable, pipe, iif, of } from 'rxjs';
import { productFormFields } from './form-fields';

@Component({
	selector: 'gt-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	protected files: File[] = [];
	protected entries$: Observable<FieldType[]>;

	constructor(
		private routesStore: Store<RouterState>,
		private productsStore: Store<ProductsState>
	) { }

	ngOnInit() {
		const loadFieldsWithProduct = pipe(
			map(id => Number(id)),
			switchMap(id => this.productsStore.pipe(select(getProduct(id)))),
			filter(product => product !== undefined),
			map(this.updateEntriesWithProduct)
		);

		const loadFieldsWithoutProduct = pipe(map(_ => productFormFields));

		this.productsStore.pipe(select(getProduct(1), tap(console.warn))).toPromise();
		this.entries$ = this.routesStore.pipe(
			select(getRouteId),
			mergeMap(id =>
				iif(
					() => id === undefined,
					of(id).pipe(loadFieldsWithoutProduct),
					of(id).pipe(loadFieldsWithProduct)
				)
			)
		);
	}

	onFilesLoaded(filesLoaded: File[]) {
		this.files = filesLoaded;
	}

	updateEntriesWithProduct(product: Product) {
		return productFormFields.map(field => {
			let updatedField = field;
			updatedField.value = product[field.key];
			return updatedField;
		});
	}
}
