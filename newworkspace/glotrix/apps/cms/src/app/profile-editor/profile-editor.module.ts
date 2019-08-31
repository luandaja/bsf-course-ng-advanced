import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileEditorRoutingModule } from './profile-editor-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UiLayoutModule } from '@glotrix/ui/layout';
import { UiComponentsUngroupedModule } from '@glotrix/ui/components/ungrouped';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileEditorRoutingModule,
    UiLayoutModule,
    UiComponentsUngroupedModule
  ]
})
export class ProfileEditorModule { }
