import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NutritionPlanComponent } from './nutrition-plan/nutrition-plan.component';


const routes: Routes = [
	{ path: '', component: NutritionPlanComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class NutritionPlanRoutingModule { }
