import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditorRoutingModule } from './product-editor-routing.module';
import { ProductComponent } from './product/product.component';
import { UiFormsModule } from '@glotrix/ui/forms';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductEditorRoutingModule,
    UiFormsModule
  ]
})
export class ProductEditorModule { }
