import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColDirective } from './col.directive';
import { RowDirective } from './row.directive';



@NgModule({
  declarations: [ColDirective, RowDirective],
  imports: [
    CommonModule
  ],
  exports: [ColDirective, RowDirective]
})
export class LayoutModule { }
