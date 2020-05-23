import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeekDay } from '@angular/common';

@Component({
	selector: 'gt-week-days',
	templateUrl: './week-days.component.html',
	styleUrls: ['./week-days.component.scss']
})
export class WeekDayComponent implements OnInit {

	@Output() selectionChange = new EventEmitter<WeekDay>();
	selectedDay: WeekDay;
	days: { label: string, id: WeekDay }[] = [
		{ label: "Mon", id: WeekDay.Monday },
		{ label: "Tue", id: WeekDay.Tuesday },
		{ label: "Wed", id: WeekDay.Wednesday },
		{ label: "Thurs", id: WeekDay.Thursday },
		{ label: "Fri", id: WeekDay.Friday },
		{ label: "Sat", id: WeekDay.Saturday },
		{ label: "Su", id: WeekDay.Sunday }
	]

	constructor() { }

	ngOnInit() { }

	onSelected(selected: WeekDay) {
		this.selectedDay = selected;
		this.selectionChange.emit(selected);
	}

}
