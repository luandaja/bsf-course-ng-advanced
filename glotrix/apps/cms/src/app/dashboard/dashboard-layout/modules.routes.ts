import { Routes } from '@angular/router';

export const appModules: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('../profile-editor/profile-editor.module').then(
        m => m.ProfileEditorModule
      )
  },
  {
    path: 'product-manager',
    loadChildren: () =>
      import('../product-manager/product-manager.module').then(
        mod => mod.ProductManagerModule
      )
  },
  {
    path: 'product',
    loadChildren: () =>
      import('../product-editor/product-editor.module').then(
        mod => mod.ProductEditorModule
      )
  },
  {
    path: 'sales',
    loadChildren: () =>
      import('../sales/sales.module').then(mod => mod.SalesModule)
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('../analytics/analytics.module').then(mod => mod.AnalyticsModule)
  }
];
