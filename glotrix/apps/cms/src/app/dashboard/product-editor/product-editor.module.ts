import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductEditorRoutingModule } from './product-editor-routing.module';
import { ProductComponent } from './product/product.component';
import { UiFormsModule } from '@glotrix/ui/forms';
import { UiCarouselModule } from '@glotrix/ui/carousel';
import { UiUploadFileModule } from '@glotrix/ui/upload-file';
import { UiImagePreviewModule } from '@glotrix/ui/image-preview';

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    ProductEditorRoutingModule,
    UiFormsModule,
    UiCarouselModule,
    UiUploadFileModule,
    UiImagePreviewModule
  ]
})
export class ProductEditorModule { }
