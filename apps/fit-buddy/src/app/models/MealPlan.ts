import { Meal } from './Meal';

export interface MealPlan {
	id?: string;
	dayName?: string;
	meals?: Meal[];
	notes?: string;
}
