import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SocialNetwork, socialNetworkStyles } from '../models/SocialNetworkTypes';

@Component({
	selector: 'ui-social-button',
	templateUrl: './social-button.component.html',
	styleUrls: ['./social-button.component.scss']
})
export class SocialButtonComponent {
	@Input() text = 'Sign in';
	@Input() socialNetwork: SocialNetwork = SocialNetwork.GooglePlus;
	@Output() signedIn = new EventEmitter<any>();

	constructor() {}

	get networkStyle() {
		return socialNetworkStyles[this.socialNetwork];
	}

	onSignIn() {
		this.signedIn.emit(null);
	}
}
