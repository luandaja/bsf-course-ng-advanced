import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { UiFormsModule } from '@glotrix/ui/forms';


@NgModule({
	declarations: [ProfileComponent],
	imports: [
		CommonModule,
		ProfileRoutingModule,
		UiAvatarModule,
		UiFormsModule
	]
})
export class ProfileModule { }
