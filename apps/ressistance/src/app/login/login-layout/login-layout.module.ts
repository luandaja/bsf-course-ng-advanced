import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutRoutingModule } from './login-layout-routing.module';
import { LoginComponent } from '../login/login.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { UiSpinnerModule } from '@glotrix/ui/spinner';
import { UiLoginModule } from '@glotrix/ui/login';
import { UiFormsModule } from '@glotrix/ui/forms';
import { GameStoreModule } from '../../store/game';


@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		LoginLayoutRoutingModule,
		GameStoreModule,
		UiLoginModule,
		UiSpinnerModule,
		UiAvatarModule,
		UiFormsModule
	]
})
export class LoginLayoutModule { }
