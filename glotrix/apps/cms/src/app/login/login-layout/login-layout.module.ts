import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginLayoutRoutingModule } from './login-layout-routing.module';
import { UiFormsModule } from '@glotrix/ui/forms';
import { LoginComponent } from '../login/login.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginLayoutRoutingModule,
    UiFormsModule,
    UiAvatarModule
  ]
})
export class LoginLayoutModule { }
