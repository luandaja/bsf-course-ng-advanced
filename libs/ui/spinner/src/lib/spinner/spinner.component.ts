import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'gt-spinner',
	templateUrl: './spinner.component.html',
	styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

	@Input() isLoading: boolean;

	constructor() { }

	ngOnInit() { }

}
