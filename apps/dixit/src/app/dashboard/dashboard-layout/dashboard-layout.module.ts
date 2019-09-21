import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavigationModule } from '@glotrix/ui/navigation';

import { DashboardLayoutRoutingModule } from './dashboard-layout-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';


@NgModule({
	declarations: [DashboardLayoutComponent],
	imports: [
		CommonModule,
		DashboardLayoutRoutingModule,
		UiNavigationModule
	]
})
export class DashboardLayoutModule { }
