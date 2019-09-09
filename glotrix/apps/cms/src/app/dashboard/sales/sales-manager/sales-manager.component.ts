import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';

@Component({
  selector: 'gt-sales-manager',
  templateUrl: './sales-manager.component.html',
  styleUrls: ['./sales-manager.component.scss']
})
export class SalesManagerComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Producto 1', quantity: 10, isDelivered: false }
  ];

  constructor() {}

  ngOnInit() {}
}
