import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { UiNavigationModule } from '@glotrix/ui/navigation';


@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    DashboardLayoutRoutingModule,
    UiNavigationModule
  ]
})
export class DashboardLayoutModule { }
