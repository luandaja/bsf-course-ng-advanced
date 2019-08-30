import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardLayoutComponent,
    children:[
      {
        path: 'profile',
        loadChildren: () => import('../profile-editor/profile-editor.module').then(mod => mod.ProfileEditorModule)
      },
      {
        path: 'product',
        loadChildren: () => import('../product-manager/product-manager.module').then(mod => mod.ProductManagerModule)
      }
    ],
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children:[
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(mod => mod.LoginModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
