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
import { UiImagesUploadModule } from '@glotrix/ui/images-upload';
import { ProductTableFilterStoreModule } from '../../store/product-table-filter';

@NgModule({
	declarations: [ProductMamagerComponent, TableMainComponent, CategoryFilterComponent],

	imports: [
		CommonModule,
		ProductManagerRoutingModule,
		UiSearchBarModule,
		UiTablesModule,
		UiFormsModule,
		FormsModule,
		UiImagesUploadModule,
		ProductTableFilterStoreModule
	]
})
export class ProductManagerModule {}
