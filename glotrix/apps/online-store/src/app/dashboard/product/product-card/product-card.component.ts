import { Component, Input } from '@angular/core';
import { Product } from '../../../models/Product';
import { Store } from '@ngrx/store';
import { CartState, addCartItem } from '../../store/cart';

@Component({
  selector: 'gt-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product: Product;

  constructor(private store: Store<CartState>) { }

  addToCart() {
    this.store.dispatch(addCartItem({ product: this.product }));
    console.log("Toaster: Añadido al carrito!")
  }

}
