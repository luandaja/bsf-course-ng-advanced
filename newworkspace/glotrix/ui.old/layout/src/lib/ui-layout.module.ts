import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContainerComponent, RowComponent, ColComponent],
  exports: [ContainerComponent, RowComponent, ColComponent]
})
export class UiLayoutModule {}
