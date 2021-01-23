import { Action, createReducer, on } from '@ngrx/store';
import { fetchMealPlans } from './meal-plans.actions';
import { MealPlansState, initalState } from './meal-plans.state';

const reducer = createReducer(
	initalState,
	on(fetchMealPlans, (state, { }) => ({ ...state, isLoading: true }))
);

export function mealPlansReducer(state: MealPlansState | undefined, action: Action) {
	return reducer(state, action);
}
