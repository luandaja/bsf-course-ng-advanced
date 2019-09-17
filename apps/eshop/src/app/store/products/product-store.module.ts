import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducer';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('products', productsReducer)]
})
export class ProductsStoreModule { }
