import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { ProductCardComponent } from './product-card/product-card.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../store/products/products.reducer';

@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent, CategoryFilterComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    UiSearchBarModule,
    StoreModule.forFeature('products', productsReducer),
  ]
})
export class ProductModule { }
