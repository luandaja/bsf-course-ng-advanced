import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesManagerComponent } from './sales-manager/sales-manager.component';


const routes: Routes = [
  { path: '', component: SalesManagerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
