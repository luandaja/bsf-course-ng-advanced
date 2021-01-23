import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { UiNavigationModule } from '@glotrix/ui/navigation';
import { CartStoreModule } from '../../store/cart/cart-store.module';
// import { ProductsStoreModule } from '../../store/products';

@NgModule({
	declarations: [DashboardLayoutComponent],
	imports: [
		CommonModule,
		DashboardLayoutRoutingModule,
		UiNavigationModule,
		CartStoreModule
	]
})
export class DashboardLayoutModule { }
