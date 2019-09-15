import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/Product';

@Component({
  selector: 'gt-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(private location: Location) { }

  ngOnInit() {
    this.product = this.location.getState()["product"];
    console.log("on product detail", this.location.getState()["product"]);
  }

}
