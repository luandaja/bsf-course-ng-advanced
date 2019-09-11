import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models';
@Component({
  selector: 'gt-product-mamager',
  templateUrl: './product-mamager.component.html',
  styleUrls: ['./product-mamager.component.scss']
})
export class ProductMamagerComponent implements OnInit {
  products: Product[] = [];
  constructor() {}

  ngOnInit() {}
}
