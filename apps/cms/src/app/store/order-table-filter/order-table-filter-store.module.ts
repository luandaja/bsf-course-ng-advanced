import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { orderTableFilterReducer } from './order-table-filter.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('orderTableFilter', orderTableFilterReducer)
  ]
})
export class OrderTableFilterStoreModule { }
