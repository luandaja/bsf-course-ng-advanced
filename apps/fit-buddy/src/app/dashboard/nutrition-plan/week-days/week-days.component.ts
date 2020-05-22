import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'gt-week-days',
	templateUrl: './week-days.component.html',
	styleUrls: ['./week-days.component.scss']
})
export class WeekDayComponent implements OnInit {

	@Output() selected = new EventEmitter<string>();
	selectedClassName: string;

	private selectedClass = 'block-active';
	days: { label: string, className: string }[] = [
		{ label: "Monday", className: "monday" },
		{ label: "Tuesday", className: "tuesday" },
		{ label: "Wednesday", className: "wednesday" },
		{ label: "Thursday", className: "thursday" },
		{ label: "Friday", className: "friday" },
		{ label: "Saturday", className: "saturday" },
		{ label: "Sunday", className: "sunday" }
	]

	constructor() { }

	ngOnInit() { }

	onSelected(className: string) {
		this.selectedClassName = className;
		this.selected.emit(className);
	}

	getClass(className: string) {
		return this.selectedClassName == className ? `${className} ${this.selectedClass}` : className;
	}

}
