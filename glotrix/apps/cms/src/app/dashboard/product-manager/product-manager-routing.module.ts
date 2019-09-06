import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductMamagerComponent } from './product-mamager/product-mamager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  { path: '', component: ProductMamagerComponent },
  { path: 'detail', component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagerRoutingModule { }
