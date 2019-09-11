import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesUploadComponent } from './images-upload/images-upload.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ImagesUploadComponent],
  exports: [ImagesUploadComponent]
})
export class UiImagesUploadModule {}
