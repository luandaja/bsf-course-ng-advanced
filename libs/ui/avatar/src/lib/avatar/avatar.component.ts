import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'gt-avatar',
	templateUrl: './avatar.component.html',
	styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
	protected defaultImg = 'https://m.media-amazon.com/images/S/aplus-media/mg/dbf4301f-af40-46f2-9a87-a99deddcd9a2._SL300__.jpg';
	protected _source = this.defaultImg;

	@Input() isSelected = false;
	@Input() width = 30;
	@Input() height = 30;
	@Input()
	get source() {
		return this._source;
	}

	set source(value) {
		this._source = value || this.defaultImg;
	}

	constructor() { }

	ngOnInit() { }

}
