import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../shared/IProduct';

@Component({
  selector: 'gt-sales-manager',
  templateUrl: './sales-manager.component.html',
  styleUrls: ['./sales-manager.component.scss']
})
export class SalesManagerComponent implements OnInit {

  products: IProduct[] = [
    { id: 1, name: 'Producto 1', quantity: 10, isDelivered: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
