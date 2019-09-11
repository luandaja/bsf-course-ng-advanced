import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagerRoutingModule } from './product-manager-routing.module';
import { ProductMamagerComponent } from './product-mamager/product-mamager.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiTablesModule } from '@glotrix/ui/tables';
import { UiCarouselModule } from '@glotrix/ui/carousel';

import { UiFormsModule } from '@glotrix/ui/forms';
import { FormsModule } from '@angular/forms';

import { TableMainComponent } from './table-main/table-main.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../store/products';

@NgModule({
  declarations: [ProductMamagerComponent, TableMainComponent, CategoryFilterComponent],

  imports: [
    CommonModule,
    ProductManagerRoutingModule,
    UiSearchBarModule,
    UiTablesModule,
    StoreModule.forFeature('products', productsReducer),
    UiCarouselModule,
    UiFormsModule,
    FormsModule
  ]
})
export class ProductManagerModule {}
