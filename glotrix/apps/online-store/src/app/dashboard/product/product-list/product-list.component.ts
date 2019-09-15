import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../../models/Product';
import { Store, select } from '@ngrx/store';
import { ProductsState, getProducts } from '../../store/products';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'gt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private store: Store<ProductsState>) {
    this.products$ = this.store.pipe(
      select(getProducts),
      tap(console.log)
    );
  }

  ngOnInit() {
  }

}
