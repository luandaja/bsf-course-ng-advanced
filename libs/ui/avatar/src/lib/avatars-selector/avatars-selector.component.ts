import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'gt-avatars-selector',
	templateUrl: './avatars-selector.component.html',
	styleUrls: ['./avatars-selector.component.scss']
})
export class AvatarsSelectorComponent implements OnInit {
	@Input() avatars: string[];
	@Output() selectionChange = new EventEmitter<string[]>();

	selection: string[] = [];

	constructor() { }

	ngOnInit() { }

	isSelected(avatar: string) {
		return this.selection.includes(avatar);
	}

	select(avatar: string) {
		if (this.isSelected(avatar)) {
			this.selection = this.selection.filter(x => x !== avatar);
		} else {
			this.selection.push(avatar);
		}
		this.selectionChange.emit(this.selection);
	}
}
