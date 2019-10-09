import { Component, OnInit, Input } from '@angular/core';
import { WelcomeMessage } from '../models/WelcomeMessage';

@Component({
	selector: 'gt-welcome-card',
	templateUrl: './welcome-card.component.html',
	styleUrls: ['./welcome-card.component.scss']
})
export class WelcomeCardComponent implements OnInit {

	@Input() message: WelcomeMessage;
	constructor() { }

	ngOnInit() {
	}

}
