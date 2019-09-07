import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagerRoutingModule } from './product-manager-routing.module';
import { ProductMamagerComponent } from './product-mamager/product-mamager.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiTablesModule } from '@glotrix/ui/tables';
import { UiCarouselModule } from '@glotrix/ui/carousel';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [ProductMamagerComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductManagerRoutingModule,
    UiSearchBarModule,
    UiTablesModule,
    UiCarouselModule
  ]
})
export class ProductManagerModule { }
