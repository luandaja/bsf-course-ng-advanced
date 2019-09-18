import { Component, Input } from '@angular/core';
import { Banner } from '../models/Banner';

@Component({
	selector: 'gt-welcome-banner',
	templateUrl: './welcome-banner.component.html',
	styleUrls: ['./welcome-banner.component.scss']
})
export class WelcomeBannerComponent {
	@Input() banner: Banner;

	constructor() {}
}
