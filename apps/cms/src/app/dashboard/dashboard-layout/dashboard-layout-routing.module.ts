import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { appModules, appModulesAsLinkOption } from './modules.routes';
const defaultRoute = appModulesAsLinkOption[0].url;
const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      ...appModules,
      {
        path: '',
        redirectTo: defaultRoute,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardLayoutRoutingModule {}
