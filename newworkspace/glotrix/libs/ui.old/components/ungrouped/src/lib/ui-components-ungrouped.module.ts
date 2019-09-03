import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgRoundedComponent } from './img-rounded/img-rounded.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ImgRoundedComponent],
  exports: [ImgRoundedComponent]
})
export class UiComponentsUngroupedModule {}
