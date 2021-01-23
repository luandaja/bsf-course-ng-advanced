import { Component, OnInit } from '@angular/core';
import { WeekDay } from '@angular/common';

@Component({
	selector: 'gt-nutrition-plan',
	templateUrl: './nutrition-plan.component.html',
	styleUrls: ['./nutrition-plan.component.scss']
})
export class NutritionPlanComponent implements OnInit {
	day: WeekDay;
	constructor() { }

	ngOnInit() { }


	onDaySelected(daySelected: WeekDay) {
		this.day = daySelected;
	}
}
