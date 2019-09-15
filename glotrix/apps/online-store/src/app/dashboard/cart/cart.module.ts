import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { StoreModule } from '@ngrx/store';
import { UiCounterModule } from '@glotrix/ui/counter';

import { cartReducer } from '../store/cart/cart.reducer';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';

@NgModule({
  declarations: [CartComponent, CartItemComponent, OrderSumaryComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    UiCounterModule,
    StoreModule.forFeature('cart', cartReducer),
  ]
})
export class CartModule { }
