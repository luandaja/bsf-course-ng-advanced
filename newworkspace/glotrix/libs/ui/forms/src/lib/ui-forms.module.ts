import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEntryComponent } from './form-entry/form-entry.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [FormEntryComponent, FormBuilderComponent],
  exports: [FormBuilderComponent]
})
export class UiFormsModule {}
