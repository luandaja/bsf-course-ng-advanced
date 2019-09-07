import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';

import { ActiveUsersReportComponent } from './active-users-report/active-users-report.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [ActiveUsersReportComponent, AnalyticsComponent],
  imports: [CommonModule, AnalyticsRoutingModule]
})
export class AnalyticsModule {}
