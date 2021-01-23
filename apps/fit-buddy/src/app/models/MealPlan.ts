import { Meal } from './Meal';
import { WeekDay } from '@angular/common';

export interface MealPlan {
	id?: WeekDay;
	dayName?: string;
	meals?: Meal[];
	notes?: string;
}
