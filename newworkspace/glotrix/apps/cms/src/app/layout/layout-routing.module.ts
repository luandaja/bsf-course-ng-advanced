import { LoginModule } from './../login/login.module';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
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
    path: 'login',
    component: LoginLayoutComponent,
    children:[
      {
        path: 'sign-in',
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
