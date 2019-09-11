import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductMamagerComponent } from './product-mamager/product-mamager.component';

const routes: Routes = [{ path: '', component: ProductMamagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagerRoutingModule {}
