import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditorRoutingModule } from './product-editor-routing.module';
import { ProductComponent } from './product/product.component';
import { UiFormsModule } from '@glotrix/ui/forms';
import { UiCarouselModule } from '@glotrix/ui/carousel';
import { UiImagesUploadModule } from '@glotrix/ui/images-upload';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductEditorRoutingModule,
    UiFormsModule,
    UiCarouselModule,
    UiImagesUploadModule
  ]
})
export class ProductEditorModule { }
