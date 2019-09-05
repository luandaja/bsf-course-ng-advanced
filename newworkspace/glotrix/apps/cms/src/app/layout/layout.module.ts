import { UiNavigationModule } from '@glotrix/ui/navigation';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    LoginLayoutComponent,
    UiAvatarModule
  ],
  imports: [CommonModule, LayoutRoutingModule, UiNavigationModule]
})
export class LayoutModule {}
