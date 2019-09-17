import { Routes } from '@angular/router';
import { LinkOption } from '@glotrix/ui/navigation';
import startCase from 'lodash.startcase';
import { AuthGuard } from '../../core/services/auth.guard';

export const appModules: Routes = [
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../profile-editor/profile-editor.module').then(
        m => m.ProfileEditorModule
      )
  },
  {
    path: 'product-manager',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../product-manager/product-manager.module').then(
        mod => mod.ProductManagerModule
      )
  },
  {
    path: 'product',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../product-editor/product-editor.module').then(
        mod => mod.ProductEditorModule
      )
  },
  {
    path: 'sales',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../sales/sales.module').then(mod => mod.SalesModule)
  },
  {
    path: 'analytics',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../analytics/analytics.module').then(mod => mod.AnalyticsModule)
  }
];

export const appModulesAsLinkOption: LinkOption[] = appModules.map(item => ({
  url: item.path,
  text: startCase(item.path)
})) as LinkOption[];
