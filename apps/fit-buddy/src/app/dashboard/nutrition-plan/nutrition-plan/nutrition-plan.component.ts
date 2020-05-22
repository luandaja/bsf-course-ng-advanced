import { Component, OnInit } from '@angular/core';
import { Meal } from '../../../models/Meal';

@Component({
	selector: 'gt-nutrition-plan',
	templateUrl: './nutrition-plan.component.html',
	styleUrls: ['./nutrition-plan.component.scss']
})
export class NutritionPlanComponent implements OnInit {
	day: string;
	constructor() { }

	ngOnInit() { }


	onDaySelected(daySelected: string) {
		this.day = daySelected;
	}
}
