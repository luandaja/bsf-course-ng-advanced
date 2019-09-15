import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagerRoutingModule } from './product-manager-routing.module';
import { ProductMamagerComponent } from './product-mamager/product-mamager.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiTablesModule } from '@glotrix/ui/tables';

import { UiFormsModule } from '@glotrix/ui/forms';
import { FormsModule } from '@angular/forms';

import { TableMainComponent } from './table-main/table-main.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../store/products';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UiImagesUploadModule } from '@glotrix/ui/images-upload';
import { ProductFiltersService } from './services/product-filters.service';

@NgModule({
  declarations: [
    ProductMamagerComponent,
    TableMainComponent,
    CategoryFilterComponent,
    ProductDetailComponent
  ],
  providers: [ProductFiltersService],
  imports: [
    CommonModule,
    ProductManagerRoutingModule,
    UiSearchBarModule,
    UiTablesModule,
    StoreModule.forFeature('products', productsReducer),
    UiFormsModule,
    FormsModule,
    UiImagesUploadModule
  ]
})
export class ProductManagerModule {}
