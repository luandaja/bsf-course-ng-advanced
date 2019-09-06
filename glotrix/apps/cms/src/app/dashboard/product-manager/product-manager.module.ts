import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagerRoutingModule } from './product-manager-routing.module';
import { ProductMamagerComponent } from './product-mamager/product-mamager.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiTablesModule } from '@glotrix/ui/tables';


@NgModule({
  declarations: [ProductMamagerComponent],
  imports: [
    CommonModule,
    ProductManagerRoutingModule,
    UiSearchBarModule,
    UiTablesModule
  ]
})
export class ProductManagerModule { }
