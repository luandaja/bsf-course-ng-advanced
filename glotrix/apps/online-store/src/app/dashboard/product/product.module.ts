import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiTablesModule } from '@glotrix/ui/tables';
import { UiCarouselModule } from '@glotrix/ui/carousel';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsStoreModule } from '../../store/products/product-store.module';
import { ProductFilterStoreModule } from '../../store/product-filter';

@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent, CategoryFilterComponent, ProductCardComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    UiSearchBarModule,
    UiCarouselModule,
    UiTablesModule,
    ProductsStoreModule,
    ProductFilterStoreModule
  ]
})
export class ProductModule { }
