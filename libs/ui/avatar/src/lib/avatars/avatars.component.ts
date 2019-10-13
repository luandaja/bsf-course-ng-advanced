import { Component, OnChanges, Input } from '@angular/core';
@Component({
	selector: 'gt-avatars',
	templateUrl: './avatars.component.html',
	styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnChanges {

	@Input() isInLine = false;
	@Input() avatars: string[];

	constructor() { }

	ngOnChanges() {

		console.log('avatars component:', this.avatars);
	}

}
