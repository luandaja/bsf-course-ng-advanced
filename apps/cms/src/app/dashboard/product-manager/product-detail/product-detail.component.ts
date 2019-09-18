import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../models/Product';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ProductsState, getProduct, updateProduct } from '../../../store/products';
import { FieldType } from '@glotrix/ui/forms';
import { Image } from '@glotrix/ui/images-upload';
import { map, tap } from 'rxjs/operators';
import { entries } from './entries';
@Component({
	selector: 'gt-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
	protected productId$: Subscription;
	protected entries$: Observable<FieldType[]>;
	protected productImages: Array<File | Image>;

	constructor(private route: ActivatedRoute, private store: Store<ProductsState>) { }

	ngOnInit() {
		this.productId$ = this.route.params.subscribe(params => this.loadProduct(Number(params['id'])));
	}

	loadProduct(id: number) {
		this.entries$ = this.store.pipe(
			select(getProduct(id)),
			tap(console.log),
			map(this.getEntrys)
		);
	}

	getEntrys(product: Product): FieldType[] {
		this.productImages = product.images;
		return entries.map(entry => {
			entry.value = product[entry.key];
			return entry;
		});
	}

	onSubmitted(product: Product): void {
		this.store.dispatch(updateProduct({ product }));
	}
	ngOnDestroy(): void {
		this.productId$.unsubscribe();
	}
}
