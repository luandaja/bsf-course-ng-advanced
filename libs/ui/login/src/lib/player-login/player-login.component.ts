import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { loginEntries } from './form-fields';

@Component({
	selector: 'gt-player-login',
	templateUrl: './player-login.component.html',
	styleUrls: ['./player-login.component.scss']
})
export class PlayerLoginComponent implements OnInit {
	entries = loginEntries;
	selectedAvatar: string = null;
	@Output() playerChange = new EventEmitter<{ avatarUrl: string, username: string }>();
	@Input() avatars: string[];

	constructor() { }

	ngOnInit() { }

	onAvatarSelected(avatar: string) {
		this.selectedAvatar = avatar;
	}

	onSubmitted(formData: any) {
		this.playerChange.emit({ username: formData.username, avatarUrl: this.selectedAvatar });
	}
}
