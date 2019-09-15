import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/Product';

@Component({
  selector: 'gt-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {

  @Input() product: Product;

  constructor() { }

}
