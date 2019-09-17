import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productFilterReducer } from './product-filter.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('productFilter', productFilterReducer)
  ]
})
export class ProductFilterStoreModule { }