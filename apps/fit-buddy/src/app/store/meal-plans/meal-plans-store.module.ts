import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { mealPlansReducer } from './meal-plans.reducer';

@NgModule({
	imports: [CommonModule, StoreModule.forFeature('meal-plans', mealPlansReducer)]
})
export class MealPlansStoreModule { }
