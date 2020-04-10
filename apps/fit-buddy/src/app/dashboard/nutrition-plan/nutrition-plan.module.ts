import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionPlanRoutingModule } from './nutrition-plan-routing.module';
import { NutritionPlanComponent } from './nutrition-plan/nutrition-plan.component';


@NgModule({
  declarations: [NutritionPlanComponent],
  imports: [
    CommonModule,
    NutritionPlanRoutingModule
  ]
})
export class NutritionPlanModule { }
