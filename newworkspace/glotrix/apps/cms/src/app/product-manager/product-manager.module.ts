import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagerRoutingModule } from './product-manager-routing.module';
import { ProductMamagerComponent } from './product-mamager/product-mamager.component';


@NgModule({
  declarations: [ProductMamagerComponent],
  imports: [
    CommonModule,
    ProductManagerRoutingModule
  ]
})
export class ProductManagerModule { }
