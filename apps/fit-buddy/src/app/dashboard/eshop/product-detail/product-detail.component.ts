import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../models/Product';
import { ActivatedRoute } from "@angular/router";
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ProductsState, getProduct } from '../../../store/products';
@Component({
	selector: 'gt-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
	productId$: Subscription;
	product$: Observable<Product>;

	constructor(private route: ActivatedRoute, private store: Store<ProductsState>) { }

	ngOnInit() {
		this.productId$ = this.route.params.subscribe(params => this.loadProduct(Number(params['id'])));
	}

	loadProduct(id: number) {
		this.product$ = this.store.pipe(select(getProduct(id)));
	}

	ngOnDestroy(): void {
		this.productId$.unsubscribe();
	}

}
