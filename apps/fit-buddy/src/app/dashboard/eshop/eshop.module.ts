import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { ProductsComponent } from './products/products.component';
import { EshopComponent } from './eshop/eshop.component';


@NgModule({
  declarations: [ProductsComponent, EshopComponent],
  imports: [
    CommonModule,
    EshopRoutingModule
  ]
})
export class EshopModule { }
