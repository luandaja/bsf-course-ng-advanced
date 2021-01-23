import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionPlanRoutingModule } from './nutrition-plan-routing.module';
import { NutritionPlanComponent } from './nutrition-plan/nutrition-plan.component';
import { WeekDayComponent as WeekDaysComponent } from './week-days/week-days.component';
import { DayInfoComponent } from './day-info/day-info.component';
import { MealPlansStoreModule } from '../../store/meal-plans';


@NgModule({
	declarations: [NutritionPlanComponent, WeekDaysComponent, DayInfoComponent],
	imports: [
		CommonModule,
		NutritionPlanRoutingModule,
		MealPlansStoreModule
	]
})
export class NutritionPlanModule { }
