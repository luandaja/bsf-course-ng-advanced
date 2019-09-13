import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesUploadComponent } from './images-upload/images-upload.component';
import { UiImagePreviewModule } from '@glotrix/ui/image-preview';
import { UiUploadFileModule } from '@glotrix/ui/upload-file';

@NgModule({
  imports: [CommonModule, UiImagePreviewModule, UiUploadFileModule],
  declarations: [ImagesUploadComponent],
  exports: [ImagesUploadComponent]
})
export class UiImagesUploadModule { }
