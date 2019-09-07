import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../shared';
@Component({
  selector: 'gt-product-mamager',
  templateUrl: './product-mamager.component.html',
  styleUrls: ['./product-mamager.component.scss']
})
export class ProductMamagerComponent implements OnInit {
  products: IProduct[] = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'descripción producto 1',
      price: 10.5,
      quantity: 100
    },
    {
      id: 1,
      name: 'Producto 1',
      description: 'descripción producto 1',
      price: 10.5,
      quantity: 100
    }
  ];
  constructor() {}

  ngOnInit() {}
}
