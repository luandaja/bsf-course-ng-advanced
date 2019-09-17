import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productTableFilterReducer } from './product-table-filter.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('productTableFilter', productTableFilterReducer)
  ]
})
export class ProductTableFilterStoreModule {}
