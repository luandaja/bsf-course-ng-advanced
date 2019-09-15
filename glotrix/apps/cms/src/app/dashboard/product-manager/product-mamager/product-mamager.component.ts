import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { ProductsState, getProducts } from '../../store/products';
@Component({
  selector: 'gt-product-mamager',
  templateUrl: './product-mamager.component.html',
  styleUrls: ['./product-mamager.component.scss']
})
export class ProductMamagerComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private store: Store<ProductsState>) {
    this.products$ = this.store.pipe(
      select(getProducts),
      tap(console.log)
    );
  }

  ngOnInit() { }
}
