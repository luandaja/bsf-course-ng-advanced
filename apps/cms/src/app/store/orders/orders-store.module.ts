import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ordersReducer } from './orders.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('orders', ordersReducer)]
})
export class OrdersStoreModule { }
