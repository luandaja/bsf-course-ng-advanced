import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MealPlansState } from './meal-plans.state';
import { WeekDay } from '@angular/common';

const mealPlansFeature = createFeatureSelector<MealPlansState>('meal-plans');

export const getMealPlan = (day: WeekDay) => createSelector(
	mealPlansFeature,
	(state: MealPlansState) => state.mealPlans.filter(x => x.id == day)[0]
);

