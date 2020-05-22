import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MealPlansState } from './meal-plans.state';

const mealPlansFeature = createFeatureSelector<MealPlansState>('meal-plans');

export const getMealPlan = (day: string) => createSelector(
	mealPlansFeature,
	(state: MealPlansState) => state.mealPlans.filter(x => x.id == day)[0]
);

