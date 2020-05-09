import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';


const routes: Routes = [
	{ path: '', component: RecipesComponent },
	{ path: 'detail/:id', component: RecipesDetailComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RecipesRoutingModule { }
