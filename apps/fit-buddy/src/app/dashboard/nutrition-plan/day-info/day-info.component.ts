import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MealPlansState, getMealPlan } from '../../../store/meal-plans';
import { Observable } from 'rxjs';
import { MealPlan } from '../../../models/MealPlan';
import { WeekDay } from '@angular/common';

@Component({
	selector: 'gt-day-info',
	templateUrl: './day-info.component.html',
	styleUrls: ['./day-info.component.scss']
})
export class DayInfoComponent implements OnChanges {
	mealPlan$: Observable<MealPlan>;
	@Input() weekDay: WeekDay;
	constructor(private store: Store<MealPlansState>) { }

	ngOnChanges() {
		this.mealPlan$ = this.store.pipe(select(getMealPlan(this.weekDay)));
	}

}
