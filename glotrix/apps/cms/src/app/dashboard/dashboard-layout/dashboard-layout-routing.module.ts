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
  }
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
export class DashboardLayoutRoutingModule {}
