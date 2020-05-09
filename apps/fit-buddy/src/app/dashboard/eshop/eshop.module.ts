import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EshopRoutingModule } from './eshop-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { UiSearchBarModule } from '@glotrix/ui/search-bar';
import { UiCarouselModule } from '@glotrix/ui/carousel';
import { UiTablesModule } from '@glotrix/ui/tables';
import { ProductsStoreModule } from '../../store/products/product-store.module';
import { ProductFilterStoreModule } from '../../store/product-filter';


@NgModule({
	declarations: [
		ProductDetailComponent,
		ProductListComponent,
		ProductCardComponent
	],
	imports: [
		CommonModule,
		EshopRoutingModule,
		UiSearchBarModule,
		UiCarouselModule,
		UiTablesModule,
		ProductsStoreModule,
		ProductFilterStoreModule
	]
})
export class EshopModule { }
