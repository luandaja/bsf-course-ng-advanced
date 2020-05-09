import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { UiCounterModule } from '@glotrix/ui/counter';

import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { CartStoreModule } from '../../store/cart/cart-store.module';

@NgModule({
  declarations: [CartComponent, CartItemComponent, OrderSumaryComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    UiCounterModule,
    CartStoreModule,
  ]
})
export class CartModule { }
