import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../../../models/Product';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ProductsState, getProduct } from '../../../store/products';
import { FieldType } from '@glotrix/ui/forms';
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
    return entries.map(entry => {
      entry.value = product[entry.key];
      return entry;
    });
  }

  ngOnDestroy(): void {
    this.productId$.unsubscribe();
  }
}
