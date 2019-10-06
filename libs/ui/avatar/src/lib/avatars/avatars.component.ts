import { Component, OnChanges, Input } from '@angular/core';
import { Avatar } from '../../models';

@Component({
	selector: 'gt-avatars',
	templateUrl: './avatars.component.html',
	styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnChanges {

	@Input() avatars: Avatar[];

	constructor() { }

	ngOnChanges() { }

}