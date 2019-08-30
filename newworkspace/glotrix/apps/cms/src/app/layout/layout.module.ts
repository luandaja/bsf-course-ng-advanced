import { UiNavigationModule } from '@glotrix/ui/components/navigation';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';


@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UiNavigationModule
  ]
})
export class LayoutModule { }
