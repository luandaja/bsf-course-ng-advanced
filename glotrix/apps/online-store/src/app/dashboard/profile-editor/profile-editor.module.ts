import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEditorRoutingModule } from './profile-editor-routing.module';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileEditorRoutingModule
  ]
})
export class ProfileEditorModule { }
