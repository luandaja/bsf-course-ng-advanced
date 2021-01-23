import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'gt-avatar-selector',
	templateUrl: './avatar-selector.component.html',
	styleUrls: ['./avatar-selector.component.scss']
})
export class AvatarSelectorComponent implements OnInit {
	@Output() avatarChange = new EventEmitter<string>();
	@Input() avatars: string[];
	selected: string = null;

	constructor() { }

	ngOnInit() { }

	select(avatar: string) {
		this.selected = avatar;
		this.avatarChange.emit(avatar);
	}
}
