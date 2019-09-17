import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { UiNavigationModule } from '@glotrix/ui/navigation';
import { ProductsStoreModule } from '../../store/products';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    DashboardLayoutRoutingModule,
    UiNavigationModule,
    ProductsStoreModule
  ]
})
export class DashboardLayoutModule {}
