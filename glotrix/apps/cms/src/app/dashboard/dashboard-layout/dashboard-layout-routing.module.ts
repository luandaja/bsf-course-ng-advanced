import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

const modules: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('../profile-editor/profile-editor.module').then(
        m => m.ProfileEditorModule
      )
  },
  {
    path: 'product-manager',
    loadChildren: () => import('../product-manager/product-manager.module').then(mod => mod.ProductManagerModule)
  },
  {
    path: 'product',
    loadChildren: () => import('../product-editor/product-editor.module').then(mod => mod.ProductEditorModule)
  },
  {
    path: 'sales',
    loadChildren: () => import('../sales/sales.module').then(mod => mod.SalesModule)
  },
  {
    path: 'analytics',
    loadChildren: () => import('../analytics/analytics.module').then(mod => mod.AnalyticsModule)
  },
];

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [...modules]
  },

  { path: '', redirectTo: 'profile', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardLayoutRoutingModule { }
