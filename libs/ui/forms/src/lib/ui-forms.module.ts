import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './entries/dropdown/dropdown.component';
import { PasswordComponent } from './entries/password/password.component';
import { TextblockComponent } from './entries/textblock/textblock.component';
import { TexboxComponent } from './entries/textbox/textbox.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormEntryComponent } from './form-entry/form-entry.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    FormEntryComponent,
    FormBuilderComponent,
    TexboxComponent,
    TextblockComponent,
    PasswordComponent,
    DropdownComponent
  ],
  exports: [FormBuilderComponent]
})
export class UiFormsModule {}
