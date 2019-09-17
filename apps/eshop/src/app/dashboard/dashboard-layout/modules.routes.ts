import { Routes } from '@angular/router';
import { LinkOption } from '@glotrix/ui/navigation';
import startCase from 'lodash.startcase';

export const appModules: Routes = [
  {
    path: 'profile',
    loadChildren: () =>
      import('../profile-editor/profile-editor.module').then(
        m => m.ProfileEditorModule
      )
  },
  {
    path: 'products',
    loadChildren: () =>
      import('../product/product.module').then(
        mod => mod.ProductModule
      )
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('../cart/cart.module').then(mod => mod.CartModule)
  }
];

export const appModulesAsLinkOption: LinkOption[] = appModules.map(item => ({
  url: item.path,
  text: startCase(item.path)
})) as LinkOption[];
